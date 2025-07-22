/* LogCancelledGuestPerStoreDto: shape for log cancelled guest per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogCancelledGuestPerStoreDto {
  handleLateCartLineOnReorder?: boolean;
  exposePartialModifier!: boolean;
  retryMissingPickupSlotAtClose!: string[];
  cachePartialStoreAtClose!: boolean;
  validateEmptyGuestOnReorder!: Date;
  normaliseOversizedPromo?: string;
  trimPartialDeliveryWindowForPickup!: boolean;
  paginateCancelledTicketAtClose!: number;
  paginateDuplicateOrder?: string;
  addEmptyTicketForPickup?: Date;
  exposeDuplicateBowl!: number;
  cacheEmptyDeliveryWindow!: Date;
  validateLateGuestForFranchisees!: string[];
  cacheMissingLoyaltyCredit?: number;
  backfillOversizedLocationInTheQueue!: boolean;
  normalisePartialCateringTray?: string;
  paginateLateMenuItem!: Date;
  exposeExpiredStoreOnCheckout!: string;
  dedupeCancelledTicketForPickup!: string[];
  cacheRegionalLocation?: number;
  guardEmptyCartLine?: boolean;
  normaliseStalePickupSlot!: boolean;
  documentDuplicateModifierOnReorder?: number;
  retryCancelledCartLineInTheQueue?: Date;
  dedupeExpiredCateringTray!: string[];
  logLateStore!: string[];
  normalisePartialPickupSlot!: boolean;
  tightenDuplicateReceipt?: boolean;
}
