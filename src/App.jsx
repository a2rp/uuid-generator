import { FiArrowDown, FiCheck, FiCpu, FiLayers, FiShield } from "react-icons/fi";
import BackToTop from "./components/backToTop/index.jsx";
import SiteFooter from "./components/siteFooter/index.jsx";
import SiteHeader from "./components/siteHeader/index.jsx";
import UuidWorkbench from "./components/uuidWorkbench/index.jsx";
import styles from "./App.module.css";

const features = [
  { icon: FiCpu, title: "Cryptographic randomness", text: "Uses the browser's secure UUID API with a standards-based secure fallback." },
  { icon: FiLayers, title: "A batch in one pass", text: "Generate up to 500 values at once, then copy one, copy all, or save a file." },
  { icon: FiShield, title: "Private by design", text: "Generation happens in this tab. Values are not uploaded or saved for later." },
];

const App = () => (
  <div className={styles.appShell} id="top">
    <SiteHeader />
    <main>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.heroLabel}><span /> RANDOM IDENTIFIERS / UUID V4</p>
            <h1 id="hero-title">Good IDs.<br /><span>On demand.</span></h1>
            <p className={styles.heroDescription}>Create clean, unique identifiers for prototypes, test data, and local development. Make a batch, pick your format, and take the values wherever your work needs them.</p>
            <a className={styles.startLink} href="#generate">Build a UUID batch <FiArrowDown aria-hidden="true" /></a>
            <div className={styles.safeNote}><FiCheck aria-hidden="true" /><span>Secure browser randomness. No account or upload.</span></div>
          </div>
          <div className={styles.heroVisual} aria-label="A UUID v4 format preview">
            <div className={styles.visualTop}><span><i /> UUID STRUCTURE</span><b>128 BIT</b></div>
            <p className={styles.uuidSample}><span>63c38c20</span><i>-</i><span>15bb</span><i>-</i><strong>4</strong><span>25d</span><i>-</i><strong>8</strong><span>7d1</span><i>-</i><span>72c80f15b21a</span></p>
            <div className={styles.visualLine}><span>TIME</span><b>RANDOM</b><span>VERSION</span><b>RANDOM</b><span>VARIANT</span><b>RANDOM</b></div>
            <div className={styles.visualBottom}><span><FiShield aria-hidden="true" /> CRYPTOGRAPHIC SOURCE</span><span>FORMAT / 8-4-4-4-12</span></div>
          </div>
        </div>
        <div className={styles.heroFoot}><span>01 / Generate as many as you need</span><span><i /> UUID VERSION 4</span></div>
      </section>
      <UuidWorkbench />
      <section className={styles.about} id="about" aria-labelledby="about-title">
        <div className={styles.aboutInner}>
          <div className={styles.aboutHeading}><p>Know what you are generating</p><h2 id="about-title">A dependable ID, in a useful shape.</h2><span>UUID v4 values are 128-bit identifiers with random data and fixed version and variant bits.</span></div>
          <div className={styles.featureGrid}>
            {features.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <p className={styles.aboutFoot}>Standard format uses 36 characters with hyphens. Compact format removes the separators. Uppercase letters and braces only change how the value is displayed.</p>
        </div>
      </section>
    </main>
    <SiteFooter />
    <BackToTop />
  </div>
);

export default App;
