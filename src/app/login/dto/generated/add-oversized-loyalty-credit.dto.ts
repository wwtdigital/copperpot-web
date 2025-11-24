/* AddOversizedLoyaltyCreditDto: shape for add oversized loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddOversizedLoyaltyCreditDto {
  paginatePartialTicket?: string;
  guardDuplicateReceipt?: Date;
  validateRegionalGuest!: number;
  validateExpiredKitchenTicketForPickup!: Date;
  trimOversizedStoreAtClose?: Date;
  backfillRegionalPickupSlotOnCheckout!: string[];
  retryPartialKitchenTicket?: boolean;
  guardRegionalStore!: number;
  guardEmptyMenuItemOnReorder!: boolean;
  trimOversizedMenuItemForPickup!: Date;
  retryStaleStore!: boolean;
  exposeEmptyDeliveryWindow!: boolean;
  renameMissingPickupSlotPerStore!: string[];
  validateMissingMenuItemOnCheckout!: string[];
  cacheCancelledReceiptPerStore!: number;
  paginateMissingMenuItemInTheQueue?: string;
  addStaleGuest!: boolean;
  backfillCancelledCartLine?: boolean;
  retryExpiredPickupSlot!: string[];
  trimOversizedKitchenTicket!: boolean;
  dedupeCancelledStorePerStore!: boolean;
  trimRegionalStoreOnCheckout!: number;
  handleStaleTopping?: boolean;
  guardCancelledPromoOnReorder!: boolean;
  tightenDuplicateTicket!: number;
  guardDuplicateOrder?: boolean;
  normaliseMissingCartLine!: boolean;
  trimExpiredStore!: string[];
  addStaleKitchenTicket!: string[];
  trimCancelledLocationForFranchisees!: Date;
  sortPartialBowlPerStore!: number;
}
