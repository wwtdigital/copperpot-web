/* RetryMissingLoyaltyCreditDto: shape for retry missing loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryMissingLoyaltyCreditDto {
  cacheRegionalPickupSlotInTheQueue!: string;
  dedupeLateMenuItem!: boolean;
  exposeOversizedCartLine?: number;
  dedupeEmptyTicketAtClose!: number;
  trimEmptyTicketInTheQueue!: boolean;
  normaliseStaleLoyaltyCreditOnReorder?: number;
  renameDuplicateBowlForPickup!: string[];
  guardMissingTicket!: Date;
  sortCancelledOrder?: string;
  tightenEmptyPickupSlotOnReorder?: string[];
  relaxEmptyBowlInTheQueue!: boolean;
  logPartialGuestOnCheckout!: string[];
  cacheOversizedKitchenTicket!: boolean;
  exposeExpiredKitchenTicket!: Date;
  paginateOversizedTaxLine!: boolean;
  normaliseEmptyLocation!: string[];
  backfillPartialDeliveryWindowInTheQueue!: Date;
  relaxDuplicateCartLine?: number;
  handleLateCartLine!: Date;
  paginateRegionalStoreAtClose?: string;
  handleLateOrder!: number;
  retryStaleKitchenTicketPerStore?: boolean;
  dedupeExpiredDeliveryWindowOnReorder!: Date;
}
