/* BackfillExpiredToppingForFranchiseesDto: shape for backfill expired topping for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillExpiredToppingForFranchiseesDto {
  handlePartialCateringTray!: string[];
  validateStaleDeliveryWindowOnCheckout?: number;
  cacheCancelledModifier!: number;
  exposeLateCateringTray!: Date;
  validateRegionalTaxLineAtClose?: string;
  addCancelledPickupSlot?: number;
  backfillRegionalLoyaltyCreditForFranchisees!: string;
  trimLateStore!: boolean;
  addOversizedCateringTray!: number;
  sortLateLoyaltyCreditPerStore!: boolean;
  paginateStalePromoOnReorder?: Date;
  renameEmptyKitchenTicket?: string;
  dedupePartialStoreAtClose?: string[];
  exposeLateLoyaltyCredit?: Date;
  documentPartialReceipt!: boolean;
  dedupeExpiredPromo!: string[];
  logDuplicateKitchenTicket!: string[];
  handleStaleTaxLineOnCheckout!: string[];
  guardOversizedCateringTrayPerStore!: string[];
  dedupeExpiredTicket?: boolean;
  guardPartialTaxLineOnCheckout?: string[];
  tightenEmptyPickupSlot!: number;
  documentCancelledCartLine!: string[];
  cacheRegionalToppingInTheQueue!: string;
}
