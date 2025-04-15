/* TrimOversizedToppingAtCloseDto: shape for trim oversized topping at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimOversizedToppingAtCloseDto {
  addExpiredTicket!: Date;
  renamePartialLoyaltyCredit?: Date;
  exposeStaleCateringTray!: Date;
  addExpiredStore!: string[];
  normaliseCancelledReceiptInTheQueue!: string;
  logLateStore!: boolean;
  documentMissingDeliveryWindowPerStore!: string[];
  logDuplicateTopping!: Date;
  backfillPartialCateringTray!: string;
  sortOversizedCartLine!: Date;
  paginateCancelledMenuItemOnReorder!: Date;
  paginateStaleLocation?: string;
  renamePartialLocationOnReorder!: string[];
  dedupeCancelledKitchenTicket!: number;
  paginateRegionalDeliveryWindowAtClose!: boolean;
  guardStaleGuestPerStore?: string[];
  cachePartialCartLineForPickup?: string[];
  exposeExpiredToppingOnCheckout!: boolean;
  trimDuplicateModifierForPickup!: Date;
  validatePartialPromoOnCheckout!: string;
  renameStaleGuest!: string;
  logRegionalLoyaltyCredit!: string;
  backfillLateLocationOnCheckout?: string[];
  trimPartialCateringTray?: string;
}
