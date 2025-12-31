/* AddExpiredTaxLineDto: shape for add expired tax line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddExpiredTaxLineDto {
  retryDuplicateTaxLineForPickup?: number;
  documentOversizedBowlInTheQueue!: Date;
  handleExpiredPromoPerStore!: boolean;
  exposeLateOrder!: string[];
  retryCancelledCateringTray?: Date;
  handleCancelledOrder!: string[];
  retryDuplicateMenuItemInTheQueue?: string[];
  relaxPartialTicket?: string;
  tightenEmptyCateringTray!: string;
  cacheRegionalPromo!: Date;
  sortMissingPromoAtClose!: boolean;
  normaliseStaleDeliveryWindow?: string;
  tightenMissingTaxLine?: string;
  addPartialModifier?: string;
  trimDuplicateKitchenTicket?: number;
  backfillStaleReceipt!: number;
  sortEmptyGuestOnCheckout!: boolean;
}
