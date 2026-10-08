import { FiClipboard, FiDownload, FiFileText, FiTrash2 } from "react-icons/fi";
import styles from "./styles.module.css";

const UuidResults = ({ results, onCopyOne, onCopyAll, onDownloadText, onDownloadJson, onRequestClear }) => (
  <section className={styles.panel} aria-labelledby="results-title">
    <div className={styles.panelHeading}>
      <div className={styles.headingCopy}><span className={styles.step}>02</span><div><h2 id="results-title">Generated UUIDs</h2><p>{results.length ? `${results.length} ready to use` : "Your batch will appear here"}</p></div></div>
      {results.length > 0 && <button className={styles.clearButton} type="button" onClick={onRequestClear}><FiTrash2 aria-hidden="true" /> Clear</button>}
    </div>
    {results.length > 0 ? (
      <>
        <div className={styles.toolbar} aria-label="Batch actions">
          <button type="button" onClick={onCopyAll}><FiClipboard aria-hidden="true" /> Copy all</button>
          <button type="button" onClick={onDownloadText}><FiFileText aria-hidden="true" /> Save .txt</button>
          <button type="button" onClick={onDownloadJson}><FiDownload aria-hidden="true" /> Save .json</button>
        </div>
        <ol className={styles.list} aria-label="Generated UUID values">
          {results.map((uuid, index) => (
            <li className={styles.item} key={`${uuid}-${index}`}>
              <span className={styles.rowNumber}>{String(index + 1).padStart(2, "0")}</span>
              <code>{uuid}</code>
              <button type="button" aria-label={`Copy UUID ${index + 1}`} onClick={() => onCopyOne(uuid)}><FiClipboard aria-hidden="true" /><span>Copy</span></button>
            </li>
          ))}
        </ol>
        <p className={styles.listFoot}>Select a row's copy button to copy a single UUID.</p>
      </>
    ) : (
      <div className={styles.emptyState}>
        <span className={styles.emptyIcon}><FiClipboard aria-hidden="true" /></span>
        <h3>Nothing generated yet</h3>
        <p>Choose a batch size and format, then create UUIDs for testing, records, or local development.</p>
        <span className={styles.emptyHint}>Results stay in this tab only</span>
      </div>
    )}
  </section>
);

export default UuidResults;
