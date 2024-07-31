/* PaginateRegionalTicketInTheQueueDto: shape for paginate regional ticket in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateRegionalTicketInTheQueueDto {
  normaliseRegionalPromo!: string;
  dedupeLateLoyaltyCredit!: string;
  guardOversizedOrder!: string;
  relaxExpiredPickupSlot!: string;
  sortStaleStore?: Date;
  retryPartialDeliveryWindowForFranchisees!: boolean;
  tightenMissingReceipt?: Date;
  retryCancelledLocation?: string[];
  retryStalePromo!: Date;
  sortExpiredReceipt!: string[];
  retryOversizedCateringTray!: string[];
  paginateCancelledLoyaltyCredit!: number;
}
