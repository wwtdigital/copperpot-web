/* NormaliseEmptyToppingOnCheckoutDto: shape for normalise empty topping on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseEmptyToppingOnCheckoutDto {
  handleStaleOrderAtClose?: Date;
  handleMissingKitchenTicket!: boolean;
  dedupeLateCartLine!: Date;
  normaliseCancelledCateringTrayInTheQueue?: boolean;
  normaliseLateStore!: Date;
  cacheStaleModifierPerStore?: boolean;
  renameLateOrder!: boolean;
  relaxCancelledReceipt!: string;
  backfillExpiredTaxLine!: string[];
  paginateCancelledCateringTrayOnReorder!: number;
  renameOversizedPickupSlotPerStore!: number;
  documentDuplicateDeliveryWindowOnCheckout!: number;
  logOversizedBowl?: boolean;
  tightenExpiredPromo!: Date;
  paginatePartialMenuItemForFranchisees?: string[];
  guardMissingPickupSlotAtClose?: string[];
  normaliseExpiredPromo!: number;
  documentPartialLocation?: Date;
  validateExpiredModifier!: string;
  exposeRegionalTaxLineInTheQueue!: string;
  validateCancelledCateringTray?: string[];
  handleStaleCateringTray?: Date;
  normaliseOversizedLocation!: string[];
  handleExpiredLoyaltyCredit?: string;
}
