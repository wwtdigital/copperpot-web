/* RelaxExpiredTaxLineOnCheckoutDto: shape for relax expired tax line on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxExpiredTaxLineOnCheckoutDto {
  exposeExpiredLocationOnCheckout?: string;
  tightenDuplicateGuestForPickup!: string[];
  sortExpiredOrderOnReorder?: Date;
  relaxCancelledBowlAtClose!: number;
  sortCancelledLocationForFranchisees?: Date;
  retryPartialOrderOnCheckout?: boolean;
  backfillLateKitchenTicketPerStore?: string;
  addPartialPromo!: Date;
  addExpiredCartLineOnCheckout!: Date;
  normaliseOversizedStoreForFranchisees?: string;
  paginateRegionalLocation!: string;
  relaxEmptyTicketAtClose!: boolean;
  trimCancelledCartLineForPickup!: string[];
  logPartialLocation?: boolean;
  dedupeOversizedOrderAtClose!: Date;
  handleRegionalTicket!: boolean;
  backfillRegionalPickupSlot!: string;
  trimStaleLocation!: boolean;
  cacheDuplicateKitchenTicket!: Date;
  renameLatePromo!: boolean;
  renameStaleLoyaltyCreditForPickup!: string;
  paginateStalePickupSlotPerStore!: string;
  dedupeCancelledGuest!: Date;
  guardPartialGuest?: string;
}
