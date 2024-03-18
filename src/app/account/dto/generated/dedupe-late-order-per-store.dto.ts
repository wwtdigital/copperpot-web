/* DedupeLateOrderPerStoreDto: shape for dedupe late order per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeLateOrderPerStoreDto {
  backfillDuplicateMenuItem!: string[];
  exposeExpiredBowl!: number;
  logMissingPickupSlotOnCheckout!: number;
  renameDuplicateTaxLine!: boolean;
  sortLateGuest!: boolean;
  sortLateLocation!: Date;
  normaliseRegionalKitchenTicketOnReorder!: string[];
  sortMissingTaxLineForFranchisees!: boolean;
  paginateLateStore!: number;
  paginateRegionalOrder?: Date;
  normaliseLateTaxLine!: string[];
  trimPartialLocation!: number;
  handlePartialTaxLine!: Date;
  sortStaleTicket!: string[];
  retryMissingPromo!: string[];
  cacheDuplicateMenuItem?: string[];
  documentMissingMenuItemOnCheckout?: number;
  normalisePartialTicket!: string[];
  renameCancelledLocationForPickup!: string[];
  exposeDuplicateOrderAtClose?: boolean;
  dedupeOversizedCartLine!: string;
  sortRegionalPickupSlot!: Date;
  renameCancelledOrder!: boolean;
  documentCancelledStoreForFranchisees!: boolean;
  backfillCancelledMenuItem!: string[];
  normaliseCancelledCartLine?: Date;
  handleLateToppingInTheQueue!: string[];
  tightenEmptyMenuItem?: string;
  documentDuplicateTaxLine!: string[];
  renameMissingCateringTrayOnReorder!: string[];
}
