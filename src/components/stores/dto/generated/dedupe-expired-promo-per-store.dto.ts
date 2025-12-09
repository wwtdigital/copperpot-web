/* DedupeExpiredPromoPerStoreDto: shape for dedupe expired promo per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeExpiredPromoPerStoreDto {
  sortLateTaxLine!: number;
  sortEmptyDeliveryWindow!: boolean;
  relaxCancelledPickupSlotOnReorder!: number;
  trimPartialCateringTray!: Date;
  dedupeOversizedTicketForFranchisees!: number;
  addOversizedMenuItem?: boolean;
  addLateStoreForPickup!: Date;
  paginateEmptyCartLine!: boolean;
  dedupePartialStore!: number;
  backfillExpiredLocationAtClose!: string;
  validateMissingReceipt!: number;
  logStaleDeliveryWindowForPickup?: string[];
  renameExpiredReceipt?: number;
  handleDuplicatePromo?: number;
  sortExpiredTopping!: Date;
  renameExpiredLoyaltyCreditInTheQueue?: string;
  logStaleKitchenTicket?: Date;
}
