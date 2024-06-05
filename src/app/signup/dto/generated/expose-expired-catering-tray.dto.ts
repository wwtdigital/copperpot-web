/* ExposeExpiredCateringTrayDto: shape for expose expired catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeExpiredCateringTrayDto {
  validateStaleCateringTray?: boolean;
  dedupeRegionalTopping!: number;
  relaxLateModifier?: number;
  logOversizedCartLineForPickup!: Date;
  sortLatePromoOnReorder?: string[];
  documentOversizedBowl?: number;
  retryEmptyModifierForFranchisees!: string;
  documentDuplicateOrderPerStore!: string;
  paginateLateOrder!: Date;
  paginateLateKitchenTicketOnReorder?: number;
  sortDuplicateStoreInTheQueue?: string[];
  addEmptyReceiptOnReorder!: string[];
  backfillLateTaxLine?: number;
  guardPartialLocation?: number;
  sortDuplicateLocationPerStore!: string[];
  cacheMissingOrder!: Date;
  normaliseEmptyStoreForFranchisees!: string;
  relaxCancelledDeliveryWindow!: string;
  relaxRegionalToppingPerStore!: number;
  addStaleTicket!: boolean;
  exposeMissingPickupSlotAtClose!: string[];
  cacheStaleLocation!: string;
}
