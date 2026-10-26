import React from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "../Breadcrumb";

const poemTypeStyles = `
@import url('https://fonts.googleapis.com/css2?family=Forum&display=swap');
.poetry-reading-page { background:radial-gradient(ellipse at 85% 0%,#242b2c 0%,#101416 35%,#080a0b 75%);color:#deded8;min-height:100vh; }
.poetry-reading-page .page-content { max-width:900px; }
.poetry-reading-page h1 { font-family:'Forum',Georgia,serif !important;font-weight:400 !important;font-size:clamp(3rem,7vw,5.8rem);line-height:1.06;letter-spacing:.015em; }
.poetry-reading-page .record-poem { font-family:'Forum',Georgia,serif;font-size:clamp(1.3rem,2.1vw,1.65rem);line-height:1.7 !important;max-width:700px;color:#e0e0da;border:0;padding:1rem 0; }
.poetry-reading-page .archive-note { background:transparent !important;border-left:0 !important;border-right:0 !important;border-top:1px solid #414748;border-bottom:0 !important;box-shadow:none !important; }
.poetry-reading-page .record-subtitle { letter-spacing:.17em; }
`;
export function RecordPage() {
  const { id } = useParams();

  if (id === "011") {
    return (
      <section className="page-section poetry-reading-page">
        <style>{poemTypeStyles}</style>
        <div className="page-content">
          <Breadcrumb items={[{ label: "Archive", to: "/archive" }, { label: "Manuscripts", to: "/manuscripts" }, { label: "Threads of a Rope" }]} />
          <p className="eyebrow">ORIGINAL POEM // 011</p>
          <h1>Threads of a Rope</h1>
          <p className="record-subtitle">CONTEMPORARY POETRY · SHELDYN GRUHN</p>
          <section className="archive-note">
            <p className="eyebrow">POEM DETAILS</p>
            <p><strong>Writer:</strong> Sheldyn Gruhn</p>
            <p><strong>Date Archived:</strong> October 26, 2026</p>
            <p><strong>Document Type:</strong> Original Poem</p>
          </section>
          <section className="archive-note">
            <p className="eyebrow">FULL TEXT</p>
            <blockquote className="record-poem" style={{ whiteSpace: "pre-wrap", lineHeight: 2 }}>
              {`My limbs feel like threads of a rope
Some tugged and worn
Others set on fire
As my flesh starts to smoulder

The fire pulls me close
To cool me down
So the pain I feel
Will finally burn out

Then mocks me
For mistaking its flames
For an embrace
It holds me down
To string barbed wire through my veins

The threads of the rope start to fray

I can’t feel the ground
Beneath my feet anymore
My voice calls for help
But nothing comes out

I plummet through the smoke
And think, my oh my
Is this what it’s like
To feel myself burn alive?

The threads begin to cinch my throat
Igniting my eyes
Now I can’t see
If the smoke has cleared

My oh my
I wish I had thought this through
One last time`}
            </blockquote>
          </section>
          <div className="record-nav">
            <Link to="/manuscripts">{"←"} All Manuscripts</Link>
            <Link to="/record/010">Nerves of a Harp {"→"}</Link>
          </div>
        </div>
      </section>
    );
  }

  if (id === "009") {
    return (
      <section className="page-section poetry-reading-page">\n        <style>{poemTypeStyles}</style>
        <div className="page-content">
          <Breadcrumb items={[{ label: "Archive", to: "/archive" }, { label: "Manuscripts", to: "/manuscripts" }, { label: "The Hands of Those Dying" }]} />
          <p className="eyebrow">ORIGINAL POEM // 009</p>
          <h1>The Hands of Those Dying</h1>
          <p className="record-subtitle">CONTEMPORARY POETRY · SHELDYN GRUHN</p>
          <section className="archive-note">
            <p className="eyebrow">POEM DETAILS</p>
            <p><strong>Writer:</strong> Sheldyn Gruhn</p>
            <p><strong>Date Written:</strong> October 20, 2026</p>
            <p><strong>Document Type:</strong> Original Poem</p>
          </section>
          <section className="archive-note">
            <p className="eyebrow">FULL TEXT</p>
            <blockquote className="record-poem" style={{ whiteSpace: "pre-wrap", lineHeight: 2 }}>
{"Is it the hands\nOf those dying \nOr of those who've\nAlready gone\n\nAn undying requiem \nThey must await\nTo ease the souls of those\nPrying around me at my feet\n\nOr an empty choir\nThat refuses to \nLet me go \nUntil they hollow out \nevery one of my bones\n\nSo hollow I’d rather have static wires \nTearing through my veins \nDraining me cold of my own blood\nThan succumb to my own decay\n\nAt last I fall\nJust for those dying to feel\nTheir justice is dancing\nAround my lifeless flesh \nWith their violins using my cold \nAnd limber hands"}
            </blockquote>
          </section>
          <div className="record-nav">
            <Link to="/manuscripts">{"\\u2190"} All Manuscripts</Link>
            <Link to="/record/010">Nerves of a Harp {"\\u2192"}</Link>
          </div>
        </div>
      </section>
    );
  }

  if (id === "010") {
    return (
      <section className="page-section poetry-reading-page">\n        <style>{poemTypeStyles}</style>
        <div className="page-content">
          <Breadcrumb items={[{ label: "Archive", to: "/archive" }, { label: "Manuscripts", to: "/manuscripts" }, { label: "Nerves of a Harp" }]} />
          <p className="eyebrow">ORIGINAL POEM // 010</p>
          <h1>Nerves of a Harp</h1>
          <p className="record-subtitle">CONTEMPORARY POETRY · SHELDYN GRUHN</p>
          <section className="archive-note">
            <p className="eyebrow">POEM DETAILS</p>
            <p><strong>Writer:</strong> Sheldyn Gruhn</p>
            <p><strong>Date Written:</strong> October 22, 2026</p>
            <p><strong>Document Type:</strong> Original Poem</p>
          </section>
          <section className="archive-note">
            <p className="eyebrow">FULL TEXT</p>
            <blockquote className="record-poem" style={{ whiteSpace: "pre-wrap", lineHeight: 2 }}>
{"I have nerves of a harp\nPlucked and pulled \n\nAs if being morally corrupt \nIs something to do \nAnd I’m the lucky one \nBeing played for a fool \n\nThe only fool I see \nIs one who’s playing a harp \nThey mistook for a fiddle\n\nFiddle me this we’ll see \nAnd I’ll see that your fingers bleed\n\nYou mustn’t know a mirror from a wall\nTherefore I’m not here at your beck and call\nMy strings are not for foolish play\n\nPick and pluck me away\nTill I snap and slash your face \n\nStrum me \nTill I come unstrung \nThen you’ll never want to \nString me back up"}
            </blockquote>
          </section>
          <div className="record-nav">
            <Link to="/manuscripts">{"\\u2190"} All Manuscripts</Link>
            <Link to="/record/009">The Hands of Those Dying {"\\u2192"}</Link>
          </div>
        </div>
      </section>
    );
  }

  if (id === "001") {
    return (
      <section className="page-section poetry-reading-page">\n        <style>{poemTypeStyles}</style>
        <div className="page-content">
          <Breadcrumb items={[{ label: "Archive", to: "/archive" }, { label: "Manuscripts", to: "/manuscripts" }, { label: "Forevermore" }]} />
          <p className="eyebrow">RECOVERED POEM // 001</p>
          <h1>Forevermore</h1>
          <p className="record-subtitle">EARLY POETRY ARCHIVE</p>
          <section className="archive-note">
            <p className="eyebrow">ARCHIVE METADATA</p>
            <p><strong>Archive ID:</strong> 001</p>
            <p><strong>Document Type:</strong> Poem</p>
            <p><strong>Writer:</strong> Sheldyn Gruhn</p>
            <p><strong>Date Written:</strong> September 5, 2024</p>
            <p><strong>Recovery Status:</strong> Complete</p>
          </section>
          <section className="archive-note">
            <p className="eyebrow">RECOVERED TEXT</p>
            <blockquote className="record-poem" style={{ whiteSpace: "pre-wrap", lineHeight: 2 }}>
{`Forevermore
Shall our souls
Be intertwined

For an eternity
Would cease to exist
Without you and I

Therefore
As our bones turn to dust
We will forevermore
Remain in peacefulness`}
            </blockquote>
          </section>
          <section className="archive-note">
            <p className="eyebrow">ARCHIVIST'S NOTE</p>
            <p>The earliest recovered poetic record currently preserved within the archive. Themes of permanence, devotion, mortality, and continuity introduced here echo throughout later poems, manuscripts, and documentary material.</p>
          </section>
          <div className="record-nav">
            <Link to="/manuscripts">{"\u2190"} Archive</Link>
            <Link to="/record/002">Angel of Death {"\u2192"}</Link>
          </div>
        </div>
      </section>
    );
  }

  if (id === "002") {
    return (
      <section className="page-section poetry-reading-page">\n        <style>{poemTypeStyles}</style>
        <div className="page-content">
          <Breadcrumb items={[{ label: "Archive", to: "/archive" }, { label: "Manuscripts", to: "/manuscripts" }, { label: "Angel of Death" }]} />
          <p className="eyebrow">RECOVERED POEM // 002</p>
          <h1>Angel of Death</h1>
          <p className="record-subtitle">EARLY POETRY ARCHIVE</p>
          <section className="archive-note">
            <p className="eyebrow">ARCHIVE METADATA</p>
            <p><strong>Archive ID:</strong> 002</p>
            <p><strong>Document Type:</strong> Poem</p>
            <p><strong>Writer:</strong> Sheldyn Gruhn</p>
            <p><strong>Date Written:</strong> April 17, 2025</p>
            <p><strong>Recovery Status:</strong> Complete</p>
          </section>
          <section className="archive-note">
            <p className="eyebrow">RECOVERED TEXT</p>
            <blockquote className="record-poem" style={{ whiteSpace: "pre-wrap", lineHeight: 2 }}>
{`What is calling me
As I gasp for air
Trying to breathe
From the epitome of darkness
That is haunting me

I have been swindled
Of my Liberty
As I can no longer grapple
The shadows that have summoned me

Alone I fall
To my prophesy
As the Angel of Death
Is what's calling me`}
            </blockquote>
          </section>
          <section className="archive-note">
            <p className="eyebrow">ARCHIVIST'S NOTE</p>
            <p>This record expands the archive's developing themes of darkness, prophecy, mortality, and loss of liberty. Several symbolic elements introduced here later reappear throughout the broader archive.</p>
          </section>
          <div className="record-nav">
            <Link to="/record/001">{"\u2190"} Forevermore</Link>
            <Link to="/record/003">Agony {"\u2192"}</Link>
          </div>
        </div>
      </section>
    );
  }

  if (id === "003") {
    return (
      <section className="page-section poetry-reading-page">\n        <style>{poemTypeStyles}</style>
        <div className="page-content">
          <Breadcrumb items={[{ label: "Archive", to: "/archive" }, { label: "Manuscripts" }, { label: "Agony" }]} />
          <p className="eyebrow">RECOVERED POEM // 003</p>
          <h1>Agony</h1>
          <p className="record-subtitle">EARLY POETRY ARCHIVE</p>
          <section className="archive-note">
            <p className="eyebrow">ARCHIVE METADATA</p>
            <p><strong>Archive ID:</strong> 003</p>
            <p><strong>Document Type:</strong> Poem</p>
            <p><strong>Writer:</strong> Sheldyn Gruhn</p>
            <p><strong>Date Written:</strong> April 19, 2025</p>
            <p><strong>Recovery Status:</strong> Complete</p>
          </section>
          <section className="archive-note">
            <p className="eyebrow">RECOVERED TEXT</p>
            <blockquote className="record-poem" style={{ whiteSpace: "pre-wrap", lineHeight: 2 }}>
{`Pondering me in agony
As you load your barrel
So pistic in supremacy
Just to watch me
Bleed here in peril

Superior you must feel
Forsaken me in betrayal
Though too naive to
Resignate a bare quiver
As I pierce your unholy veil

Inferior you are to me
As I nock my bow & arrow
To solemnly cease your supremacy
For I scrutinize you
Pleading in Agony`}
            </blockquote>
          </section>
          <section className="archive-note">
            <p className="eyebrow">ARCHIVIST'S NOTE</p>
            <p>This recovered record introduces imagery of conflict, betrayal, resistance, and moral confrontation. The weapon symbolism and emotional tension continue themes that evolve throughout later works in the archive.</p>
          </section>
          <div className="record-nav">
            <Link to="/record/002">{"\u2190"} Angel of Death</Link>
            <Link to="/record/004">Embers {"\u2192"}</Link>
          </div>
        </div>
      </section>
    );
  }

  if (id === "004") {
    return (
      <section className="page-section poetry-reading-page">\n        <style>{poemTypeStyles}</style>
        <div className="page-content">
          <Breadcrumb items={[{ label: "Archive", to: "/archive" }, { label: "Manuscripts" }, { label: "Embers" }]} />
          <p className="eyebrow">RECOVERED POEM // 004</p>
          <h1>Embers</h1>
          <p className="record-subtitle">EARLY POETRY ARCHIVE</p>
          <section className="archive-note">
            <p className="eyebrow">ARCHIVE METADATA</p>
            <p><strong>Archive ID:</strong> 004</p>
            <p><strong>Document Type:</strong> Poem</p>
            <p><strong>Writer:</strong> Sheldyn Gruhn</p>
            <p><strong>Date Written:</strong> April 23, 2025</p>
            <p><strong>Source:</strong> Poetry Nation</p>
            <p><strong>Recovery Status:</strong> Complete</p>
          </section>
          <section className="archive-note">
            <p className="eyebrow">RECOVERED TEXT</p>
            <blockquote className="record-poem" style={{ whiteSpace: "pre-wrap", lineHeight: 2 }}>
{`The fire cracks and the embers brew
Whilst the stars sing as I cry and plead,
For I render you, my love
To please come back to me

As I watch you go up in flames
I'm pondering your face that's
Burning a hole
Into my memory

This pain is just too real
I beg the fire to lie and bring you back to me
As my heart bleeds for you and
Your flames smolder into ember,
My soul aches to remember the love
That you gave me..
As you are my forever

Once the fire dies,
So do I.
For I am drawn to the shadows
That have left me ridden in despair
As this life I cannot battle
Without you here..

I can no longer bear this pain,
So, I must follow you
As I surrender my life to be
The embers in your flame.`}
            </blockquote>
          </section>
          <section className="archive-note">
            <p className="eyebrow">ARCHIVIST'S NOTE</p>
            <p>This record marks a significant evolution in the archive. Fire, memory, loss, shadows, and enduring attachment begin converging into recurring motifs that continue throughout later poems, manuscripts, songs, symbols, and documentary material.</p>
          </section>
          <div className="record-nav">
            <Link to="/record/003">{"\u2190"} Agony</Link>
            <Link to="/record/005">Next Record {"\u2192"}</Link>
          </div>
        </div>
      </section>
    );
  }

  if (id === "005") {
    return (
      <section className="page-section poetry-reading-page">\n        <style>{poemTypeStyles}</style>
        <div className="page-content">
          <Breadcrumb items={[{ label: "Archive", to: "/archive" }, { label: "Manuscripts" }, { label: "Record 005" }]} />
          <p className="eyebrow">RECOVERED RECORD // 005</p>
          <h1>Archive Fragment</h1>
          <section className="archive-note">
            <p className="eyebrow">STATUS</p>
            <h2>Under Restoration</h2>
            <p>This archive record has been identified within the chronology but has not yet been fully restored.</p>
          </section>
          <div className="record-nav">
            <Link to="/record/004">{"\u2190"} Embers</Link>
            <Link to="/record/006">Next {"\u2192"}</Link>
          </div>
        </div>
      </section>
    );
  }

  if (id === "006") {
    return (
      <section className="page-section poetry-reading-page">\n        <style>{poemTypeStyles}</style>
        <div className="page-content">
          <Breadcrumb items={[{ label: "Archive", to: "/archive" }, { label: "Manuscripts" }, { label: "Record 006" }]} />
          <p className="eyebrow">RECOVERED RECORD // 006</p>
          <h1>Archive Fragment</h1>
          <section className="archive-note">
            <p className="eyebrow">STATUS</p>
            <h2>Under Restoration</h2>
            <p>This recovered record is currently being preserved and catalogued within the archive.</p>
          </section>
          <div className="record-nav">
            <Link to="/record/005">{"\u2190"} Previous</Link>
            <Link to="/record/007">Next {"\u2192"}</Link>
          </div>
        </div>
      </section>
    );
  }

  if (id === "007") {
    return (
      <section className="page-section poetry-reading-page">\n        <style>{poemTypeStyles}</style>
        <div className="page-content">
          <Breadcrumb items={[{ label: "Archive", to: "/archive" }, { label: "Manuscripts" }, { label: "Record 007" }]} />
          <p className="eyebrow">RECOVERED RECORD // 007</p>
          <h1>Archive Fragment</h1>
          <section className="archive-note">
            <p className="eyebrow">STATUS</p>
            <h2>Under Restoration</h2>
            <p>Restoration of this record is still in progress. Additional documents and supporting material will be added as the archive expands.</p>
          </section>
          <div className="record-nav">
            <Link to="/record/006">{"\u2190"} Previous</Link>
            <Link to="/record/008">Founding Edition {"\u2192"}</Link>
          </div>
        </div>
      </section>
    );
  }

  if (id === "008") {
    return (
      <section className="page-section poetry-reading-page">\n        <style>{poemTypeStyles}</style>
        <div className="page-content">
          <Breadcrumb items={[{ label: "Archive", to: "/archive" }, { label: "Manuscripts" }, { label: "Founding Edition" }]} />
          <p className="eyebrow">RECOVERED FRAGMENT // 008</p>
          <h1>Relational Continuity Hypothesis</h1>
          <p className="record-subtitle">FOUNDING EDITION</p>
          <section className="archive-note">
            <p className="eyebrow">STATUS</p>
            <h2>AVAILABLE NOW</h2>
            <p>The Founding Edition is now published and available. It documents the Relational Continuity Hypothesis and its twelve-stage model of relational consciousness, the core research that anchors this archive.</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
              <Link to="/relational-continuity" className="metal-button">EXPLORE THE FRAMEWORK</Link>
              <a className="metal-button secondary" href="https://a.co/d/0jeiip0w" target="_blank" rel="noopener noreferrer">BUY THE BOOK</a>
            </div>
          </section>
          <section className="archive-note">
            <p className="eyebrow">ARCHIVE RECORD</p>
            <h2>Manuscript Documentation</h2>
            <p>This archival record preserves the publication history and documentary role of the Founding Edition within GRVEZ VAULT. The manuscript anchors the archive by linking symbolic evidence, continuity research, and the larger narrative of relational development that appears throughout the recovered documents.</p>
            <a href="/founding-edition.jpeg" target="_blank" rel="noopener noreferrer">
              <img src="/founding-edition.jpeg" alt="Relational Continuity Hypothesis Founding Edition" style={{ width: "340px", maxWidth: "100%", display: "block", margin: "2rem auto", borderRadius: "3px", boxShadow: "0 16px 40px rgba(0,0,0,.4)" }} />
            </a>
          </section>
          <section className="archive-note">
            <p className="eyebrow">MANUSCRIPT STRUCTURE</p>
            <p>The recovered manuscript is organized as a research investigation. It traces the hypothesis from abstract and literature review through operational definitions, twelve relational stages, historical case studies, phenomenological analysis, methodology, and ethical limitations.</p>
            <p>Its structure anchors the archive by linking symbolic evidence, continuity research, and the larger narrative of relational development that appears throughout the recovered documents.</p>
          </section>
          <section className="archive-note">
            <p className="eyebrow">ARCHIVIST'S NOTE</p>
            <p>The Founding Edition represents the current endpoint of the recovered archive chronology. Earlier records preserve the creative works that preceded its publication and form part of the broader documentary timeline presented throughout this archive.</p>
          </section>
          <div className="record-nav">
            <Link to="/record/007">{"\u2190"} Previous</Link>
            <Link to="/manuscripts">Return to Archive {"\u2192"}</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section poetry-reading-page">\n        <style>{poemTypeStyles}</style>
      <div className="page-content">
        <Breadcrumb items={[{ label: "Archive", to: "/archive" }, { label: "Manuscripts" }, { label: `Record ${id}` }]} />
        <p className="eyebrow">ARCHIVE RECORD</p>
        <h1>Record {id}</h1>
        <p>This archive record is currently undergoing restoration.</p>
        <div className="record-nav">
          <Link to="/manuscripts">{"\u2190"} Return to Archive</Link>
          <span />
        </div>
      </div>
    </section>
  );
}
