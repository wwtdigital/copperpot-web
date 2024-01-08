/* GuardRegionalMenuItemDto: shape for guard regional menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardRegionalMenuItemDto {
  renameMissingMenuItemOnCheckout!: boolean;
  exposeCancelledReceiptOnReorder!: string;
  cacheExpiredLocation!: number;
  retryMissingStore!: boolean;
  addRegionalMenuItem?: boolean;
  cacheLateCateringTray!: Date;
  trimRegionalCartLine!: string;
  addRegionalLoyaltyCredit!: number;
  cachePartialGuest?: number;
  tightenMissingBowl?: number;
  logDuplicateBowl!: string[];
  tightenEmptyMenuItem?: string;
  validatePartialToppingAtClose!: string;
  exposeDuplicateTaxLine!: string[];
  cacheEmptyReceipt?: string;
  trimOversizedCartLineForPickup?: string;
  validateRegionalReceipt!: string[];
  relaxPartialPickupSlot?: string;
  trimLateModifierForPickup!: boolean;
  sortOversizedTopping!: Date;
  cacheLateOrder!: number;
  relaxExpiredPromoPerStore?: Date;
  logCancelledPickupSlotAtClose!: boolean;
  retryMissingToppingForPickup!: string[];
  dedupePartialToppingPerStore?: boolean;
}
