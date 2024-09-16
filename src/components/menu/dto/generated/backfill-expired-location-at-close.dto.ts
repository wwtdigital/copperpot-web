/* BackfillExpiredLocationAtCloseDto: shape for backfill expired location at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillExpiredLocationAtCloseDto {
  cacheDuplicatePickupSlot!: boolean;
  guardDuplicateKitchenTicket!: string[];
  documentLateTopping!: Date;
  validateLateMenuItem?: Date;
  documentEmptyCateringTray?: string[];
  documentCancelledPromoForFranchisees!: number;
  backfillLateLocationOnCheckout?: string[];
  paginateCancelledCartLine!: number;
}
