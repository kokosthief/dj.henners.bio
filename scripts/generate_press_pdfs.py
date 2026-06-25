from __future__ import annotations

import html
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "downloads" / "documents"
OUT.mkdir(parents=True, exist_ok=True)

SITE = "https://dj.srenneh.com"
SOUNDCLOUD = "https://soundcloud.com/srenneh"
CONTACT = f"{SITE}/#contact"
UPDATED = "June 2026"

BASE_CSS = """
@page { size: A4; margin: 16mm; }
:root { color-scheme: light; }
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: #172033;
  background: #f7f3ea;
  font-size: 11.4pt;
  line-height: 1.48;
}
a { color: #0f5f72; text-decoration: none; }
.page {
  min-height: calc(297mm - 32mm);
  page-break-after: always;
  position: relative;
  padding: 0;
}
.page:last-child { page-break-after: auto; }
.cover {
  min-height: calc(297mm - 32mm);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 26mm 19mm 18mm;
  background:
    radial-gradient(circle at 18% 18%, rgba(15,95,114,.23), transparent 34%),
    radial-gradient(circle at 90% 8%, rgba(183,126,42,.22), transparent 30%),
    linear-gradient(135deg, #07101a, #111928 62%, #05080d);
  color: white;
  border-radius: 18px;
}
.eyebrow { letter-spacing: .22em; text-transform: uppercase; font-size: 8.5pt; color: #d8b56a; font-weight: 700; }
h1 { margin: 14px 0 16px; font-size: 38pt; line-height: .95; letter-spacing: -.045em; }
h2 { margin: 0 0 12px; font-size: 24pt; line-height: 1.05; letter-spacing: -.035em; color: #101827; }
h3 { margin: 18px 0 7px; font-size: 14.5pt; color: #101827; }
p { margin: 0 0 10px; }
ul { margin: 7px 0 14px 18px; padding: 0; }
li { margin: 0 0 6px; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.card {
  background: rgba(255,255,255,.76);
  border: 1px solid rgba(23,32,51,.12);
  border-radius: 14px;
  padding: 14px 15px;
  break-inside: avoid;
}
.dark-card { background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.16); color: #e9eef8; }
.dark-card strong { color: white; }
.section { padding: 5mm 2mm 0; }
.meta { color: #5d6878; font-size: 9.5pt; }
.cover .meta { color: #cbd5e1; }
.pill { display: inline-block; border: 1px solid rgba(216,181,106,.55); border-radius: 999px; padding: 6px 10px; color: #f4d98c; font-weight: 700; }
.footer { position: absolute; left: 2mm; right: 2mm; bottom: 0; color: #7a8492; font-size: 8.5pt; border-top: 1px solid rgba(23,32,51,.12); padding-top: 7px; }
.cover .footer { color: #cbd5e1; border-top-color: rgba(255,255,255,.18); left: 19mm; right: 19mm; bottom: 18mm; }
.small { font-size: 9.5pt; color: #5d6878; }
.quote { font-size: 17pt; line-height: 1.24; letter-spacing: -.02em; color: #101827; }
"""

artist_short = "Henners is an Amsterdam-based ecstatic dance facilitator and DJ creating grounded, emotionally intelligent music journeys for conscious dance floors, retreats, ceremonies, and festivals."
artist_medium = "Henners guides ecstatic dance journeys that move from grounding into rhythm, release, joy, stillness, and integration. Shaped by Amsterdam’s conscious dance scene and years of sets at Odessa and community gatherings, his work is not only musical but relational: reading the floor, protecting the arc, and giving the body permission to feel."
artist_long = """Henners is an Amsterdam-based ecstatic dance facilitator and DJ creating conscious dance journeys for movement communities, ceremonies, retreats, and festivals. His sets are designed as held arcs: a grounded arrival, a rhythmic build, space for release and play, and a soft landing back into the body.

His work grew through Amsterdam’s ecstatic dance scene, including years of community floors, Odessa gatherings, cacao ceremonies, festivals, and intimate movement spaces. Rather than treating a set as a playlist, Henners works with the emotional field of the room — tracking energy, protecting transitions, and supporting both joy and tenderness when they arise.

Musically, his sound draws from global rhythms, earthy grooves, deep percussion, warm melodic textures, and spacious integration tracks. The aim is simple: help people move honestly, feel safely, and reconnect with themselves and each other through dance."""

pause_note = "Henners is currently taking a pause from DJing and gigging. This site remains as an archive, listening place, and clear reference for future invitations when the timing feels aligned."

photos = [
    ("Rijksmuseum DJ Booth", "/downloads/high-res/rijksmuseum-dj-booth.png"),
    ("Rijksmuseum Dancefloor", "/downloads/high-res/rijksmuseum-dancefloor.png"),
    ("Rijksmuseum Close Up", "/downloads/high-res/rijksmuseum-close-up.png"),
    ("Cacao Ceremony", "/downloads/high-res/cacao.jpg"),
    ("Ceremony Space", "/downloads/high-res/ceremony.jpg"),
    ("Groove Session", "/downloads/high-res/groove.jpg"),
]

