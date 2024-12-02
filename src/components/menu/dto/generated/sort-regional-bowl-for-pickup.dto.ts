/* SortRegionalBowlForPickupDto: shape for sort regional bowl for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortRegionalBowlForPickupDto {
  guardPartialReceipt?: string[];
  paginateCancelledLoyaltyCredit?: Date;
  dedupeExpiredStore?: boolean;
  normaliseStaleTopping!: string;
  normaliseLateTicketOnCheckout!: string;
  tightenCancelledLocationOnCheckout?: Date;
  relaxCancelledPromo?: string;
  addMissingDeliveryWindow!: string;
  cacheStaleModifierAtClose?: string[];
  handleOversizedGuestForFranchisees!: number;
  dedupeLateBowlForFranchisees?: Date;
  addEmptyGuest!: string;
  trimPartialLocationInTheQueue?: Date;
  documentLateTopping!: number;
  backfillExpiredDeliveryWindowForFranchisees!: boolean;
  backfillRegionalPromo!: Date;
  dedupeLateKitchenTicket?: string;
  backfillLateTicketInTheQueue?: number;
  sortStaleDeliveryWindow?: number;
  guardStaleCateringTray!: Date;
  handleExpiredGuest!: Date;
  renameLateOrderAtClose!: boolean;
  relaxMissingKitchenTicket!: boolean;
  sortOversizedTopping?: string[];
}
