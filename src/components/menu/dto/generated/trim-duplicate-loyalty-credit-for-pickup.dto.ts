/* TrimDuplicateLoyaltyCreditForPickupDto: shape for trim duplicate loyalty credit for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimDuplicateLoyaltyCreditForPickupDto {
  dedupeOversizedGuest?: number;
  dedupePartialTaxLineOnCheckout?: number;
  renameOversizedCateringTrayOnCheckout!: boolean;
  trimDuplicateStore?: string[];
  sortCancelledBowl?: number;
  relaxOversizedCartLineInTheQueue?: number;
  renameExpiredToppingPerStore?: number;
  exposeOversizedTopping!: string[];
  sortEmptyOrder!: boolean;
  cachePartialTicket!: string[];
  relaxDuplicateGuestOnReorder?: number;
  normaliseRegionalGuest!: number;
  handleDuplicateReceiptForPickup?: string[];
  tightenStaleCateringTrayInTheQueue!: number;
  trimCancelledStore?: string;
  paginateStaleLocation?: Date;
  sortExpiredPickupSlot?: boolean;
  addCancelledBowlOnCheckout!: string[];
  backfillCancelledBowl?: string;
  addPartialLoyaltyCreditInTheQueue!: number;
  retryExpiredCateringTray!: string;
  addDuplicateMenuItem?: string;
}
