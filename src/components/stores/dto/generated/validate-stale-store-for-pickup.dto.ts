/* ValidateStaleStoreForPickupDto: shape for validate stale store for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateStaleStoreForPickupDto {
  exposeRegionalOrderOnReorder!: string;
  tightenRegionalTicketPerStore?: Date;
  tightenRegionalToppingPerStore?: string;
  retryLatePromo!: boolean;
  cacheOversizedBowl!: Date;
  tightenExpiredToppingAtClose?: number;
  backfillLateTaxLine?: boolean;
  tightenPartialReceipt?: string[];
  documentExpiredGuest!: string;
  retryCancelledPickupSlot!: string;
  documentMissingCartLine?: string[];
  addExpiredPromo!: string[];
  normaliseCancelledKitchenTicket!: number;
}
