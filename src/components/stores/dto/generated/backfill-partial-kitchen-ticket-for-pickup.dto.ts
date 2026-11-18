/* BackfillPartialKitchenTicketForPickupDto: shape for backfill partial kitchen ticket for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillPartialKitchenTicketForPickupDto {
  tightenDuplicateStoreInTheQueue!: string;
  documentRegionalTaxLine?: string[];
  dedupeStaleGuest?: string[];
  dedupeOversizedStore!: string[];
  normaliseOversizedModifier?: Date;
  handlePartialBowlForFranchisees!: number;
  normaliseLateCateringTray?: number;
  tightenPartialLocation?: boolean;
  documentRegionalTopping!: string[];
  documentRegionalLocation!: number;
  backfillEmptyDeliveryWindow!: string[];
  validateOversizedCateringTray?: boolean;
  dedupeOversizedCateringTray!: string;
  sortOversizedCartLine!: string[];
  handleDuplicateBowl?: number;
  cacheCancelledMenuItemOnReorder?: string;
  cacheLateCartLineForFranchisees!: Date;
  documentOversizedBowl!: string;
  relaxCancelledCateringTrayInTheQueue!: string[];
}
