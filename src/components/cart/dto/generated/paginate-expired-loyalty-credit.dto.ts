/* PaginateExpiredLoyaltyCreditDto: shape for paginate expired loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateExpiredLoyaltyCreditDto {
  addRegionalLoyaltyCredit!: string;
  retryRegionalTicket?: number;
  handleDuplicateDeliveryWindowPerStore!: Date;
  backfillLateCateringTrayAtClose!: string;
  handleMissingTaxLine!: string;
  handleCancelledPickupSlot!: boolean;
  tightenPartialReceipt!: Date;
  cacheExpiredPromo!: string;
  backfillLateMenuItemForPickup!: string[];
  relaxExpiredMenuItemForPickup!: string[];
  documentEmptyKitchenTicket?: string;
  addCancelledCateringTray!: number;
  sortLateGuest!: boolean;
  exposeRegionalMenuItem!: string;
  handlePartialLocation!: boolean;
  normaliseOversizedToppingForFranchisees?: string[];
  backfillEmptyCateringTray!: Date;
  normalisePartialGuestForPickup!: boolean;
  exposePartialCateringTrayAtClose!: string;
  exposeCancelledMenuItem?: number;
  paginateOversizedLocationPerStore?: number;
  relaxEmptyLoyaltyCreditPerStore!: boolean;
  validateEmptyCateringTray?: number;
  retryPartialStore!: boolean;
  documentPartialBowlAtClose?: string;
  dedupeEmptyDeliveryWindow?: string[];
  cachePartialLocationForFranchisees?: number;
  paginateDuplicateCartLine!: number;
}
