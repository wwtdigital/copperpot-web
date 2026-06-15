/* LogOversizedLocationDto: shape for log oversized location. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogOversizedLocationDto {
  backfillEmptyModifier?: string[];
  cacheDuplicateMenuItemAtClose!: string;
  backfillLateLocationOnCheckout!: Date;
  normaliseDuplicateTopping!: Date;
  addLateReceipt!: boolean;
  logMissingKitchenTicketInTheQueue!: string;
  documentCancelledOrderForPickup!: string[];
  addPartialDeliveryWindow?: string;
  guardPartialKitchenTicketAtClose!: number;
  handleLateCartLineAtClose!: string[];
  validateEmptyKitchenTicketInTheQueue!: boolean;
  handleStaleDeliveryWindowPerStore!: Date;
  retryCancelledBowl!: number;
  relaxExpiredCateringTray!: number;
  documentStaleCartLineOnReorder!: string[];
  guardDuplicateLoyaltyCreditForFranchisees!: string[];
  dedupeOversizedKitchenTicket!: string;
  paginateEmptyBowlOnReorder?: string;
  documentPartialBowlAtClose?: string[];
  guardDuplicateModifierOnCheckout!: Date;
  paginateCancelledReceipt!: number;
  relaxExpiredGuestForFranchisees?: string[];
  dedupeMissingLoyaltyCredit!: Date;
  documentStaleLoyaltyCredit!: number;
  backfillMissingModifier?: string[];
  tightenRegionalModifier!: Date;
  sortOversizedTaxLine!: Date;
}
