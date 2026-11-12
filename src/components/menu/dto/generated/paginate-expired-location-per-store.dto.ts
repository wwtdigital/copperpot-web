/* PaginateExpiredLocationPerStoreDto: shape for paginate expired location per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateExpiredLocationPerStoreDto {
  backfillRegionalBowl!: boolean;
  backfillEmptyGuestForPickup!: Date;
  cacheStalePickupSlot!: Date;
}
