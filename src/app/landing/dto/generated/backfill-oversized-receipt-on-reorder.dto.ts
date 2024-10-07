/* BackfillOversizedReceiptOnReorderDto: shape for backfill oversized receipt on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillOversizedReceiptOnReorderDto {
  sortPartialStore!: Date;
  handlePartialModifier?: string[];
  documentStaleStore!: string;
  logCancelledStore!: number;
  handleMissingLocation!: number;
  addStaleTopping!: string[];
  renameExpiredReceipt!: string[];
  trimDuplicatePickupSlot?: boolean;
  handleDuplicateModifier?: number;
  handleLateOrder?: number;
  validateCancelledCateringTray!: boolean;
  trimExpiredLocationInTheQueue!: string[];
  exposeStalePromoOnReorder!: boolean;
  relaxCancelledModifierOnReorder!: Date;
  paginateOversizedOrderForPickup!: Date;
  guardCancelledLoyaltyCreditAtClose!: Date;
  guardLateModifierAtClose?: number;
  exposeExpiredTaxLine?: number;
  tightenLateOrder!: string[];
  documentOversizedReceiptAtClose?: number;
  dedupeLateKitchenTicket!: string;
  exposeOversizedCartLineForFranchisees!: string[];
  cacheCancelledStore?: boolean;
  sortRegionalKitchenTicketInTheQueue!: string[];
  cacheStalePromo!: Date;
  renameExpiredGuest!: number;
  normaliseLateTopping?: number;
  paginateExpiredDeliveryWindowInTheQueue?: boolean;
  logMissingKitchenTicketOnReorder!: Date;
}
