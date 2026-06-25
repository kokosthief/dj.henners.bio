'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

import { trackEvent } from '../analytics';

const DOWNLOAD_EXTENSIONS = ['pdf', 'zip', 'jpg', 'jpeg', 'png', 'webp', 'mp4', 'mov', 'txt'];
const SECTION_LABELS: Record<string, string> = {
  facilitation: 'facilitation',
  listen: 'listen',
  upcoming: 'upcoming_gigs',
  'past-gigs': 'past_gigs',
  contact: 'contact',
};

function getText(element: globalThis.HTMLElement) {
  return element.innerText?.replace(/\s+/g, ' ').trim().slice(0, 120) || element.getAttribute('aria-label') || element.getAttribute('title') || 'unlabelled';
}

function getSection(element: globalThis.HTMLElement) {
  const section = element.closest('section[id], div[id]');
  const id = section?.id;
  if (!id) return undefined;
  return SECTION_LABELS[id] ?? id;
}

function getFileInfo(url: URL) {
  const pathname = decodeURIComponent(url.pathname);
  const fileName = pathname.split('/').pop() ?? pathname;
  const extension = fileName.includes('.') ? fileName.split('.').pop()?.toLowerCase() : undefined;
  return { fileName, extension };
}

function classifyLink(anchor: HTMLAnchorElement) {
  const href = anchor.href;
  if (!href) return null;

  const url = new URL(href, window.location.href);
  const isExternal = url.origin !== window.location.origin;
  const { fileName, extension } = getFileInfo(url);
  const isDownload = anchor.hasAttribute('download') || (extension ? DOWNLOAD_EXTENSIONS.includes(extension) : false);
  const text = getText(anchor);
  const section = getSection(anchor);

  if (isDownload) {
    return {
      name: 'file_download',
      params: {
        event_label: text,
        link_text: text,
        link_url: url.href,
        file_name: fileName,
        file_extension: extension,
        section,
      },
    };
  }

  if (isExternal) {
    return {
      name: 'outbound_click',
      params: {
        event_label: text,
        link_text: text,
        link_url: url.href,
        link_domain: url.hostname,
        section,
      },
    };
  }

  const isContact = url.hash === '#contact' || url.searchParams.get('contact') === '1';
  const isCta = anchor.className.toString().includes('rounded-full') || /contact|press kit|listen|journey|events|facilitation|materials|home/i.test(text);

  if (isContact) {
    return {
      name: 'contact_cta_click',
      params: {
        event_label: text,
        link_text: text,
        link_url: url.href,
        section,
      },
    };
  }

  if (isCta) {
    return {
      name: 'cta_click',
      params: {
        event_label: text,
        link_text: text,
        link_url: url.href,
        destination_path: url.pathname + url.search + url.hash,
        section,
      },
    };
  }

  return null;
}

export default function SiteAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPageKey = useRef<string | null>(null);

  useEffect(() => {
    const search = searchParams.toString();
    const pageKey = `${pathname}?${search}`;
    if (lastPageKey.current === pageKey) {
      return;
    }
    lastPageKey.current = pageKey;

    const pageLocation = `${window.location.origin}${pathname}${search ? `?${search}` : ''}`;
    trackEvent('page_view', {
      page_path: pathname,
      page_location: pageLocation,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  useEffect(() => {
    const clickedElements = new WeakSet<globalThis.Element>();

    const handleClick = (event: globalThis.MouseEvent) => {
      const target = event.target;
      if (!(target instanceof window.Element)) return;

      const anchor = target.closest('a');
      if (anchor instanceof window.HTMLAnchorElement && !clickedElements.has(anchor)) {
        clickedElements.add(anchor);
        const eventPayload = classifyLink(anchor);
        if (eventPayload) {
          trackEvent(eventPayload.name, eventPayload.params);
        }
        window.setTimeout(() => clickedElements.delete(anchor), 500);
        return;
      }

      const button = target.closest('button');
      if (button instanceof window.HTMLButtonElement && !clickedElements.has(button)) {
        clickedElements.add(button);
        const text = getText(button);
        trackEvent('button_click', {
          event_label: text,
          button_text: text,
          section: getSection(button),
        });
        window.setTimeout(() => clickedElements.delete(button), 500);
      }
    };

    const trackedScrollDepths = new Set<number>();
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const depth = Math.round((window.scrollY / scrollable) * 100);
      [25, 50, 75, 90].forEach((threshold) => {
        if (depth >= threshold && !trackedScrollDepths.has(threshold)) {
          trackedScrollDepths.add(threshold);
          trackEvent('scroll_depth', {
            event_label: `${threshold}%`,
            percent_scrolled: threshold,
          });
        }
      });
    };

    document.addEventListener('click', handleClick, true);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleClick, true);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
