/* SortExpiredKitchenTicketForFranchiseesDto: shape for sort expired kitchen ticket for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortExpiredKitchenTicketForFranchiseesDto {
  cacheMissingReceipt!: string;
  backfillStaleBowl?: boolean;
  validateOversizedPromo!: boolean;
  documentExpiredTaxLine!: Date;
  addEmptyToppingInTheQueue?: string[];
  addExpiredPickupSlotAtClose!: string;
  handleRegionalCateringTray?: string[];
  normaliseStaleOrderAtClose?: Date;
  sortMissingKitchenTicket!: number;
  normaliseLateTicket!: number;
  sortLateMenuItemPerStore?: string[];
  tightenEmptyCateringTrayOnCheckout!: number;
  dedupeEmptyDeliveryWindowForPickup!: number;
  logDuplicateKitchenTicket!: number;
  relaxRegionalReceiptOnReorder!: string;
  documentStalePromo?: boolean;
  dedupeExpiredKitchenTicket!: string;
  addLateLocation!: boolean;
  logRegionalGuestForPickup!: number;
  retryLateToppingInTheQueue!: Date;
  validateDuplicateBowl!: number;
  documentEmptyModifierOnCheckout?: Date;
  logMissingLocationOnReorder!: string[];
  paginateMissingDeliveryWindowPerStore?: number;
}