videos = [
    ("Ambrosia at Rijksmuseum", "/downloads/videos/ambrosia-rijksmuseum.mp4"),
    ("Ambrosia at Het Sieraad", "/downloads/videos/ambrosia-het-sieraad.mp4"),
    ("Lundjuweel 2025", "/downloads/videos/lundjuweel-2025.mp4"),
]

def esc(text: str) -> str:
    return html.escape(text).replace("\n", "<br>")

def shell_link(label: str, href: str) -> str:
    return f'<a href="{href}">{esc(label)}</a>'

def doc(title: str, body: str) -> str:
    return f"""<!doctype html><html><head><meta charset='utf-8'><title>{esc(title)}</title><style>{BASE_CSS}</style></head><body>{body}</body></html>"""

def cover(title: str, subtitle: str, kind: str) -> str:
    return f"""
    <section class="page cover">
      <div>
        <div class="eyebrow">HENNERS · {esc(kind)}</div>
        <h1>{esc(title)}</h1>
        <p style="font-size:16pt;line-height:1.35;max-width:145mm;color:#e9eef8">{esc(subtitle)}</p>
        <p class="pill" style="margin-top:18px">Ecstatic Dance Facilitator & DJ · Amsterdam</p>
      </div>
      <div class="grid">
        <div class="card dark-card"><strong>Website</strong><br>{shell_link(SITE, SITE)}</div>
        <div class="card dark-card"><strong>SoundCloud</strong><br>{shell_link(SOUNDCLOUD, SOUNDCLOUD)}</div>
        <div class="card dark-card"><strong>Contact</strong><br>{shell_link(CONTACT, CONTACT)}</div>
        <div class="card dark-card"><strong>Status</strong><br>{esc(pause_note)}</div>
      </div>
      <div class="footer">Updated {UPDATED} · Canonical URL: {SITE}</div>
    </section>
    """

def bio_document() -> str:
    body = cover("Artist Biography", "Bio copy and positioning for organizers, publications, and conscious dance communities.", "Biography")
    body += f"""
    <section class="page section">
      <p class="eyebrow">Biography</p>
      <h2>Short, medium, and long versions</h2>
      <div class="card"><h3>Short bio</h3><p>{esc(artist_short)}</p></div>
      <div class="card"><h3>Medium bio</h3><p>{esc(artist_medium)}</p></div>
      <div class="card"><h3>Long bio</h3><p>{esc(artist_long)}</p></div>
      <div class="card"><h3>Current note</h3><p>{esc(pause_note)}</p></div>
      <div class="footer">Henners · Artist Biography · {SITE}</div>
    </section>
    <section class="page section">
      <p class="eyebrow">Context</p>
      <h2>Musical approach</h2>
      <p class="quote">A held arc: arrival, grounding, rhythm, release, play, stillness, and integration.</p>
      <div class="grid">
        <div class="card"><h3>Sound</h3><p>Global rhythms, earthy grooves, deep percussion, warm melodic textures, spacious integration tracks, and emotional pacing.</p></div>
        <div class="card"><h3>Role</h3><p>Not just track selection: reading the room, protecting transitions, and supporting honest movement on the floor.</p></div>
        <div class="card"><h3>Suitable contexts</h3><p>Ecstatic dance, retreats, ceremonies, festivals, cacao gatherings, intimate movement rooms, and conscious community floors.</p></div>
        <div class="card"><h3>Location</h3><p>Amsterdam-based, Netherlands-focused, with international context and travel history.</p></div>
      </div>
      <div class="footer">Henners · Artist Biography · {SITE}</div>
    </section>
    """
    return doc("Henners Artist Biography", body)

def rider_document() -> str:
    body = cover("Technical Rider", "Simple technical and hospitality context for a calm, professional ecstatic dance DJ set.", "Technical Rider")
    body += f"""
    <section class="page section">
      <p class="eyebrow">DJ set requirements</p>
      <h2>Audio, setup, and support</h2>
      <div class="grid">
        <div class="card"><h3>Audio equipment</h3><ul><li>Professional sound system appropriate for full-range dance music.</li><li>Pioneer DJM-900NXS2 mixer or newer.</li><li>Three Pioneer CDJ-3000 players, or CDJ-2000NXS2 where agreed.</li><li>Linked players with required LAN cables/switch.</li><li>Stereo booth monitors with independent level control.</li></ul></div>
        <div class="card"><h3>Technical support</h3><ul><li>Sound engineer or stage/FOH contact available before and during the set.</li><li>All equipment tested before arrival.</li><li>Enough setup time for linking players, checking USBs, and a calm soundcheck.</li></ul></div>
        <div class="card"><h3>Setup timing</h3><ul><li>Allow roughly 30 minutes for setup and soundcheck.</li><li>Please confirm DJ booth position, changeover flow, and who handles final sound approval.</li></ul></div>
        <div class="card"><h3>Hospitality</h3><ul><li>Water, tea, fruit, and a clean towel in or near the booth.</li><li>A grounded, low-stress arrival helps protect the musical arc of the session.</li></ul></div>
      </div>
      <div class="card"><h3>Questions or alternatives</h3><p>If the venue has a different setup, send details through the contact form before the event: {shell_link(CONTACT, CONTACT)}.</p></div>
      <div class="footer">Henners · Technical Rider · {SITE}</div>
    </section>
    """
    return doc("Henners Technical Rider", body)

