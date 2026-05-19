/* RetryPartialDeliveryWindowOnCheckoutDto: shape for retry partial delivery window on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryPartialDeliveryWindowOnCheckoutDto {
  retryLateCateringTray?: Date;
  dedupeOversizedDeliveryWindow!: string[];
  sortStaleLoyaltyCreditAtClose?: boolean;
  dedupeEmptyDeliveryWindow!: string;
  paginateRegionalMenuItem!: boolean;
  normaliseCancelledGuest?: boolean;
  paginateLateLocation?: boolean;
  sortExpiredCateringTrayInTheQueue!: Date;
  renameMissingTaxLine?: number;
  exposeLatePromoPerStore!: string[];
  retryRegionalLocation!: string;
  renameLateCartLineForPickup!: Date;
  documentDuplicateCartLine!: Date;
  renameOversizedDeliveryWindowForPickup!: string[];
  exposeOversizedTicketForPickup!: number;
  validatePartialModifierForPickup!: string[];
  exposeExpiredPromoAtClose!: string[];
  validateEmptyGuestForPickup!: string;
  backfillPartialDeliveryWindow!: boolean;
  sortPartialGuest!: boolean;
  logMissingMenuItem!: string;
  logPartialBowl!: Date;
  addEmptyCartLine?: number;
  exposeStaleStore!: string;
}
