/* CacheMissingLoyaltyCreditDto: shape for cache missing loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheMissingLoyaltyCreditDto {
  tightenPartialPickupSlot?: Date;
  renameMissingPickupSlot?: string;
  trimStaleKitchenTicket!: boolean;
  retryEmptyPromoPerStore?: string[];
  sortLateTaxLine!: string[];
  handleCancelledLocationPerStore!: string[];
  cachePartialTaxLine?: boolean;
  exposeOversizedLoyaltyCreditInTheQueue!: number;
  validateMissingBowl!: string;
  retryRegionalLoyaltyCredit!: string;
  guardExpiredGuestForPickup?: Date;
  validateCancelledModifier!: boolean;
  trimStalePromo!: Date;
  renamePartialCartLine!: string;
  logCancelledCartLine!: string[];
  paginateCancelledTopping!: Date;
  documentStaleTopping!: number;
  tightenStaleReceipt!: number;
  addExpiredTopping!: string;
  relaxLateBowlOnCheckout?: Date;
  logEmptyModifier!: boolean;
  trimPartialBowl!: number;
  exposeLateReceiptInTheQueue!: string;
  tightenStaleMenuItem!: number;
}
