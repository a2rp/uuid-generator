import { useMemo, useState } from "react";
import { formatUuid, generateUuidBatch } from "../../utils/uuid.js";
import ChangeConfirm from "./changeConfirm/index.jsx";
import GenerationControls from "./generationControls/index.jsx";
import UuidResults from "./uuidResults/index.jsx";
import styles from "./styles.module.css";

const saveFile = (filename, contents, mimeType) => {
  const blob = new Blob([contents], { type: mimeType });
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
};

const UuidWorkbench = () => {
  const [count, setCount] = useState("10");
  const [format, setFormat] = useState("standard");
  const [uppercase, setUppercase] = useState(false);
  const [braces, setBraces] = useState(false);
  const [uuids, setUuids] = useState([]);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const results = useMemo(
    () => uuids.map((uuid) => formatUuid(uuid, { compact: format === "compact", uppercase, braces })),
    [uuids, format, uppercase, braces],
  );

  const generate = () => {
    try {
      const generated = generateUuidBatch(count);
      setUuids(generated);
      setError("");
      setNotice(`${generated.length} secure UUID${generated.length === 1 ? "" : "s"} generated.`);
    } catch (generationError) {
      setError(generationError.message);
      setNotice("");
    }
  };

  const copyText = async (text, successMessage) => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard access is unavailable.");
      await navigator.clipboard.writeText(text);
      setError("");
      setNotice(successMessage);
    } catch {
      setNotice("");
      setError("Clipboard access is unavailable in this browser. You can still select and copy the values.");
    }
  };

  const downloadText = () => {
    saveFile("uuids.txt", results.join("\n"), "text/plain;charset=utf-8");
    setNotice("UUIDs saved as a text file.");
    setError("");
  };

  const downloadJson = () => {
    const data = { version: 4, format, generatedAt: new Date().toISOString(), uuids: results };
    saveFile("uuids.json", JSON.stringify(data, null, 2), "application/json;charset=utf-8");
    setNotice("UUIDs saved as a JSON file.");
    setError("");
  };

  const clearResults = () => {
    setUuids([]);
    setShowClearConfirm(false);
    setNotice("Generated UUIDs cleared.");
    setError("");
  };

  return (
    <section className={styles.workbench} id="generate" aria-labelledby="generator-title">
      <div className={styles.heading}>
        <div><p className={styles.sectionLabel}>UUID v4 batch builder</p><h2 id="generator-title">Make a batch, your way.</h2><p>Choose a quantity and display style. Each identifier uses secure randomness in this browser.</p></div>
        <div className={styles.localTag}><span /> Nothing leaves this tab</div>
      </div>
      <div className={styles.grid}>
        <GenerationControls count={count} onCountChange={setCount} format={format} onFormatChange={setFormat} uppercase={uppercase} onUppercaseChange={setUppercase} braces={braces} onBracesChange={setBraces} onGenerate={generate} />
        <UuidResults results={results} onCopyOne={(uuid) => copyText(uuid, "UUID copied to clipboard.")} onCopyAll={() => copyText(results.join("\n"), `${results.length} UUIDs copied to clipboard.`)} onDownloadText={downloadText} onDownloadJson={downloadJson} onRequestClear={() => setShowClearConfirm(true)} />
      </div>
      {error && <p className={styles.error} role="alert">{error}</p>}
      {notice && <p className={styles.notice} role="status" aria-live="polite">{notice}</p>}
      <p className={styles.limitNote}>Batch limit: 500 UUIDs <span /> UUID version 4 <span /> Generated on demand</p>
      {showClearConfirm && <ChangeConfirm onCancel={() => setShowClearConfirm(false)} onConfirm={clearResults} />}
    </section>
  );
};

export default UuidWorkbench;
