/* RetryLateReceiptForPickupDto: shape for retry late receipt for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryLateReceiptForPickupDto {
  paginateCancelledLoyaltyCreditForFranchisees!: string[];
  dedupeStaleLocationInTheQueue!: boolean;
  exposeLatePromo!: string[];
  normaliseRegionalMenuItemOnCheckout?: number;
  guardDuplicateLoyaltyCredit?: boolean;
  renameExpiredKitchenTicketAtClose!: Date;
  retryExpiredBowlForPickup!: number;
  sortCancelledModifier!: string[];
  backfillOversizedOrder!: number;
  validateOversizedOrder!: boolean;
  validatePartialTaxLineAtClose!: string;
}
