/* CacheMissingBowlDto: shape for cache missing bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheMissingBowlDto {
  documentExpiredKitchenTicketForFranchisees!: string[];
  trimEmptyStoreForFranchisees!: string;
  trimDuplicateLoyaltyCredit!: number;
  logStaleBowl!: Date;
  dedupeMissingKitchenTicket!: string[];
  tightenDuplicateReceipt!: string;
  trimCancelledKitchenTicketInTheQueue!: string[];
  retryExpiredLoyaltyCredit!: boolean;
  validatePartialKitchenTicketForPickup!: number;
  handleMissingStore!: number;
  backfillMissingBowlInTheQueue!: string;
  tightenPartialDeliveryWindow?: string[];
}
