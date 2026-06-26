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
@page { size: A4; margin: 18mm; }
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: #1f1b16;
  background: #fffdf8;
  font-size: 11pt;
  line-height: 1.48;
}
a { color: #5b3b18; text-decoration: none; }
h1 { margin: 0 0 8mm; font-size: 26pt; line-height: 1.05; letter-spacing: -.02em; }
h2 { margin: 9mm 0 3mm; font-size: 14pt; }
h3 { margin: 5mm 0 2mm; font-size: 11.5pt; }
p { margin: 0 0 4mm; }
ul { margin: 2mm 0 5mm 5mm; padding-left: 4mm; }
li { margin: 0 0 2mm; }
.header { border-bottom: 1px solid #d8d0c3; padding-bottom: 5mm; margin-bottom: 7mm; }
.eyebrow { letter-spacing: .16em; text-transform: uppercase; font-size: 8pt; color: #7a6146; font-weight: 700; margin-bottom: 2mm; }
.meta { color: #62584d; font-size: 9.5pt; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 7mm; }
.box { border-top: 1px solid #d8d0c3; padding-top: 4mm; break-inside: avoid; }
.footer { position: fixed; left: 18mm; right: 18mm; bottom: 12mm; border-top: 1px solid #d8d0c3; padding-top: 3mm; color: #756b60; font-size: 8.5pt; }
"""

artist_short = "Henners is an Amsterdam-based ecstatic dance facilitator and DJ crafting full-arc dance journeys through rhythm, release, play, grounding, and stillness."
artist_medium = "Amsterdam-based ecstatic dance facilitator and DJ shaped by the city’s conscious dance scene and years around the Odessa ship. Henners crafts full-arc dance journeys inspired by 5Rhythms and the hero’s journey — moving through arrival, flow, rhythm, chaos and release, integration and play, grounding, then stillness."
artist_long = """Henners is an Amsterdam-based ecstatic dance facilitator and DJ from the city’s conscious dance scene, rooted in years around the Odessa ship.

His sets are crafted as full journeys, with 5Rhythms and the hero’s journey in mind: arrival, flow, rhythm, chaos and release, integration and play, grounding, then stillness.

The music moves between global rhythms, African-inspired grooves, earthy percussion, melody, silence, and spacious integration. Sometimes it invites people to bounce, shake, and sweat. Sometimes it gives the room space to soften, feel, and come back to itself.

The journey is prepared with care, but never fixed shut. Henners holds the arc while staying responsive to the energy of the room."""


def esc(text: str) -> str:
    return html.escape(text).replace("\n", "<br>")


def link(label: str, href: str) -> str:
    return f'<a href="{href}">{esc(label)}</a>'


def page(title: str, subtitle: str, body: str) -> str:
    return f"""<!doctype html>
<html><head><meta charset='utf-8'><title>{esc(title)}</title><style>{BASE_CSS}</style></head>
<body>
  <div class="header">
    <div class="eyebrow">Henners · Ecstatic Dance Facilitator & DJ · Amsterdam</div>
    <h1>{esc(title)}</h1>
    <p class="meta">{esc(subtitle)}</p>
    <p class="meta">Website: {link(SITE, SITE)} · SoundCloud: {link(SOUNDCLOUD, SOUNDCLOUD)} · Contact: {link(CONTACT, CONTACT)}</p>
  </div>
  {body}
  <div class="footer">Updated {UPDATED} · {SITE}</div>
</body></html>"""


def bio_document() -> str:
    body = f"""
    <h2>Short bio</h2>
    <p>{esc(artist_short)}</p>

    <h2>Medium bio</h2>
    <p>{esc(artist_medium)}</p>

    <h2>Long bio</h2>
    <p>{esc(artist_long)}</p>
    """
    return page("Artist Biography", "Plain bio copy for event pages, listings, organizers, and publications.", body)


def rider_document() -> str:
    body = """
    <h2>Preferred setup</h2>
    <div class="grid">
      <div class="box">
        <h3>Club / festival environment</h3>
        <ul>
          <li>Professional sound system suitable for full-range dance music.</li>
          <li>Pioneer CDJ setup with mixer, already connected to the sound system.</li>
          <li>Booth monitor if available.</li>
          <li>Someone on site who knows the system and can help with line check.</li>
        </ul>
      </div>
      <div class="box">
        <h3>Most ecstatic dance setups</h3>
        <ul>
          <li>Please arrange a Pioneer DDJ controller for laptop plug-and-play where possible.</li>
          <li>I travel with my computer and prefer to keep the setup light.</li>
          <li>Please have the controller connected to the sound system before arrival.</li>
          <li>A simple soundcheck / line check is enough if everything is prepared.</li>
        </ul>
      </div>
    </div>

    <h2>Backup option</h2>
    <p>If necessary, I can bring my own controller with my computer. In that case the organizer needs to provide a working connection into the stereo / PA system, normally RCA cables or the correct adapter for the venue system.</p>

    <h2>Please confirm before the event</h2>
    <ul>
      <li>What sound system is being used?</li>
      <li>Will there be CDJs + mixer, a Pioneer DDJ controller, or should I bring my own controller?</li>
      <li>Which cable input is available into the mixer / stereo / PA?</li>
      <li>Who is the technical contact on arrival?</li>
      <li>When can I do a quick line check?</li>
    </ul>

    <h2>Useful but not dramatic</h2>
    <ul>
      <li>Water nearby.</li>
      <li>A small stable table / booth space.</li>
      <li>Enough time to plug in calmly before people arrive.</li>
    </ul>
    """
    return page("Technical Rider", "Simple one-page setup note. No overcomplicated stage requirements.", body)


DOCS = {
    "artist-biography.pdf": bio_document(),
    "technical-rider.pdf": rider_document(),
}

chrome_candidates = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "google-chrome",
    "chromium",
]
chrome = next((c for c in chrome_candidates if Path(c).exists() or "/" not in c), None)
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
