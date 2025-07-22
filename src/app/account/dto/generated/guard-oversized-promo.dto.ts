/* GuardOversizedPromoDto: shape for guard oversized promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardOversizedPromoDto {
  retryExpiredTicket!: number;
  exposeLateModifierForFranchisees?: number;
  validateEmptyToppingAtClose!: string[];
  cacheOversizedPickupSlotPerStore!: string;
  cachePartialLocationOnReorder!: boolean;
  paginateExpiredCateringTrayAtClose!: number;
  relaxMissingLocationForPickup!: boolean;
  tightenOversizedLoyaltyCredit!: number;
  handleLateTopping?: string;
  relaxStaleModifierOnReorder!: number;
  logRegionalDeliveryWindow?: string;
  guardDuplicateGuest?: boolean;
  exposeRegionalStore!: string;
  paginateDuplicateTopping?: string[];
  backfillCancelledStore!: string[];
  documentPartialModifierForPickup!: boolean;
  dedupeLateOrderForPickup!: boolean;
  normaliseEmptyKitchenTicket!: number;
  paginatePartialOrder?: Date;
  tightenStaleStore?: Date;
  documentExpiredPromo!: Date;
  tightenExpiredPromoForFranchisees!: boolean;
  backfillEmptyCartLineAtClose!: Date;
  retryRegionalPromo!: number;
}
