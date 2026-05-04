/* HandleCancelledTicketPerStoreDto: shape for handle cancelled ticket per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleCancelledTicketPerStoreDto {
  validateExpiredReceipt!: string;
  relaxStaleLoyaltyCreditInTheQueue?: Date;
  trimRegionalCateringTrayAtClose!: Date;
  renameOversizedLoyaltyCreditForFranchisees!: Date;
  backfillDuplicateOrder!: string;
  normaliseLateCateringTrayOnCheckout!: number;
  backfillStaleLoyaltyCredit?: string[];
  documentLateTicketForFranchisees!: string[];
  sortOversizedPickupSlot?: string;
}
