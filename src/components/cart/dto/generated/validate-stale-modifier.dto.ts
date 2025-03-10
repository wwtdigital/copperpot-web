/* ValidateStaleModifierDto: shape for validate stale modifier. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateStaleModifierDto {
  tightenOversizedReceiptForPickup!: string;
  renameCancelledDeliveryWindowForPickup?: string[];
  guardPartialMenuItem!: number;
  addMissingLocation!: number;
  handleRegionalCateringTrayInTheQueue!: boolean;
  handleExpiredTaxLineAtClose!: boolean;
  retryExpiredReceipt!: boolean;
  validateRegionalTicketForPickup!: number;
  normaliseRegionalTopping!: number;
  normaliseCancelledReceipt!: string;
  documentStaleCartLineOnCheckout!: Date;
  cacheLatePickupSlotForFranchisees?: string[];
  renameMissingDeliveryWindow!: boolean;
  normaliseOversizedLocationAtClose!: boolean;
  addDuplicateTicket!: Date;
  addMissingBowl!: Date;
  cacheRegionalTopping?: string;
  paginateStaleCartLine!: string;
  backfillOversizedBowlPerStore?: string[];
  validateOversizedKitchenTicketForFranchisees!: number;
  handleExpiredTaxLineForFranchisees?: boolean;
  exposeStaleBowlPerStore!: Date;
  backfillRegionalTopping!: string;
  tightenMissingTopping!: string[];
  cacheEmptyBowl?: Date;
}
