/* ExposeOversizedPickupSlotOnCheckoutDto: shape for expose oversized pickup slot on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeOversizedPickupSlotOnCheckoutDto {
  exposeMissingTicket!: string;
  renameRegionalKitchenTicketOnCheckout?: boolean;
  cachePartialPromoPerStore!: number;
  backfillDuplicateBowl!: Date;
  cacheExpiredStoreForFranchisees!: number;
  guardPartialCartLine?: Date;
  renameCancelledTopping?: Date;
  tightenStaleCartLine!: number;
  backfillPartialBowlForFranchisees!: number;
  addPartialLocationOnReorder!: Date;
  validateOversizedPickupSlot?: Date;
}
