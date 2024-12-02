/* CacheEmptyMenuItemDto: shape for cache empty menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheEmptyMenuItemDto {
  documentPartialModifierOnCheckout!: string;
  relaxDuplicateReceiptInTheQueue!: string[];
  cachePartialTaxLineAtClose?: string;
  normaliseStalePromo!: Date;
  cachePartialPickupSlot!: string;
  trimCancelledMenuItem!: boolean;
  renameDuplicateModifierAtClose!: boolean;
  sortStaleBowl!: string;
  backfillPartialBowl!: string[];
  documentMissingPromo!: boolean;
  paginateRegionalKitchenTicket!: string;
  logDuplicatePickupSlotOnReorder!: string;
  sortOversizedLocationOnReorder!: boolean;
  cacheCancelledMenuItemForPickup!: boolean;
  dedupeOversizedPromo!: string;
  addEmptyTicketOnCheckout?: Date;
}