def press_kit_document() -> str:
    photo_links = "".join(f"<li>{esc(name)} — {shell_link(SITE + path, SITE + path)}</li>" for name, path in photos)
    video_links = "".join(f"<li>{esc(name)} — {shell_link(SITE + path, SITE + path)}</li>" for name, path in videos)
    body = cover("Complete Press Kit", "Biography, positioning, media links, technical context, and current status for organizers.", "Press Kit")
    body += f"""
    <section class="page section">
      <p class="eyebrow">Overview</p>
      <h2>Who this is for</h2>
      <div class="card"><p>{esc(artist_medium)}</p></div>
      <div class="grid">
        <div class="card"><h3>Website</h3><p>{shell_link(SITE, SITE)}</p></div>
        <div class="card"><h3>Listen</h3><p>{shell_link(SOUNDCLOUD, SOUNDCLOUD)}</p></div>
        <div class="card"><h3>Contact</h3><p>{shell_link(CONTACT, CONTACT)}</p></div>
        <div class="card"><h3>Current status</h3><p>{esc(pause_note)}</p></div>
      </div>
      <h3>Short bio</h3><p>{esc(artist_short)}</p>
      <h3>Long bio</h3><p>{esc(artist_long)}</p>
      <div class="footer">Henners · Complete Press Kit · {SITE}</div>
    </section>
    <section class="page section">
      <p class="eyebrow">Organizer context</p>
      <h2>Sound, floor, and proof</h2>
      <div class="grid">
        <div class="card"><h3>Set shape</h3><p>Grounded arrival, rhythmic build, release, play, stillness, and integration.</p></div>
        <div class="card"><h3>Rooms</h3><p>Ecstatic dance, retreats, festivals, ceremonies, cacao gatherings, and conscious movement communities.</p></div>
        <div class="card"><h3>Notable contexts</h3><p>Amsterdam ecstatic dance scene, Odessa community floors, Ambrosia, Rijksmuseum footage, Lundjuweel, and Netherlands/international movement spaces.</p></div>
        <div class="card"><h3>Technical baseline</h3><p>Professional sound system, Pioneer mixer/players, stereo booth monitoring, stage contact, and a calm 30-minute setup window.</p></div>
      </div>
      <div class="footer">Henners · Complete Press Kit · {SITE}</div>
    </section>
    <section class="page section">
      <p class="eyebrow">Media links</p>
      <h2>Photos, videos, and documents</h2>
      <div class="grid">
        <div class="card"><h3>Selected photos</h3><ul>{photo_links}</ul></div>
        <div class="card"><h3>Selected videos</h3><ul>{video_links}</ul></div>
      </div>
      <div class="card"><h3>Documents</h3><ul>
        <li>Artist Biography — {shell_link(SITE + '/downloads/documents/artist-biography.pdf', SITE + '/downloads/documents/artist-biography.pdf')}</li>
        <li>Technical Rider — {shell_link(SITE + '/downloads/documents/technical-rider.pdf', SITE + '/downloads/documents/technical-rider.pdf')}</li>
        <li>Press Kit Page — {shell_link(SITE + '/media-package', SITE + '/media-package')}</li>
      </ul></div>
      <div class="footer">Henners · Complete Press Kit · {SITE}</div>
    </section>
    """
    return doc("Henners Complete Press Kit", body)

DOCS = {
    "artist-biography.pdf": bio_document(),
    "technical-rider.pdf": rider_document(),
    "complete-press-kit.pdf": press_kit_document(),
}

chrome_candidates = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "google-chrome",
    "chromium",
]
chrome = next((c for c in chrome_candidates if Path(c).exists() or '/' not in c), None)
if not chrome:
    raise SystemExit("No Chrome/Chromium binary found for HTML-to-PDF generation")

with tempfile.TemporaryDirectory() as tmp:
    tmpdir = Path(tmp)
    for filename, html_text in DOCS.items():
        html_path = tmpdir / filename.replace(".pdf", ".html")
        pdf_path = OUT / filename
        html_path.write_text(html_text, encoding="utf-8")
        cmd = [
            chrome,
            "--headless=new",
            "--disable-gpu",
            "--no-pdf-header-footer",
            f"--print-to-pdf={pdf_path}",
            html_path.as_uri(),
        ]
        subprocess.run(cmd, check=True)
        print(f"wrote {pdf_path.relative_to(ROOT)} ({pdf_path.stat().st_size:,} bytes)")
