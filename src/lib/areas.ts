// Nottingham coverage, NG1 to NG16. No path aliases here so
// scripts/check-postcodes.ts can import it with plain Node.
const ngAreas: Record<number, string> = {
  1: "Nottingham City Centre",
  2: "West Bridgford, The Meadows & Sneinton",
  3: "Mapperley, St Ann's & Carlton",
  4: "Carlton, Gedling & Netherfield",
  5: "Arnold, Sherwood & Bestwood",
  6: "Bulwell & Cinderhill",
  7: "Lenton, Radford & Hyson Green",
  8: "Wollaton, Aspley & Bilborough",
  9: "Beeston, Stapleford & Chilwell",
  10: "Long Eaton & Sandiacre",
  11: "Clifton, Wilford & Ruddington",
  12: "Radcliffe-on-Trent, Keyworth & Cotgrave",
  13: "Bingham",
  14: "Calverton, Burton Joyce & Lowdham",
  15: "Hucknall & Ravenshead",
  16: "Eastwood, Kimberley & Nuthall",
};

// Returns the covered area for a full or partial UK postcode, or null
export function lookupPostcode(input: string): string | null {
  const parts = input.trim().toUpperCase().split(/\s+/);
  let outward = parts[0];
  // "NG92AB" typed without a space: the inward code is the last three characters
  if (parts.length === 1 && /^[A-Z]{1,2}\d{1,2}\d[A-Z]{2}$/.test(outward)) {
    outward = outward.slice(0, -3);
  }
  const m = /^NG(\d{1,2})$/.exec(outward);
  return m ? (ngAreas[Number(m[1])] ?? null) : null;
}

export const quickPostcodes = [
  "West Bridgford (NG2)",
  "Beeston (NG9)",
  "Arnold (NG5)",
  "Wollaton (NG8)",
  "Carlton (NG4)",
  "Hucknall (NG15)",
  "Clifton (NG11)",
  "Long Eaton (NG10)",
];

export const hubs = [
  {
    region: "South Nottingham",
    postcodes: "NG2, NG11, NG12",
    areas: [
      "West Bridgford & Lady Bay",
      "The Meadows & Trent Bridge",
      "Clifton & Wilford",
      "Ruddington",
      "Radcliffe-on-Trent & Keyworth",
    ],
    desc: "Easy runs to QMC and City Hospital, with riverside walks along the Trent.",
  },
  {
    region: "West Nottingham & Beeston",
    postcodes: "NG7, NG8, NG9",
    areas: [
      "Lenton & Dunkirk",
      "Wollaton & Bilborough",
      "Beeston & Chilwell",
      "Stapleford & Bramcote",
      "Attenborough & Toton",
    ],
    desc: "Handy for QMC appointments, Wollaton Park strolls and Beeston's high street.",
  },
  {
    region: "North Nottingham",
    postcodes: "NG5, NG6, NG15",
    areas: [
      "Arnold & Redhill",
      "Sherwood & Carrington",
      "Bulwell & Bestwood",
      "Hucknall",
      "Ravenshead",
    ],
    desc: "Regular trips to Arnold and Hucknall town centres, lunch clubs and Bestwood Country Park.",
  },
  {
    region: "East Nottingham",
    postcodes: "NG3, NG4, NG14",
    areas: [
      "Mapperley & Thorneywood",
      "Carlton & Gedling",
      "Netherfield & Colwick",
      "Burton Joyce & Lowdham",
      "Calverton",
    ],
    desc: "Covering Carlton and Gedling, with outings to Colwick and Gedling country parks.",
  },
  {
    region: "City Centre & Nearby Towns",
    postcodes: "NG1, NG10, NG13, NG16",
    areas: [
      "City Centre & Lace Market",
      "Long Eaton & Sandiacre",
      "Bingham",
      "Eastwood & Kimberley",
      "Nuthall & Watnall",
    ],
    desc: "Town-centre errands, shopping trips and lifts into the city.",
  },
];
