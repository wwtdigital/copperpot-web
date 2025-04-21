/* LogEmptyLoyaltyCreditDto: shape for log empty loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogEmptyLoyaltyCreditDto {
  documentMissingBowl?: string[];
  validateRegionalModifier?: number;
  normaliseDuplicateOrderForPickup!: string;
  validateEmptyCartLinePerStore!: string[];
  normaliseCancelledPickupSlotForFranchisees!: string[];
  backfillLateGuest!: string[];
  exposeCancelledTicket!: string[];
  guardEmptyMenuItem!: boolean;
  backfillStaleStore!: boolean;
  normaliseOversizedPromo?: string[];
  validateMissingBowl!: number;
  sortExpiredTaxLine!: number;
  guardRegionalLocationForPickup!: Date;
  trimStaleTicketInTheQueue!: string;
  exposePartialCartLinePerStore?: number;
  paginateLateCartLineForFranchisees!: boolean;
  documentRegionalCateringTray!: string[];
  retryExpiredTicket?: number;
  sortDuplicateOrderForPickup?: Date;
  validateRegionalCartLineForPickup!: boolean;
  logPartialGuestForFranchisees!: number;
  normaliseDuplicateTopping!: string[];
  exposeEmptyCateringTray!: Date;
  normaliseCancelledReceiptInTheQueue!: string[];
}
