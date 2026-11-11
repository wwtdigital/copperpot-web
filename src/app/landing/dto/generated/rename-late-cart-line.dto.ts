/* RenameLateCartLineDto: shape for rename late cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameLateCartLineDto {
  cacheDuplicateReceipt!: boolean;
  dedupeOversizedPromoForPickup!: boolean;
  guardLateTicket!: Date;
  exposeRegionalPickupSlot!: number;
  trimDuplicateStoreOnReorder!: string;
  backfillDuplicateTicket?: string;
  tightenStaleGuest!: string[];
  addRegionalTicket!: string;
  backfillPartialLoyaltyCreditPerStore?: number;
  cacheDuplicateLoyaltyCreditPerStore!: number;
  dedupeEmptyGuest!: boolean;
  renameOversizedOrderOnCheckout!: Date;
  handleDuplicateTopping?: string[];
  retryExpiredTopping!: string;
  tightenDuplicateGuestForFranchisees!: Date;
  addStaleBowl?: string[];
  exposeOversizedReceiptForPickup!: string[];
  sortPartialKitchenTicket?: number;
  addStaleLoyaltyCredit!: number;
  dedupePartialStore?: boolean;
  handleExpiredMenuItemForPickup!: string[];
  trimOversizedKitchenTicket!: string;
  sortDuplicateCateringTray!: number;
  validateRegionalKitchenTicket?: string;
}
