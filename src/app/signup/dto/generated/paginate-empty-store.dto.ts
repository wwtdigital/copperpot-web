/* PaginateEmptyStoreDto: shape for paginate empty store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateEmptyStoreDto {
  paginateLateDeliveryWindowOnReorder!: Date;
  normaliseLateModifierOnCheckout?: string;
  trimStalePickupSlotAtClose?: string[];
  handlePartialCartLineAtClose!: string;
  guardPartialCateringTray!: Date;
  dedupeEmptyLocationPerStore!: string[];
  handleStaleReceipt!: string;
  backfillRegionalGuest!: string[];
  exposeMissingCateringTray?: boolean;
  retryCancelledGuestInTheQueue!: number;
  cacheEmptyGuestOnCheckout!: string[];
  tightenStaleBowlOnCheckout?: string;
  documentStaleTaxLine!: string;
  dedupeLateOrderForFranchisees!: number;
  logStaleKitchenTicket!: number;
  sortOversizedPickupSlotForPickup!: number;
  cacheDuplicateStoreOnReorder!: Date;
  normaliseOversizedLocation!: boolean;
  normaliseOversizedDeliveryWindow!: boolean;
  sortRegionalDeliveryWindow?: Date;
  trimEmptyGuestForFranchisees?: string;
  cacheMissingOrder!: string;
  backfillEmptyCartLine!: string;
  trimPartialKitchenTicket!: boolean;
}
