/* DedupeDuplicateOrderDto: shape for dedupe duplicate order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeDuplicateOrderDto {
  logRegionalPickupSlotPerStore!: boolean;
  retryMissingMenuItem!: string[];
  paginateEmptyCartLine!: Date;
  tightenCancelledReceipt!: string[];
}
