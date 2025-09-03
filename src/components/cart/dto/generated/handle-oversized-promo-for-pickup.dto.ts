/* HandleOversizedPromoForPickupDto: shape for handle oversized promo for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleOversizedPromoForPickupDto {
  relaxRegionalToppingPerStore!: Date;
  trimEmptyPickupSlotOnReorder?: string[];
  paginateExpiredTicket!: string;
  trimPartialMenuItem!: number;
  tightenCancelledGuest?: number;
  renameMissingBowl?: Date;
  exposeOversizedToppingForFranchisees!: string;
  trimExpiredReceipt!: number;
  handleExpiredTopping!: string[];
  handleOversizedMenuItem!: number;
  dedupeOversizedTaxLineInTheQueue!: Date;
  trimEmptyKitchenTicketPerStore!: number;
  handleOversizedTicketAtClose!: string[];
  relaxCancelledCateringTrayForFranchisees?: string;
  validateDuplicateReceipt!: string[];
  relaxCancelledGuestInTheQueue!: number;
  cacheOversizedLoyaltyCreditAtClose?: string[];
  sortExpiredModifier!: string;
  guardLatePickupSlot!: string;
  normaliseCancelledMenuItemOnCheckout!: string[];
  tightenDuplicateReceipt!: Date;
  trimExpiredPickupSlotOnReorder!: boolean;
  tightenLateLocationPerStore?: string;
  sortExpiredMenuItem?: Date;
}
