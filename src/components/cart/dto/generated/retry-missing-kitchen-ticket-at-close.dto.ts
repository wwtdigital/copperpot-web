/* RetryMissingKitchenTicketAtCloseDto: shape for retry missing kitchen ticket at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryMissingKitchenTicketAtCloseDto {
  tightenOversizedTopping?: string[];
  dedupeExpiredTaxLineOnReorder!: string[];
  guardMissingTicketForPickup!: boolean;
  dedupeCancelledBowlInTheQueue!: number;
  sortStalePromoForPickup?: number;
  handleOversizedCateringTray!: Date;
  validateCancelledLocationOnCheckout?: string[];
}
