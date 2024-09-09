/* SortExpiredToppingOnCheckoutDto: shape for sort expired topping on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortExpiredToppingOnCheckoutDto {
  addCancelledPromo!: string[];
  retryEmptyCartLine!: string[];
  logCancelledCartLine?: string;
  documentEmptyLoyaltyCredit?: string[];
  relaxOversizedReceiptOnReorder?: number;
  retryOversizedGuest!: string;
  logDuplicateCartLineForPickup!: string[];
  addLateTicketForPickup?: Date;
  handleRegionalReceipt!: string;
  normaliseExpiredPickupSlot?: Date;
  trimMissingTaxLine?: boolean;
  tightenEmptyMenuItem!: number;
  sortExpiredOrder!: Date;
  retryStaleGuestForFranchisees?: boolean;
  cacheRegionalTicket!: string[];
  cacheEmptyMenuItem!: string[];
  validateRegionalKitchenTicketOnCheckout!: string[];
  paginateEmptyCateringTrayForPickup!: boolean;
  exposeMissingTaxLine!: string;
  retryDuplicateMenuItemForFranchisees!: number;
  tightenOversizedOrderForFranchisees!: string[];
  normaliseMissingDeliveryWindowForFranchisees!: number;
  dedupeMissingMenuItem!: boolean;
  backfillPartialStore!: number;
}
