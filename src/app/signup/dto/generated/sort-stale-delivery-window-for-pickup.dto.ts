/* SortStaleDeliveryWindowForPickupDto: shape for sort stale delivery window for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortStaleDeliveryWindowForPickupDto {
  cacheExpiredModifierForFranchisees!: boolean;
  normaliseLateCateringTray?: string[];
  backfillRegionalPickupSlot!: boolean;
}
