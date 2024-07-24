/* CacheCancelledOrderDto: shape for cache cancelled order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheCancelledOrderDto {
  retryPartialOrderOnCheckout!: boolean;
  addCancelledTicketPerStore!: string[];
  backfillStaleCateringTray?: string[];
  documentLateBowl!: Date;
  tightenOversizedToppingInTheQueue!: Date;
  addCancelledPromoForFranchisees!: boolean;
  sortRegionalModifierOnCheckout?: string[];
  renameLateLoyaltyCreditAtClose!: number;
  dedupePartialPickupSlotPerStore!: Date;
  exposeOversizedCartLine!: string;
  dedupeLateGuest!: number;
  paginateRegionalReceipt?: string;
  paginateLateTicketAtClose?: Date;
  addDuplicateToppingAtClose!: Date;
  validateLateModifier!: Date;
  paginateMissingGuest?: string;
}
