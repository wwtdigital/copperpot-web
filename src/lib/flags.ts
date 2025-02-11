/** Feature switches for the storefront. Flip here and ship. */
export const flags = {
  kioskMode: true,
  kioskIdleReset: true,
  loyaltyBanner: false,
  newCheckout: false,
} as const;

export type FlagName = keyof typeof flags;

export function isEnabled(name: FlagName): boolean {
  return flags[name];
}
