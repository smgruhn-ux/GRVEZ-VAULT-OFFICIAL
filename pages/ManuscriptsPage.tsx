import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../Breadcrumb";

const restoredRecords = [
  {
    id: "009",
    type: "ORIGINAL POEM",
    title: "The Hands of Those Dying",
    preview: "\"Is it the hands\nOf those dying \nOr of those who've...\"",
    source: "Sheldyn Gruhn · October 20, 2026",
  },
  {
    id: "010",
    type: "ORIGINAL POEM",
    title: "Nerves of a Harp",
    preview: "\"I have nerves of a harp\nPlucked and pulled \n...\"",
    source: "Sheldyn Gruhn · October 22, 2026",
  },
  {
    id: "001",
    type: "RECOVERED POEM",
    title: "Forevermore",
    preview: '"Forevermore\nShall our souls\nBe intertwined..."',
    source: "Early Poetry Archive",
  },
  {
    id: "002",
    type: "RECOVERED POEM",
    title: "Angel of Death",
    preview: '"What is calling me\nAs I gasp for air\nTrying to breathe..."',
    source: "Early Poetry Archive",
  },
  {
    id: "003",
    type: "RECOVERED POEM",
    title: "Agony",
    preview: '"Pondering me in agony\nAs you load your barrel..."',
    source: "Early Poetry Archive",
  },
  {
    id: "004",
    type: "RECOVERED POEM",
    title: "Embers",
    preview: '"Once the fire dies,\nSo do I.\nFor I am drawn to the shadows..."',
    source: "Early Poetry Archive",
  },
];

const poetry = [...restoredRecords].sort((a,b) => Number(a.id) - Number(b.id));
const featured = restoredRecords.slice(0, 2);

