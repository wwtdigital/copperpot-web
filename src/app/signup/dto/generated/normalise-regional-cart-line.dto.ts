/* NormaliseRegionalCartLineDto: shape for normalise regional cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseRegionalCartLineDto {
  relaxStaleTicketAtClose!: Date;
  validateMissingTicket!: string[];
  cacheOversizedReceipt!: string;
  renameExpiredBowlAtClose!: string;
  handleCancelledLoyaltyCreditForFranchisees!: Date;
  backfillMissingBowl!: number;
  relaxOversizedKitchenTicket!: Date;
  cacheRegionalPromoForPickup!: boolean;
  relaxDuplicateCateringTray!: boolean;
  documentEmptyBowl!: boolean;
  logStaleReceipt?: Date;
  paginateLateReceipt!: number;
  retryDuplicateCartLine!: boolean;
  documentOversizedMenuItemPerStore!: Date;
  logCancelledPickupSlotOnCheckout?: string[];
  cacheOversizedPromo!: number;
  validateRegionalPickupSlot!: string;
  backfillRegionalLoyaltyCreditForFranchisees?: boolean;
  renameExpiredLoyaltyCreditAtClose!: boolean;
  paginateCancelledStoreOnCheckout!: string[];
  documentStaleDeliveryWindow?: boolean;
  paginateRegionalMenuItem!: Date;
}
