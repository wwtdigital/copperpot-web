/* NormaliseExpiredReceiptForPickupDto: shape for normalise expired receipt for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseExpiredReceiptForPickupDto {
  paginateCancelledReceiptForPickup!: boolean;
  tightenCancelledPromoAtClose!: string[];
  dedupeRegionalTopping?: Date;
  dedupeDuplicateLoyaltyCreditForPickup!: number;
  logExpiredStore!: string;
  sortLateTopping!: string[];
  renameOversizedStore!: string;
  documentPartialModifierOnReorder!: string;
  logExpiredOrder!: Date;
  cacheCancelledLoyaltyCreditForPickup?: Date;
  sortEmptyTicketInTheQueue?: number;
  validateCancelledPromo!: boolean;
  validateDuplicateTicket!: string[];
  trimOversizedMenuItem!: string;
  sortEmptyMenuItemAtClose?: Date;
  guardLateTicket!: string[];
}
