/* NormaliseLateTicketDto: shape for normalise late ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseLateTicketDto {
  exposeMissingPromo!: boolean;
  backfillRegionalTicket!: number;
  sortPartialBowlOnReorder?: number;
  validatePartialGuest?: string[];
  documentRegionalTicket!: string;
  retryOversizedToppingInTheQueue?: number;
  backfillPartialLoyaltyCredit!: boolean;
  backfillPartialPickupSlot?: string[];
  logMissingLocationForFranchisees!: Date;
  addPartialMenuItem?: Date;
  tightenExpiredKitchenTicket!: string;
  normaliseDuplicateCateringTrayForPickup!: number;
  dedupeRegionalCateringTray!: string;
}
