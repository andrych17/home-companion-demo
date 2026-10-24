// Run: node scripts/check-postcodes.mjs
import assert from "node:assert/strict";
import { lookupPostcode } from "../src/lib/areas.ts";

const covered = {
  "NG1": "Nottingham City Centre",
  "ng9 2ab": "Beeston, Stapleford & Chilwell",
  "NG92AB": "Beeston, Stapleford & Chilwell",
  "NG11": "Clifton, Wilford & Ruddington",
  "NG112AB": "Clifton, Wilford & Ruddington",
  " NG16 3XY ": "Eastwood, Kimberley & Nuthall",
  "NG7 2": "Lenton, Radford & Hyson Green",
};
for (const [input, area] of Object.entries(covered)) {
  assert.equal(lookupPostcode(input), area, input);
}

for (const input of ["NG17", "NG17 1AA", "NG0", "NG", "DE7 5AA", "BS8", "", "NG123"]) {
  assert.equal(lookupPostcode(input), null, input);
}

console.log("postcode checks passed");
