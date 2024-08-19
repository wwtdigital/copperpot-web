/* TrimExpiredPromoDto: shape for trim expired promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimExpiredPromoDto {
  sortRegionalKitchenTicket!: Date;
  validateExpiredMenuItem!: Date;
  trimMissingPickupSlotAtClose?: string[];
  relaxOversizedPromo?: boolean;
  guardOversizedReceiptAtClose!: number;
  normaliseDuplicateTaxLineOnCheckout!: boolean;
  paginateEmptyOrderForFranchisees?: string;
  retryDuplicateKitchenTicket?: boolean;
  exposeDuplicateReceiptPerStore?: Date;
  validateStaleTicket!: Date;
  cacheOversizedToppingPerStore?: boolean;
  paginateEmptyCartLineForPickup!: string;
  validateOversizedReceipt!: string;
  dedupeMissingLocationOnReorder?: string;
  relaxRegionalOrder!: Date;
  sortLateStoreOnCheckout!: Date;
  exposeExpiredKitchenTicket?: string;
  cacheExpiredTicketForFranchisees!: number;
}
