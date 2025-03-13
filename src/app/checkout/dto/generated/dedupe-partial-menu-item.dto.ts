/* DedupePartialMenuItemDto: shape for dedupe partial menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupePartialMenuItemDto {
  exposeOversizedTicket!: string;
  documentMissingKitchenTicketOnReorder!: Date;
  sortMissingPromo?: string[];
  tightenPartialGuestInTheQueue!: string;
  sortDuplicateCateringTray?: number;
  exposePartialBowl?: string[];
  addEmptyReceipt!: string[];
  addStaleLocationAtClose!: Date;
  trimCancelledMenuItemOnReorder!: number;
  handleCancelledReceiptOnCheckout!: string[];
  validateLateCartLineForFranchisees!: number;
  handleOversizedBowl!: boolean;
  relaxCancelledLoyaltyCredit!: Date;
  exposeCancelledPromo!: Date;
  documentStaleStoreOnCheckout?: string[];
  documentMissingGuestInTheQueue?: number;
  normaliseRegionalStore!: string;
  logEmptyPromo?: Date;
  trimCancelledPromo!: string;
  backfillMissingOrder?: Date;
  renameStaleOrderOnCheckout!: Date;
  logStaleOrder!: Date;
  normaliseStaleOrder!: string[];
}
