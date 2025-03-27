/* SortStalePickupSlotDto: shape for sort stale pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortStalePickupSlotDto {
  logStaleDeliveryWindowForFranchisees!: number;
  documentDuplicateLocationAtClose!: Date;
  tightenLateStore!: boolean;
  exposeLateStorePerStore!: number;
  documentEmptyPickupSlot?: boolean;
  logPartialDeliveryWindow!: number;
  logStaleToppingInTheQueue!: string[];
  backfillExpiredPickupSlot?: boolean;
  addPartialMenuItemOnReorder!: boolean;
  retryCancelledTopping!: number;
  addExpiredPromo!: Date;
  exposeDuplicateTicketForPickup?: boolean;
  cacheEmptyStore!: string[];
  exposePartialOrderInTheQueue?: number;
  addPartialCartLineForPickup!: string[];
  sortPartialCartLine!: string[];
  relaxRegionalModifier?: string[];
  cachePartialReceipt!: string;
  guardExpiredBowlForPickup?: number;
  logOversizedCartLine!: boolean;
  documentRegionalCartLine!: string[];
  renameCancelledPromoAtClose!: string[];
  dedupeMissingModifier!: Date;
  validateMissingCateringTrayOnReorder!: boolean;
}
