import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../Breadcrumb";

const poems = [
  { id: "010", title: "Nerves of a Harp", date: "October 22, 2026", description: "Original poetry · Written Ruins" },
  { id: "009", title: "The Hands of Those Dying", date: "October 20, 2026", description: "Original poetry · Written Ruins" },
  { id: "004", title: "Embers", date: "April 23, 2025", description: "Early poetry archive" },
  { id: "003", title: "Agony", date: "April 19, 2025", description: "Early poetry archive" },
  { id: "002", title: "Angel of Death", date: "April 17, 2025", description: "Early poetry archive" },
  { id: "001", title: "Forevermore", date: "September 5, 2024", description: "Poetry Nation 2024 semifinalist" },
];

const styles = `
.gruhn-page {background:radial-gradient(ellipse at 75% 5%,#252b35 0%,#0b0d12 45%,#08090d 85%);color:#e5e6eb;min-height:100vh;}
.gruhn-page .page-content {max-width:1080px;}
.gruhn-page .author-hero {padding:clamp(5rem,12vw,9rem) 0 4rem;border-bottom:1px solid #464c58;}
.gruhn-page .author-kicker {font-size:.72rem;letter-spacing:.29em;color:#aeb5c1;text-transform:uppercase;}
.gruhn-page .author-title {font-family:'Forum',Georgia,serif!important;font-weight:400!important;font-size:clamp(3.7rem,10vw,8rem);line-height:1.03;margin:1.5rem 0;}
.gruhn-page .author-deck {font-family:'Forum',Georgia,serif;font-size:clamp(1.3rem,2.5vw,1.9rem);line-height:1.55;color:#bfc4ce;max-width:720px;}
.gruhn-page .author-section {padding:3.5rem 0;border-bottom:1px solid #333944;}
.gruhn-page .author-section h2 {font-family:'Forum',Georgia,serif!important;font-weight:400!important;font-size:clamp(2.2rem,5vw,3.5rem);margin:.4rem 0 1.5rem;}
.gruhn-page .author-section p {line-height:1.8;max-width:780px;color:#c4c8d0;}
.gruhn-page .author-feature {border:1px solid #7c8594;background:linear-gradient(125deg,#202632,#0e1118);padding:clamp(1.5rem,5vw,3rem);margin:2rem 0;}
.gruhn-page .author-feature h3 {font-family:'Forum',Georgia,serif;font-weight:400;font-size:clamp(2.6rem,6vw,4.5rem);margin:1rem 0;}
.gruhn-page .author-link {display:inline-block;color:#e6e9ef;text-decoration:none;border-bottom:1px solid #aab3c2;padding:.6rem 0;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;}
.gruhn-page .author-link:hover {color:white;border-color:white;}
.gruhn-page .author-poem {display:grid;grid-template-columns:1fr auto;gap:1.5rem;align-items:center;border-bottom:1px solid #343b45;padding:1.6rem 0;}
.gruhn-page .author-poem h3 {font-family:'Forum',Georgia,serif;font-weight:400;font-size:clamp(1.7rem,3.3vw,2.6rem);margin:0 0 .35rem;}
.gruhn-page .author-poem p {font-size:.82rem;margin:0;color:#aeb5c0;}
.gruhn-page .author-note {font-size:.85rem;color:#aeb5c0!important;}
@media(max-width:600px){.gruhn-page .author-hero{padding-top:4rem}.gruhn-page .author-poem{grid-template-columns:1fr;gap:.4rem}}
`;

export function SheldynGruhnPage() {
  return <section className="page-section gruhn-page">
    <style>{styles}</style>
    <div className="page-content">
      <Breadcrumb items={[{label:"Archive",to:"/archive"},{label:"Sheldyn Gruhn"}]}/>
      <header className="author-hero">
        <p className="author-kicker">GRVEZ VAULT / Literary Works</p>
        <h1 className="author-title">SHELDYN<br/>GRUHN</h1>
        <p className="author-kicker">Poet · Spoken Word · Written Ruins</p>
        <p className="author-deck">Psychological and Gothic poetry exploring the body, voice, memory, devotion, and the fragile boundaries of identity.</p>
      </header>
      <section className="author-section" aria-labelledby="about-author">
        <p className="author-kicker">The Writer</p>
        <h2 id="about-author">About Sheldyn Gruhn</h2>
        <p>Sheldyn Gruhn is a poet and songwriter whose work explores psychological tension, emotional intensity, and surreal imagery. Her poems often transform internal experiences into physical landscapes, instruments, and voices. Through <em>Written Ruins</em>, she brings poetry into spoken-word and cinematic forms while maintaining a distinct literary identity within GRVEZ VAULT.</p>
        <p>Gruhn also creates music as Gizzy Graves. Her poetry is published and credited under her own name, Sheldyn Gruhn.</p>
      </section>
      <section className="author-section" aria-labelledby="recognition">
        <p className="author-kicker">Selected Recognition</p>
        <h2 id="recognition">Forevermore</h2>
        <div className="author-feature">
          <p className="author-kicker">Poetry Nation · 2024 Competition Semifinalist</p>
          <h3>FOREVERMORE</h3>
          <p>Selected as a semifinalist in Poetry Nation's 2024 poetry competition; subsequently included in a 2025 poetry anthology.</p>
          <Link className="author-link" to="/record/001">Read Forevermore →</Link>
        </div>
      </section>
      <section className="author-section" aria-labelledby="written-ruins">
        <p className="author-kicker">The Poetry Collection</p>
        <h2 id="written-ruins">WRITTEN RUINS</h2>
        <p>Selected poetry from the GRVEZ VAULT archive, arranged with the newest available works first. Each poem remains available in its original archive record.</p>
        {poems.map(poem => <article className="author-poem" key={poem.id}>
          <div><h3>{poem.title}</h3><p>{poem.date} · {poem.description}</p></div>
          <Link className="author-link" to={`/record/${poem.id}`}>Read poem →</Link>
        </article>)}
      </section>
      <section className="author-section" aria-labelledby="spoken-word">
        <p className="author-kicker">Beyond the Page</p>
        <h2 id="spoken-word">Spoken Word &amp; Film</h2>
        <p><em>Written Ruins</em> extends selected poems into narrated and cinematic works. Literary authorship remains credited to Sheldyn Gruhn.</p>
        <Link className="author-link" to="/films">Explore films &amp; media →</Link>
      </section>
      <section className="author-section" aria-labelledby="literary-contact">
        <p className="author-kicker">Literary Inquiries</p>
        <h2 id="literary-contact">Contact</h2>
        <p>For literary correspondence, publication inquiries, and spoken-word opportunities, contact GRVEZ VAULT and reference Sheldyn Gruhn.</p>
        <Link className="author-link" to="/contact">Contact GRVEZ VAULT →</Link>
        <p className="author-note">All poetry © Sheldyn Gruhn. All rights reserved.</p>
      </section>
    </div>
  </section>;
}
