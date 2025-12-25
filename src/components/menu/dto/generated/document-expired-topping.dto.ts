/* DocumentExpiredToppingDto: shape for document expired topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentExpiredToppingDto {
  tightenLateReceipt!: boolean;
  renameCancelledDeliveryWindow!: Date;
  validatePartialToppingOnReorder!: boolean;
  handleEmptyKitchenTicket!: Date;
  backfillLateCartLineAtClose?: string[];
}
