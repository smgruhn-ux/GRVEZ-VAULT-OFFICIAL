import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../Breadcrumb";

const exhibitions = [
  { slug:"visual-evolution", number:"01", category:"CHRONOLOGICAL RECORD", title:"Visual Evolution", image:"/Visual Evolution Front Cover.PNG", description:"A visual chronology of documented tattoos and recurring motifs, with later interpretations kept distinct from their source records.", span:"wide" },
  { slug:"death-of-deceit", number:"02", category:"CONCEPT ART · MAY 2026", title:"Death of Deceit", image:"/New death of deceit card photo.JPG", description:"A documented tattoo concept exploring wings, skeletal forms, binding and transformation." },
  { slug:"raven-motif", number:"03", category:"CHARACTER & MOTIF", title:"Raven Motif", image:"/RAVEN MOTIF FRONT COVER.png", description:"The visual evolution of Murmur, the raven companion and watcher." },
  { slug:"black-maw", number:"04", category:"CHARACTER & MOTIF", title:"Black Maw", image:"/BLACK MAW.png", description:"The black dog companion associated with DMONIX." },
  { slug:"omega-development", number:"05", category:"SYMBOL DEVELOPMENT", title:"Omega Development", image:"/omega-reference-card.webp", description:"The development of the Omega mark, fracture motifs and geometric studies." },
  { slug:"recurring-symbols", number:"06", category:"VISUAL CROSS-REFERENCE", title:"Recurring Symbols", image:"/gizzy-alpha-dossier.webp", description:"Recurring forms across the GRVEZ visual language and their later interpretations." },
  { slug:"dmonix-tattoo-record", number:"07", category:"TATTOO ARCHIVE", title:"DMONIX Tattoo Motifs", image:"/dmonix-jerry-one-eyed-skull.webp", description:"Source photographs and subsequent comparisons of recurring visual elements." }
];
const styles = `
.visual-gallery {background:#090b10;color:#e6e8ed;min-height:100vh;}
.visual-gallery .page-content {max-width:1320px;}
.visual-gallery .visual-hero {position:relative;isolation:isolate;min-height:560px;display:flex;flex-direction:column;justify-content:flex-end;padding:clamp(2rem,6vw,6rem);margin:1rem 0 4rem;overflow:hidden;background:#111620;border:1px solid #353d49;}
.visual-gallery .visual-hero:before {content:"";position:absolute;inset:0;z-index:-2;background:url('/Visual Evolution Front Cover.PNG') center 40%/cover no-repeat;opacity:.5;filter:grayscale(1);}
.visual-gallery .visual-hero:after {content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(5,7,11,.95),rgba(5,7,11,.4) 85%),linear-gradient(0deg,#080b10,transparent 75%);}
.visual-gallery .visual-kicker {color:#aab5c7;font-size:.7rem;letter-spacing:.26em;text-transform:uppercase;font-weight:500;}
.visual-gallery .visual-title {font-family:'Forum',Georgia,serif!important;font-weight:400!important;font-size:clamp(4rem,10vw,9rem);line-height:.91;margin:1.3rem 0 1.5rem;letter-spacing:.015em;}
.visual-gallery .visual-lede {max-width:640px;color:#d2d7e1;font:400 clamp(1.15rem,2.2vw,1.5rem)/1.55 'Forum',Georgia,serif;}
.visual-gallery .visual-heading {display:flex;align-items:end;justify-content:space-between;gap:1rem;margin:3.5rem 0 1.5rem;border-bottom:1px solid #39414d;padding-bottom:1.2rem;}
.visual-gallery .visual-heading h2 {font:400 clamp(2.6rem,5vw,4.6rem)/1.1 'Forum',Georgia,serif!important;margin:.5rem 0 0;}
.visual-gallery .visual-count {font-size:.75rem;letter-spacing:.17em;color:#9ca7b7;}
.visual-gallery .visual-grid {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.4rem;margin-bottom:4rem;}
.visual-gallery .visual-card {position:relative;display:flex;flex-direction:column;min-width:0;text-decoration:none;color:inherit;border:1px solid #353e4b;background:#121720;overflow:hidden;transition:transform .25s,border-color .25s,box-shadow .25s;}
.visual-gallery .visual-card:hover,.visual-gallery .visual-card:focus-visible {transform:translateY(-5px);border-color:#aab6c7;box-shadow:0 18px 45px #0007;}
.visual-gallery .visual-card.wide {grid-column:1/-1;display:grid;grid-template-columns:1.25fr 1fr;min-height:420px;}
.visual-gallery .visual-art {position:relative;aspect-ratio:16/10;overflow:hidden;background:#1c222c;}
.visual-gallery .wide .visual-art {aspect-ratio:auto;min-height:420px;}
.visual-gallery .visual-art img {display:block;width:100%;height:100%;object-fit:cover;filter:saturate(.7);transition:transform .45s,filter .45s;}
.visual-gallery .visual-card:hover img {transform:scale(1.035);filter:saturate(.95);}
.visual-gallery .visual-art:after {content:"";position:absolute;inset:0;border:12px solid #080b1012;pointer-events:none;}
.visual-gallery .visual-copy {padding:clamp(1.4rem,3vw,2.7rem);display:flex;flex-direction:column;align-items:flex-start;justify-content:center;flex:1;}
.visual-gallery .visual-copy h3 {font:400 clamp(2rem,4vw,3.4rem)/1.05 'Forum',Georgia,serif!important;margin:1rem 0;}
.visual-gallery .visual-copy p {color:#b8c0cc;font-size:.95rem;line-height:1.7;max-width:480px;}
.visual-gallery .visual-open {margin-top:auto;padding-top:1.5rem;font-size:.7rem;letter-spacing:.19em;color:#e0e5ed;}
.visual-gallery .visual-method {border-top:1px solid #39414d;padding:3rem 0 5rem;max-width:850px;}
.visual-gallery .visual-method h2 {font:400 clamp(2.2rem,4vw,3.5rem) 'Forum',Georgia,serif!important;}
.visual-gallery .visual-method p {line-height:1.8;color:#b8c0cc;}
@media(max-width:760px){.visual-gallery .visual-hero{min-height:470px;padding:2rem;margin-bottom:2rem}.visual-gallery .visual-grid{grid-template-columns:1fr}.visual-gallery .visual-card.wide{grid-column:auto;display:flex;min-height:0}.visual-gallery .wide .visual-art{min-height:0;aspect-ratio:16/10}.visual-gallery .visual-heading{margin-top:2.5rem}.visual-gallery .visual-title{font-size:clamp(3.7rem,13vw,6rem)}}
`;
export function MediaPage() {
  useEffect(() => { document.title="Visual Projects | GRVEZ VAULT"; }, []);
  return <section className="page-section visual-gallery" aria-labelledby="visual-heading">
    <style>{styles}</style>
    <div className="page-content">
      <Breadcrumb items={[{label:"Archive",to:"/archive"},{label:"Visual Projects"}]}/>
      <header className="visual-hero">
        <p className="visual-kicker">GRVEZ VAULT · ART & VISUAL ARCHIVE</p>
        <h1 className="visual-title" id="visual-heading">VISUAL<br/>PROJECTS</h1>
        <p className="visual-lede">A collection of original artwork, evolving symbols, character studies and visual records. Each piece holds its own place in the archive.</p>
      </header>
      <div className="visual-heading"><div><p className="visual-kicker">EXPLORE THE COLLECTION</p><h2>Selected Works</h2></div><span className="visual-count">07 PROJECTS</span></div>
      <div className="visual-grid">
        {exhibitions.map(item=><Link to={`/media/${item.slug}`} key={item.slug} className={`visual-card ${item.span==="wide"?"wide":""}`}>
          <div className="visual-art"><img src={item.image} alt={item.title} loading="lazy"/></div>
          <div className="visual-copy">
            <span className="visual-kicker">{item.number} / {item.category}</span>
            <h3>{item.title}</h3><p>{item.description}</p>
            <span className="visual-open">EXPLORE PROJECT ↗</span>
          </div>
        </Link>)}
      </div>
      <section className="visual-method"><p className="visual-kicker">ABOUT THE ARCHIVE</p><h2>Art first. Context preserved.</h2><p>These projects include both original visual artifacts and later studies of recurring imagery. Source dates and original context are distinguished from interpretations developed afterward. The archive documents the evolution without presenting visual similarities as proof of their cause.</p></section>
    </div>
  </section>;
}
