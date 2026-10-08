import { FiGithub, FiHash } from "react-icons/fi";
import styles from "./styles.module.css";

const SiteHeader = () => (
  <header className={styles.header}>
    <div className={styles.bar}>
      <a className={styles.brand} href="#top" aria-label="UUID Generator home">
        <span className={styles.brandMark}><FiHash aria-hidden="true" /></span>
        <span>UUID <b>Generator</b></span>
      </a>
      <nav className={styles.navigation} aria-label="Main navigation">
        <a href="#generate">Generator</a>
        <a href="#about">About UUIDs</a>
      </nav>
      <a className={styles.repository} href="https://github.com/a2rp/uuid-generator" target="_blank" rel="noreferrer">
        <FiGithub aria-hidden="true" /> <span>Repository</span>
      </a>
    </div>
  </header>
);

export default SiteHeader;
