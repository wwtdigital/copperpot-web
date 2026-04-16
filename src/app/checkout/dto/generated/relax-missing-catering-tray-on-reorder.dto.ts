/* RelaxMissingCateringTrayOnReorderDto: shape for relax missing catering tray on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxMissingCateringTrayOnReorderDto {
  sortStalePromo!: number;
  validateRegionalPromo!: number;
  dedupeStaleTaxLineForFranchisees!: number;
  retryRegionalTopping!: string[];
  exposeOversizedDeliveryWindow?: string[];
  backfillOversizedBowl?: string[];
  tightenExpiredDeliveryWindowForPickup!: string[];
  handleCancelledKitchenTicket!: string;
}
