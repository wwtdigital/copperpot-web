/* RenamePartialMenuItemPerStoreDto: shape for rename partial menu item per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenamePartialMenuItemPerStoreDto {
  exposeStaleDeliveryWindow?: number;
  tightenCancelledToppingPerStore!: boolean;
  validateOversizedMenuItemForFranchisees!: number;
  exposeExpiredLoyaltyCredit!: string[];
  tightenOversizedMenuItem!: boolean;
  relaxOversizedCartLine!: string;
  backfillOversizedLocation!: number;
  backfillCancelledTopping!: number;
  backfillLatePickupSlot?: string[];
  sortStaleDeliveryWindow!: Date;
  renameEmptyOrderPerStore!: Date;
  exposePartialMenuItem!: number;
  validateRegionalStoreForFranchisees!: string;
  exposeCancelledGuest!: boolean;
  relaxOversizedGuest!: number;
  logCancelledGuestPerStore!: number;
  renameStaleTicketOnReorder!: string[];
  tightenPartialBowlAtClose!: boolean;
  trimMissingMenuItemOnReorder!: Date;
  normalisePartialStore?: number;
  sortLateLocation?: boolean;
  cacheOversizedTicketPerStore!: string;
  dedupeOversizedLoyaltyCredit!: number;
  renameCancelledStoreAtClose!: boolean;
  paginatePartialMenuItemOnCheckout!: string;
}
