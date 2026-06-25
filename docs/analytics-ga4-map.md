# Henners GA4 analytics event map

Canonical property currently loaded by the site: `G-VXLP5EWYHC`.

## Events sent by the website

Core navigation and engagement:

- `page_view` — emitted on route changes, with `page_path`, `page_location`, `page_title`.
- `cta_click` — internal CTA links such as Listen, Events, Press kit.
- `contact_cta_click` — links that target the contact form (`#contact` or `?contact=1`).
- `outbound_click` — external links such as SoundCloud / Instagram, with `link_domain`, `link_url`, `link_text`.
- `scroll_depth` — 25 / 50 / 75 / 90 percent thresholds, with `percent_scrolled`.
- `button_click` — generic button clicks, with `button_text` and section when available.

Contact funnel:

- `contact_form_start` — first real contact-field edit, with `field_name`.
- `contact_form_submit_attempt` — submit button pressed.
- `contact_form_submit` — API accepted the message.
- `contact_form_error` — API/client error, with truncated `error_message`.

Media / press kit:

- `soundcloud_player_load` — user loads the embedded SoundCloud player.
- `press_kit_video_play` — user plays one of the press-kit video cards.
- `press_kit_bio_copy` — user copies a short/medium/long bio.
- `press_kit_links_download` — user downloads the generated press-kit links text file.
- `file_download` — any asset/document/video/photo download link, with `file_name`, `file_extension`, `link_url`.

## Recommended GA4 key events / conversions

Mark these as key events in GA4:

1. `contact_form_submit`
2. `press_kit_links_download`
3. `press_kit_video_play`
4. `soundcloud_player_load`
5. Optional: `outbound_click` filtered to SoundCloud/Mixcloud/Hipsy later.

## Recommended GA4 custom dimensions

GA4 Admin → Data display → Custom definitions → Create custom dimension.

Use event-scoped custom dimensions for:

- `page_path`
- `link_text`
- `link_url`
- `link_domain`
- `section`
- `file_name`
- `file_extension`
- `button_text`
- `percent_scrolled`
- `destination_path`
- `field_name`
- `track_url`

GA4 stores event parameters before custom dimensions are created, but custom dimensions make them easier to use in reports/explorations going forward.

## Funnel exploration ideas

### Organizer / booking funnel

1. `page_view` where `page_path` is `/`, `/ecstatic-dance-dj-amsterdam`, `/ecstatic-dance-dj-netherlands`, `/events`, or `/media-package`
2. `cta_click` or `contact_cta_click`
3. `contact_form_start`
4. `contact_form_submit_attempt`
5. `contact_form_submit`

### Press-kit funnel

1. `page_view` where `page_path` is `/media-package`
2. `press_kit_video_play` or `press_kit_bio_copy`
3. `file_download` or `press_kit_links_download`
4. `contact_cta_click`
5. `contact_form_submit`

### Listening / music intent funnel

1. `page_view`
2. `cta_click` with destination `/#listen` or `soundcloud_player_load`
3. `outbound_click` with `link_domain` = `soundcloud.com`
4. `contact_form_submit`

## GA4 setup checklist

- Realtime: open the live site and click Listen / Load player / press-kit video to confirm the events arrive.
- Admin → Events: after events appear, mark key events.
- Admin → Custom definitions: create the event-scoped dimensions listed above.
- Explore → Funnel exploration: build the funnels above.
- Search Console: connect Search Console to the GA4 property so page/query data can be compared with onsite behavior.
