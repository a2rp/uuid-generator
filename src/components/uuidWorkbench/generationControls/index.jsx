import { FiCheck, FiRefreshCw } from "react-icons/fi";
import styles from "./styles.module.css";

const presets = [1, 10, 50, 100];
const formats = [
  { id: "standard", title: "Standard", sample: "xxxxxxxx-xxxx-4xxx" },
  { id: "compact", title: "Compact", sample: "xxxxxxxxxxxx4xxx" },
];

const GenerationControls = ({ count, onCountChange, format, onFormatChange, uppercase, onUppercaseChange, braces, onBracesChange, onGenerate }) => (
  <form className={styles.panel} onSubmit={(event) => { event.preventDefault(); onGenerate(); }}>
    <div className={styles.panelHeading}>
      <div><span className={styles.step}>01</span><h2>Set up a batch</h2></div>
      <span className={styles.secure}><FiCheck aria-hidden="true" /> Secure random</span>
    </div>
    <label className={styles.fieldLabel} htmlFor="uuid-count">How many UUIDs?</label>
    <div className={styles.quantityRow}>
      <input id="uuid-count" type="number" inputMode="numeric" min="1" max="500" step="1" value={count} onChange={(event) => onCountChange(event.target.value)} aria-describedby="uuid-count-help" />
      <span>identifiers</span>
    </div>
    <p className={styles.helperText} id="uuid-count-help">Choose any whole number from 1 to 500.</p>
    <div className={styles.presets} role="group" aria-label="Common batch sizes">
      {presets.map((preset) => <button type="button" key={preset} aria-pressed={Number(count) === preset} onClick={() => onCountChange(String(preset))}>{preset}</button>)}
      <span>quick sizes</span>
    </div>
    <fieldset className={styles.formatField}>
      <legend>Display format</legend>
      <div className={styles.formatChoices} role="group" aria-label="UUID display format">
        {formats.map((choice) => (
          <button type="button" className={format === choice.id ? styles.selected : ""} key={choice.id} aria-pressed={format === choice.id} onClick={() => onFormatChange(choice.id)}>
            <b>{choice.title}</b><code>{choice.sample}</code>
          </button>
        ))}
      </div>
    </fieldset>
    <div className={styles.options}>
      <label><input type="checkbox" checked={uppercase} onChange={(event) => onUppercaseChange(event.target.checked)} /> <span>Uppercase letters</span></label>
      <label><input type="checkbox" checked={braces} onChange={(event) => onBracesChange(event.target.checked)} /> <span>Wrap in braces</span></label>
    </div>
    <button className={styles.generateButton} type="submit"><FiRefreshCw aria-hidden="true" /> Generate UUIDs <span>↗</span></button>
  </form>
);

export default GenerationControls;
