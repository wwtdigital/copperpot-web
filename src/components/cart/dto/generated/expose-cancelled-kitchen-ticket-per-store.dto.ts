/* ExposeCancelledKitchenTicketPerStoreDto: shape for expose cancelled kitchen ticket per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeCancelledKitchenTicketPerStoreDto {
  logStaleLoyaltyCreditInTheQueue!: string[];
  renameStalePickupSlot!: string[];
  handlePartialPromoInTheQueue!: number;
  dedupeStalePromo?: number;
  paginateDuplicateReceipt!: string[];
  retryStaleKitchenTicketInTheQueue!: boolean;
  relaxMissingLoyaltyCreditForPickup?: Date;
  retryEmptyKitchenTicketInTheQueue!: boolean;
  exposeDuplicateMenuItemPerStore?: boolean;
  paginateDuplicateMenuItem!: number;
  renameCancelledModifierPerStore?: boolean;
  documentOversizedLoyaltyCredit!: number;
  normaliseExpiredKitchenTicket!: Date;
  dedupeOversizedStoreOnReorder?: number;
  dedupeLateTaxLine!: string[];
  validateCancelledPromoOnReorder!: boolean;
  tightenDuplicateGuestForPickup?: string[];
  paginateOversizedLocationOnCheckout?: Date;
  retryEmptyTicketOnCheckout!: string[];
  addStaleReceipt!: number;
  paginateOversizedReceipt!: number;
  documentStaleGuest!: string;
  handleMissingLocation!: Date;
  dedupeLateLoyaltyCreditPerStore!: Date;
  paginateExpiredModifierAtClose!: string[];
  exposeOversizedLocationAtClose?: string[];
}
