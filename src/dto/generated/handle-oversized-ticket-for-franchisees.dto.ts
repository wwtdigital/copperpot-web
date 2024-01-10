/* HandleOversizedTicketForFranchiseesDto: shape for handle oversized ticket for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleOversizedTicketForFranchiseesDto {
  logDuplicateReceiptOnReorder?: number;
  exposeCancelledDeliveryWindow?: string[];
  dedupeOversizedStore!: Date;
  handleOversizedModifier!: Date;
  paginateCancelledDeliveryWindow?: number;
  sortStaleReceipt!: Date;
  backfillExpiredCartLine?: string[];
  normalisePartialLoyaltyCreditPerStore!: string;
  renameDuplicateTaxLineOnReorder!: string[];
  sortExpiredLocation?: boolean;
  documentLateOrder?: string[];
  validateEmptyTicket!: string;
  addExpiredPickupSlot?: string[];
  backfillDuplicateTopping!: string;
  trimEmptyTaxLine?: Date;
  guardRegionalGuestPerStore?: number;
  addEmptyOrderForFranchisees?: string[];
  cacheExpiredOrder?: Date;
  backfillExpiredCateringTray!: boolean;
  cacheDuplicateBowlForFranchisees?: string;
  validateStaleToppingForPickup!: Date;
  validateCancelledKitchenTicketAtClose?: number;
  dedupeRegionalDeliveryWindow!: string;
  relaxRegionalStore?: Date;
  backfillLateReceiptForFranchisees?: number;
  normaliseLateLocation!: number;
}
