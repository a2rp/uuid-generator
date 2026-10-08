export const uuidBatchLimit = 500;

export const createUuidV4 = (cryptoApi = globalThis.crypto) => {
  if (typeof cryptoApi?.randomUUID === "function") return cryptoApi.randomUUID();
  if (typeof cryptoApi?.getRandomValues !== "function") {
    throw new Error("This browser does not provide a secure random number generator.");
  }

  const bytes = new Uint8Array(16);
  cryptoApi.getRandomValues(bytes);
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
};

export const generateUuidBatch = (count, cryptoApi = globalThis.crypto) => {
  const amount = Number(count);
  if (!Number.isInteger(amount) || amount < 1 || amount > uuidBatchLimit) {
    throw new Error(`Choose a whole number between 1 and ${uuidBatchLimit}.`);
  }
  return Array.from({ length: amount }, () => createUuidV4(cryptoApi));
};

export const formatUuid = (uuid, { compact = false, uppercase = false, braces = false } = {}) => {
  let value = compact ? uuid.replaceAll("-", "") : uuid;
  if (uppercase) value = value.toUpperCase();
  return braces ? `{${value}}` : value;
};
