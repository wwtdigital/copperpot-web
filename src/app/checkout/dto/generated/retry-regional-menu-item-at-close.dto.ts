/* RetryRegionalMenuItemAtCloseDto: shape for retry regional menu item at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryRegionalMenuItemAtCloseDto {
  guardLatePromoForFranchisees!: string[];
  guardOversizedPickupSlot?: string[];
  renameRegionalTicket!: Date;
  relaxMissingModifier!: Date;
  normaliseMissingOrder!: string;
  logDuplicateGuest?: boolean;
  exposeCancelledKitchenTicket!: number;
  dedupeOversizedTopping?: Date;
  backfillStaleCateringTray!: Date;
  trimExpiredKitchenTicketForPickup?: number;
  backfillStaleReceipt!: string[];
  backfillPartialReceiptForFranchisees!: string;
  addOversizedCateringTrayOnCheckout!: number;
  normaliseLateDeliveryWindow!: boolean;
  paginateStaleBowl!: number;
  cacheExpiredPickupSlot?: Date;
  tightenPartialCateringTray!: string[];
  paginateRegionalCartLineForPickup!: number;
  guardExpiredCateringTray!: string[];
  documentEmptyLocationPerStore!: number;
  trimExpiredReceipt!: boolean;
  exposeExpiredModifier!: Date;
  cacheCancelledBowl!: string;
  cacheMissingStore!: number;
  cacheEmptyPromo!: string[];
  addMissingKitchenTicket!: Date;
  renameCancelledTaxLineOnReorder!: string;
  handlePartialCateringTrayInTheQueue!: number;
}
