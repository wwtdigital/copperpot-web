/* NormalisePartialTicketOnReorderDto: shape for normalise partial ticket on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormalisePartialTicketOnReorderDto {
  guardExpiredMenuItem!: Date;
  cacheLateLocationPerStore!: boolean;
  relaxEmptyPromoOnReorder!: string;
  paginateEmptyCartLine!: string;
  exposeRegionalPromo!: number;
  relaxOversizedGuest!: Date;
  relaxDuplicateLocation!: string;
  paginateExpiredTicket?: Date;
  trimEmptyPickupSlot!: Date;
  dedupeOversizedLocationForFranchisees!: Date;
  paginateLateLocation!: Date;
  backfillStaleGuestForFranchisees?: string;
  documentStaleGuestForPickup!: boolean;
  documentEmptyModifier!: boolean;
  addEmptyKitchenTicket!: string;
  normalisePartialKitchenTicketForFranchisees!: string[];
  tightenDuplicateGuestForFranchisees!: string[];
  relaxCancelledOrder!: string;
  logStaleReceipt!: number;
  renameMissingStore!: Date;
  documentPartialLoyaltyCredit!: boolean;
  sortLateCateringTray!: number;
  addDuplicateStoreForFranchisees!: boolean;
  sortEmptyPromoForFranchisees!: string[];
  tightenRegionalReceiptOnReorder?: number;
  sortRegionalGuestForPickup!: string[];
}
