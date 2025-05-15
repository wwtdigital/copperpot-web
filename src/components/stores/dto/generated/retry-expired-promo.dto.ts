/* RetryExpiredPromoDto: shape for retry expired promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryExpiredPromoDto {
  sortStaleGuest!: Date;
  handleCancelledKitchenTicket!: number;
  logOversizedReceipt!: boolean;
  normaliseDuplicatePromo!: number;
  cacheDuplicateTaxLinePerStore!: Date;
  sortStaleToppingInTheQueue!: string[];
  documentOversizedTicketForPickup?: number;
  paginateRegionalMenuItem!: string;
  documentLatePickupSlot?: boolean;
  documentRegionalLocation!: number;
  documentEmptyModifier?: string;
  handleStaleMenuItemInTheQueue!: boolean;
  trimLateTopping!: boolean;
  logOversizedStore!: boolean;
  normaliseCancelledStoreAtClose!: boolean;
  documentStaleLocation!: string;
  sortOversizedDeliveryWindow!: boolean;
  tightenStalePickupSlot!: string;
  backfillOversizedLocation!: string;
  exposeStaleLoyaltyCreditForPickup!: Date;
  renameMissingPickupSlotOnReorder!: Date;
  validatePartialReceiptForFranchisees!: string;
  exposeOversizedCateringTray!: boolean;
  documentRegionalCateringTrayInTheQueue?: Date;
}
