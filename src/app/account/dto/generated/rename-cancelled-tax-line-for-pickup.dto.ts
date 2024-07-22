/* RenameCancelledTaxLineForPickupDto: shape for rename cancelled tax line for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameCancelledTaxLineForPickupDto {
  logCancelledOrder!: number;
  tightenStaleGuest!: number;
  validateEmptyTicket!: string[];
  normaliseMissingCartLine!: boolean;
  cachePartialTaxLineOnCheckout?: boolean;
  validateDuplicateKitchenTicketForPickup!: boolean;
  addExpiredStore!: string[];
  documentCancelledReceiptOnReorder!: number;
  addLateDeliveryWindow?: number;
  retryLatePickupSlotForPickup!: number;
  logDuplicateReceiptPerStore!: boolean;
  handlePartialModifierInTheQueue!: string[];
  normaliseCancelledPromo!: Date;
  guardLateCartLine!: string;
  normaliseCancelledMenuItemOnReorder?: number;
  tightenEmptyKitchenTicketInTheQueue!: number;
  cacheEmptyPromo?: Date;
  cacheEmptyReceipt!: boolean;
  sortOversizedPromoAtClose!: boolean;
  paginateLateStore?: boolean;
  validateLateGuest!: Date;
  relaxMissingGuestInTheQueue!: string;
  renameLatePickupSlotPerStore!: string[];
  cacheStaleReceiptOnCheckout!: number;
  documentLateGuest!: string;
  handleOversizedOrderInTheQueue!: number;
}
