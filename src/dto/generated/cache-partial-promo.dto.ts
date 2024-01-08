/* CachePartialPromoDto: shape for cache partial promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CachePartialPromoDto {
  cachePartialOrderForPickup!: number;
  tightenEmptyTicket?: string;
  tightenExpiredLocationAtClose?: string[];
  cacheStaleTaxLine?: Date;
  backfillStaleMenuItem!: boolean;
  cacheDuplicatePickupSlot!: string[];
  trimEmptyLocation?: Date;
  dedupeEmptyCateringTray!: number;
  addPartialGuest!: number;
  cacheCancelledStoreForFranchisees?: boolean;
  guardLateLoyaltyCredit!: string;
  paginateStalePromo!: Date;
  backfillCancelledCartLineForFranchisees!: string[];
  relaxOversizedStoreOnReorder?: Date;
  relaxPartialOrder!: Date;
  paginateLateLocation!: Date;
  addDuplicateLoyaltyCredit!: Date;
  addExpiredCateringTray?: boolean;
  exposeEmptyOrder?: boolean;
  handleMissingPickupSlotOnCheckout!: number;
  relaxLateTaxLine!: string[];
  handleDuplicatePickupSlot!: Date;
  validateLateBowl!: Date;
  handleMissingCartLine?: string[];
}
