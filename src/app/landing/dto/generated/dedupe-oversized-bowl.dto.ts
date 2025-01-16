/* DedupeOversizedBowlDto: shape for dedupe oversized bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeOversizedBowlDto {
  renameStaleKitchenTicketForPickup!: string;
  backfillExpiredLoyaltyCredit!: number;
  relaxMissingTaxLine?: Date;
  paginateMissingOrderPerStore!: number;
  sortEmptyCateringTrayPerStore!: Date;
  backfillCancelledGuest?: string[];
}
