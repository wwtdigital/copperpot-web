/* RelaxRegionalGuestOnCheckoutDto: shape for relax regional guest on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxRegionalGuestOnCheckoutDto {
  cacheExpiredKitchenTicket!: boolean;
  exposeEmptyReceipt!: boolean;
  retryDuplicatePickupSlotOnCheckout!: Date;
  addCancelledPromo!: number;
  renamePartialLocation!: boolean;
  relaxPartialGuest!: string[];
  documentPartialOrderOnCheckout!: string[];
  backfillRegionalMenuItemInTheQueue?: boolean;
  documentPartialCateringTrayInTheQueue!: string[];
  relaxDuplicateCateringTrayForPickup?: boolean;
  paginateStaleGuestForPickup!: boolean;
  renameDuplicatePromo?: number;
  retryPartialToppingPerStore!: string;
  dedupeCancelledMenuItemOnReorder?: boolean;
  addRegionalBowl?: string[];
  relaxStaleTopping?: string[];
  paginateLateTicket?: string[];
  sortExpiredCartLineInTheQueue!: Date;
  handleMissingReceiptForFranchisees!: string;
  cacheDuplicateCartLine!: string;
  relaxEmptyStorePerStore!: boolean;
  documentRegionalReceipt!: boolean;
  addRegionalCateringTrayInTheQueue?: boolean;
  retryDuplicateKitchenTicket!: string[];
}
