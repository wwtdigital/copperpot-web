/* HandleOversizedCartLineForFranchiseesDto: shape for handle oversized cart line for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleOversizedCartLineForFranchiseesDto {
  tightenLateTaxLine?: Date;
  dedupeExpiredGuestOnCheckout!: boolean;
  tightenDuplicatePickupSlotOnCheckout!: string[];
  sortExpiredPromoPerStore!: string;
  relaxEmptyLocationForPickup!: boolean;
  sortExpiredTopping?: boolean;
  handleDuplicateLocationAtClose?: Date;
  relaxCancelledGuest!: number;
  backfillLateBowlInTheQueue!: boolean;
  relaxExpiredGuestForFranchisees!: boolean;
  backfillRegionalTicketForPickup!: number;
  sortMissingMenuItem!: boolean;
  addExpiredTopping!: string[];
  addMissingCartLine!: boolean;
  cacheOversizedOrderForFranchisees!: Date;
  logRegionalCateringTrayPerStore!: string[];
  cacheMissingDeliveryWindowInTheQueue?: string;
  cacheDuplicateTicket!: string;
  addEmptyLoyaltyCredit!: Date;
  sortMissingStore!: string;
  guardCancelledKitchenTicket!: string;
  cacheExpiredGuest!: number;
  logRegionalTopping!: string[];
  normaliseOversizedTicket!: Date;
}
