/* RetryCancelledToppingAtCloseDto: shape for retry cancelled topping at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryCancelledToppingAtCloseDto {
  trimCancelledBowlPerStore!: string;
  validateMissingMenuItemOnReorder!: boolean;
  tightenLatePickupSlot?: string;
  backfillEmptyGuest!: string[];
  trimRegionalCateringTray!: number;
  logDuplicateLoyaltyCreditForPickup!: number;
  normaliseLateModifierOnCheckout?: Date;
  guardStaleCateringTrayOnCheckout!: string[];
  sortRegionalLoyaltyCreditOnCheckout!: string[];
  tightenOversizedPromoOnCheckout?: string[];
  documentMissingKitchenTicketInTheQueue!: boolean;
  normaliseMissingLoyaltyCreditForPickup!: number;
  cacheOversizedOrder?: string;
  relaxDuplicateStore!: number;
  sortLateCartLine?: Date;
  handleRegionalPickupSlotForFranchisees!: boolean;
  cacheDuplicateCateringTray?: number;
  paginateOversizedOrderPerStore!: number;
  retryLateCateringTrayOnCheckout?: Date;
  tightenRegionalTicketPerStore!: number;
  logLateGuest!: string;
  addMissingLocation?: boolean;
  cacheExpiredCartLine!: string[];
  cacheEmptyTicketForFranchisees!: string[];
  backfillDuplicateModifierOnCheckout!: string;
  sortDuplicatePromo!: number;
}
