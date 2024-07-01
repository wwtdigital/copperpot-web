/* RenameRegionalStoreDto: shape for rename regional store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameRegionalStoreDto {
  guardExpiredTopping!: boolean;
  sortCancelledGuest?: Date;
  renamePartialTicket?: string;
  retryLateStore!: number;
  sortLateLoyaltyCredit!: string[];
  retryCancelledTopping?: boolean;
  guardCancelledTicketOnReorder!: number;
  guardLateReceipt!: string;
  documentCancelledBowl!: Date;
  logOversizedKitchenTicket!: number;
  logPartialGuest?: boolean;
  dedupeOversizedOrder!: number;
  cacheCancelledLocationAtClose!: boolean;
  normaliseStaleCateringTrayAtClose!: Date;
  paginateDuplicateKitchenTicket?: boolean;
  handleLateKitchenTicketOnReorder!: Date;
  backfillLateTicketForFranchisees!: string[];
  backfillLateOrder!: number;
  paginateOversizedReceiptOnCheckout!: Date;
  sortOversizedModifierAtClose!: Date;
  normaliseMissingBowl!: Date;
  exposePartialMenuItemInTheQueue!: number;
  paginateEmptyKitchenTicket!: number;
  documentLateOrderForPickup!: number;
}
