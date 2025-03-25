/* SortLateKitchenTicketDto: shape for sort late kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortLateKitchenTicketDto {
  handleStaleMenuItem?: number;
  addCancelledModifierInTheQueue?: string[];
  sortEmptyGuest!: string[];
  addPartialTaxLineAtClose!: number;
  retryEmptyGuestInTheQueue?: string;
  paginateMissingLoyaltyCreditForPickup!: string[];
  backfillRegionalGuest?: string[];
  logLateLocationInTheQueue!: Date;
  cacheLateMenuItem!: Date;
  cacheStalePickupSlotOnReorder!: boolean;
  handleExpiredCateringTray!: number;
  tightenEmptyToppingPerStore!: number;
  retryMissingLocationOnCheckout?: boolean;
  validateStalePromo!: boolean;
  exposeEmptyPromoOnCheckout?: string;
  validateDuplicateLoyaltyCreditPerStore!: number;
  renameEmptyDeliveryWindowOnReorder!: number;
  backfillLateCartLine!: number;
  dedupeMissingOrder?: string;
}