const stormStyles = `
.manuscripts-reimagined .storm-hero { background:linear-gradient(180deg,rgba(6,9,11,.18),rgba(6,9,11,.65)),url('/manuscripts-hero.jpg') center 47% / cover no-repeat; }
.manuscripts-reimagined .storm-hero:before { opacity:.42; }
.manuscripts-reimagined .storm-hero:after { opacity:.5; }
.manuscripts-reimagined .featured-grid { display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;margin:2rem 0 5rem; }
.manuscripts-reimagined .featured-card { display:flex;flex-direction:column;justify-content:end;min-height:290px;position:relative;overflow:hidden;padding:2.2rem;background:linear-gradient(150deg,#242c30,#0b0f11 70%);border:1px solid #495154;text-decoration:none;color:#e0ded8;transition:transform .25s,border-color .25s; }
.manuscripts-reimagined .featured-card:nth-child(2) {background:radial-gradient(ellipse at 72% 20%,#34373b,#111416 65%);}
.manuscripts-reimagined .featured-card:hover,.manuscripts-reimagined .featured-card:focus-visible {transform:translateY(-4px);border-color:#b2b8b7;}
.manuscripts-reimagined .featured-card:before {content:"";position:absolute;top:1.5rem;right:1.5rem;width:34%;height:55%;border:1px solid rgba(209,213,210,.14);transform:rotate(-8deg);pointer-events:none;}
.manuscripts-reimagined .featured-card h3 {font:400 clamp(2rem,4vw,3.5rem)/1.05 'Forum',Georgia,serif;margin:1.2rem 0;}
.manuscripts-reimagined .featured-card p {font:400 1.15rem/1.5 'Forum',Georgia,serif;white-space:pre-line;color:#b7c0bf;margin:0 0 1.5rem;}
.manuscripts-reimagined .featured-card .read-label {font-size:.68rem;letter-spacing:.22em;}
.manuscripts-reimagined .collection-intro {margin:0 0 1.5rem;color:#aeb6b5;font-family:'Forum',Georgia,serif;font-size:1.25rem;}
@media(max-width:700px){.manuscripts-reimagined .featured-grid{grid-template-columns:1fr}.manuscripts-reimagined .featured-card{min-height:240px;padding:1.6rem}.manuscripts-reimagined .storm-hero{background-position:57% center}}

@import url('https://fonts.googleapis.com/css2?family=Forum&display=swap');
.manuscripts-reimagined { --ink:#080a0b; --silver:#e0ded8; --muted:#a9aba8; background:var(--ink); color:var(--silver); position:relative; overflow:hidden; }
.manuscripts-reimagined .page-content { max-width:1180px; position:relative; z-index:1; }
.manuscripts-reimagined .storm-hero { position:relative; isolation:isolate; min-height: min(78vh,690px); display:flex; flex-direction:column; justify-content:center; padding:clamp(5rem,12vw,10rem) clamp(1rem,5vw,5rem) 5rem; margin:1.2rem calc(-1 * clamp(1rem,3vw,2rem)) 4rem; overflow:hidden; border-bottom:1px solid #565b5a; }
.manuscripts-reimagined .storm-hero:before { content:""; position:absolute; inset:0; z-index:-2; background:radial-gradient(ellipse 75% 23% at 69% 53%,rgba(181,182,171,.28),transparent 78%),radial-gradient(ellipse 95% 46% at 45% 4%,#343b3e 0%,#161b1e 46%,transparent 83%),linear-gradient(178deg,#090d10 0%,#252d30 32%,#111718 62%,#080a0b 100%); }
.manuscripts-reimagined .storm-hero:after { content:"";position:absolute;inset:58% 0 0;z-index:-1;background:repeating-linear-gradient(86deg,transparent 0 11px,rgba(125,123,105,.14) 12px,transparent 14px 32px),linear-gradient(0deg,#070908 0%,#111512 45%,transparent 100%);clip-path:polygon(0 20%,14% 15%,28% 23%,46% 16%,62% 20%,77% 13%,100% 19%,100% 100%,0 100%); }
.manuscripts-reimagined .storm-kicker { font-size:.7rem;letter-spacing:.38em;text-transform:uppercase;color:#c0c3bf; }
.manuscripts-reimagined .storm-title,.manuscripts-reimagined .literary-title,.manuscripts-reimagined .poem-row h3 { font-family:'Forum',Georgia,serif !important;font-weight:400 !important; }
.manuscripts-reimagined .storm-title {font-size:clamp(4.3rem,10.5vw,10rem);line-height:.87;letter-spacing:.035em;margin:1.8rem 0 1.5rem;text-shadow:0 2px 24px #000;max-width:800px;}
.manuscripts-reimagined .storm-title span{display:block;}
.manuscripts-reimagined .storm-subtitle{letter-spacing:.34em;font-size:.76rem;text-transform:uppercase;color:#c3c5c0;}
.manuscripts-reimagined .storm-aside{margin-top:5rem;max-width:350px;color:#c1c2bd;font-family:'Forum',Georgia,serif;font-size:clamp(1.2rem,2vw,1.6rem);line-height:1.55;font-style:italic;}
.manuscripts-reimagined .literary-heading{display:flex;align-items:end;justify-content:space-between;gap:1rem;border-bottom:1px solid #444a49;padding-bottom:1.3rem;margin-bottom:1rem;}
.manuscripts-reimagined .literary-title{font-size:clamp(2.7rem,5vw,4.5rem);line-height:1.05;margin:.4rem 0;}
.manuscripts-reimagined .literary-label{font-size:.67rem;letter-spacing:.3em;color:#a8aaa5;text-transform:uppercase;}
.manuscripts-reimagined .poem-list{margin-bottom:6rem;}
.manuscripts-reimagined .poem-row{display:grid;grid-template-columns:75px minmax(0,1.2fr) minmax(0,1fr) auto;gap:clamp(.7rem,3vw,3rem);align-items:center;text-decoration:none;color:inherit;padding:2rem .4rem;border-bottom:1px solid #303637;transition:background .2s,padding .2s;}
.manuscripts-reimagined .poem-row:hover,.manuscripts-reimagined .poem-row:focus-visible{background:rgba(208,213,206,.06);padding-left:1rem;}
.manuscripts-reimagined .poem-number{font-family:'Forum',Georgia,serif;color:#969c9a;font-size:1.2rem;}
.manuscripts-reimagined .poem-row h3{font-size:clamp(1.65rem,2.8vw,2.6rem);line-height:1.12;margin:0 0 .5rem;}
.manuscripts-reimagined .poem-date{font-size:.65rem;letter-spacing:.13em;color:#9da29f;}
.manuscripts-reimagined .poem-excerpt{white-space:pre-line;font-family:'Forum',Georgia,serif;font-size:1.1rem;line-height:1.5;color:#b5b9b5;}
.manuscripts-reimagined .poem-read{font-size:.65rem;letter-spacing:.18em;white-space:nowrap;}
.manuscripts-reimagined .research-separation{border-top:1px solid #454b4a;padding:3rem 0 5rem;display:flex;justify-content:space-between;align-items:center;gap:2rem;}
.manuscripts-reimagined .research-separation p{max-width:530px;color:#aeb2ae;line-height:1.7;}
.manuscripts-reimagined .research-link{border:1px solid #6e7370;padding:1rem 1.3rem;color:#e2e4df;text-decoration:none;font-size:.7rem;letter-spacing:.15em;white-space:nowrap;}
@media(max-width:700px){.manuscripts-reimagined .storm-hero{min-height:62vh;padding-left:1.5rem;padding-right:1.5rem}.manuscripts-reimagined .storm-title{font-size:clamp(3.8rem,14vw,6rem)}.manuscripts-reimagined .poem-row{grid-template-columns:45px 1fr auto;gap:1rem}.manuscripts-reimagined .poem-excerpt{grid-column:2 / -1;grid-row:2}.manuscripts-reimagined .poem-read{grid-column:3;grid-row:1}.manuscripts-reimagined .research-separation{display:block}.manuscripts-reimagined .research-link{display:inline-block;margin-top:1rem}}
`;

