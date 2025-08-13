// helpers/existenceToggles.ts
export type ToggleState = "has" | "hasNot" | null;

/**
 * Normalizes existence toggles.
 * Accepts query patterns like:
 *   ?hasAbility=has
 *   ?hasAbility=hasNot
 *   ?hasAbility=has&hasAbility=hasNot   -> null (no filter)
 * Also tolerates truthy/falsey shorthands: true/false, 1/0, yes/no, on/off
 */
export function parseExistenceToggle(raw: string | string[] | null): ToggleState {
  if (raw == null) return null;

  const vals = Array.isArray(raw) ? raw : [raw];

  const norm = new Set(
    vals
      .map((v) => String(v).trim().toLowerCase())
      .map((s) => {
        if (s === "true" || s === "1" || s === "yes" || s === "on") return "has";
        if (s === "false" || s === "0" || s === "no" || s === "off") return "hasnot";
        return s; // allow "has" / "hasnot" directly
      })
      .filter((t) => t === "has" || t === "hasnot")
  );

  const has = norm.has("has");
  const hasNot = norm.has("hasnot");

  // If both (or none) are present, treat as NO FILTER
  if ((has && hasNot) || (!has && !hasNot)) return null;
  return has ? "has" : "hasNot";
}
