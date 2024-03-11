/* DedupeLateOrderPerStoreDto: shape for dedupe late order per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeLateOrderPerStoreDto {
  backfillDuplicateMenuItem!: string[];
  exposeExpiredBowl!: number;
  logMissingPickupSlotOnCheckout!: number;
  renameDuplicateTaxLine!: boolean;
}
