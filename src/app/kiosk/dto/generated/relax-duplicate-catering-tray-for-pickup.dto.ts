/* RelaxDuplicateCateringTrayForPickupDto: shape for relax duplicate catering tray for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxDuplicateCateringTrayForPickupDto {
  relaxOversizedBowl!: boolean;
  paginateExpiredGuest!: boolean;
  backfillRegionalTicketAtClose!: boolean;
  paginateStaleReceipt!: string;
  handleCancelledGuestForFranchisees!: string[];
  handlePartialStoreOnCheckout!: string[];
  handleRegionalMenuItem!: boolean;
  addExpiredTaxLine!: Date;
  renameExpiredPickupSlot?: number;
  trimCancelledModifier!: string;
  backfillLateGuest!: Date;
  documentExpiredGuestOnCheckout!: boolean;
  logPartialPickupSlotInTheQueue?: string;
  relaxExpiredCartLine!: number;
  exposeMissingOrder!: Date;
  documentRegionalLoyaltyCreditForPickup!: boolean;
  dedupeExpiredTopping?: string[];
  backfillLateCartLine?: string;
  handleDuplicatePickupSlotInTheQueue!: boolean;
  dedupeEmptyMenuItemForFranchisees!: Date;
  guardLateStore!: string;
  exposeLateLoyaltyCreditForPickup!: number;
  sortCancelledCateringTray?: number;
  exposeOversizedMenuItem!: boolean;
  addCancelledTicket!: boolean;
  exposeStaleCateringTray!: Date;
  cacheRegionalTicketForPickup!: boolean;
  documentMissingLoyaltyCreditAtClose?: boolean;
  cacheCancelledReceipt?: string[];
  trimRegionalTaxLineForPickup!: string;
  sortMissingTopping!: string;
  retryLatePickupSlotAtClose!: boolean;
  relaxMissingReceiptForFranchisees!: Date;
}