export function ManuscriptsPage() {
  return (
    <section className="page-section manuscripts-page manuscripts-reimagined">
      <style>{stormStyles}</style>
      <div className="page-content">
        <Breadcrumb items={[{label:"Archive",to:"/archive"},{label:"Manuscripts"}]} />
        <header className="storm-hero">
          <p className="storm-kicker">GRVEZ VAULT / SHELDYN GRUHN</p>
          <h1 className="storm-title"><span>The Written</span><span>Works</span></h1>
          <p className="storm-subtitle">Poetry &amp; Manuscripts</p>
          <p className="storm-aside">A place for the words that remain when everything else falls silent.</p>
        </header>
        <section aria-labelledby="featured-heading">
          <div className="literary-heading"><div><p className="literary-label">Selected writing / 2026</p><h2 id="featured-heading" className="literary-title">Featured Works</h2></div></div>
          <div className="featured-grid">{featured.map(record => (
            <Link className="featured-card" key={record.id} to={`/record/${record.id}`}>
              <span className="literary-label">Original poem / {record.id}</span>
              <h3>{record.title}</h3>
              <p>{record.preview.replaceAll('"','').replace(/\.\.\.$/,'…')}</p>
              <span className="read-label">ENTER THE WORK ↗</span>
            </Link>
          ))}</div>
        </section>
        <section aria-labelledby="poetry-heading" className="poem-list">
          <div className="literary-heading">
            <div><p className="literary-label">The collection</p><h2 id="poetry-heading" className="literary-title">Original Poetry</h2></div>
            <p className="literary-label">Written by Sheldyn Gruhn</p>
          </div>
          <p className="collection-intro">Every piece, preserved in its own words.</p>
          {poetry.map(record => (
            <Link key={record.id} className="poem-row" to={`/record/${record.id}`}>
              <span className="poem-number">{record.id}</span>
              <div><h3>{record.title}</h3><span className="poem-date">{record.source}</span></div>
              <span className="poem-excerpt">{record.preview.replaceAll('"','').replace(/\.\.\.$/,'…')}</span>
              <span className="poem-read">READ ↗</span>
            </Link>
          ))}
        </section>
        <section className="research-separation">
          <div><p className="literary-label">Beyond the poems</p><h2 className="literary-title">Research &amp; Manuscripts</h2><p>The archival investigation, Founding Edition, and research records remain part of GRVEZ VAULT—separate from the poetry collection.</p></div>
          <Link className="research-link" to="/relational-continuity">EXPLORE RESEARCH ↗</Link>
        </section>
      </div>
    </section>
  );
}
