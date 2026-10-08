import assert from "node:assert/strict";
import test from "node:test";
import { createUuidV4, formatUuid, generateUuidBatch, uuidBatchLimit } from "./uuid.js";

const canonicalUuid = "d9428888-122b-4b00-8123-000000000000";

test("uses the platform UUID API when available", () => {
  const uuid = createUuidV4({ randomUUID: () => canonicalUuid });
  assert.equal(uuid, canonicalUuid);
});

test("fallback sets the UUID v4 version and RFC variant bits", () => {
  const uuid = createUuidV4({ getRandomValues: (bytes) => bytes.fill(0) });
  assert.equal(uuid, "00000000-0000-4000-8000-000000000000");
});

test("reports when secure browser randomness is unavailable", () => {
  assert.throws(() => createUuidV4({}), /secure random number generator/);
});

test("generates the requested batch size", () => {
  let next = 0;
  const batch = generateUuidBatch(4, { randomUUID: () => `uuid-${++next}` });
  assert.equal(batch.length, 4);
  assert.deepEqual(batch, ["uuid-1", "uuid-2", "uuid-3", "uuid-4"]);
});

test("rejects counts outside the supported whole-number range", () => {
  for (const count of [0, -1, 1.2, "nope", uuidBatchLimit + 1]) {
    assert.throws(() => generateUuidBatch(count, { randomUUID: () => canonicalUuid }), /whole number/);
  }
});

test("formats compact, uppercase, and braced values", () => {
  assert.equal(formatUuid(canonicalUuid), canonicalUuid);
  assert.equal(formatUuid(canonicalUuid, { compact: true }), "d9428888122b4b008123000000000000");
  assert.equal(formatUuid(canonicalUuid, { uppercase: true, braces: true }), `{${canonicalUuid.toUpperCase()}}`);
});
