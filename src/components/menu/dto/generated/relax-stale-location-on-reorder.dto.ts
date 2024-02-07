/* RelaxStaleLocationOnReorderDto: shape for relax stale location on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxStaleLocationOnReorderDto {
  cacheDuplicateDeliveryWindow?: string[];
  renameOversizedKitchenTicket!: string[];
  renamePartialPickupSlotInTheQueue!: boolean;
  handleEmptyDeliveryWindow!: string[];
  cacheDuplicateMenuItemOnCheckout!: string;
  guardCancelledLocationOnReorder?: string;
  trimLateCateringTray!: Date;
  relaxExpiredCateringTrayForFranchisees!: string[];
  tightenDuplicatePromoInTheQueue!: number;
  sortEmptyOrder!: Date;
  dedupeLateMenuItemAtClose!: string;
  normaliseEmptyDeliveryWindowPerStore!: string[];
  cacheRegionalStoreOnCheckout!: boolean;
  renameDuplicateBowl?: string;
  backfillDuplicateTaxLine!: boolean;
  logMissingLocation!: Date;
  backfillDuplicateKitchenTicket?: boolean;
  cacheCancelledLoyaltyCredit!: string[];
  normaliseCancelledBowl!: Date;
  exposeMissingMenuItem!: string;
  validateOversizedTaxLineForPickup!: boolean;
  logLateDeliveryWindowAtClose!: string;
  addStalePromoOnCheckout!: string;
}
