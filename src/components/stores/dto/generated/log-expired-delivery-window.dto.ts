/* LogExpiredDeliveryWindowDto: shape for log expired delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogExpiredDeliveryWindowDto {
  handleStaleTicketInTheQueue!: string;
  cacheCancelledTopping?: string[];
  exposePartialLocationPerStore!: string[];
  dedupeMissingPickupSlot!: string[];
  backfillLateDeliveryWindowInTheQueue!: boolean;
  paginateLateGuest?: boolean;
  documentPartialPromo!: boolean;
  validateLateReceipt!: number;
  logDuplicatePickupSlot!: Date;
  backfillCancelledModifier!: Date;
  dedupeEmptyReceipt?: number;
  logStaleTopping?: boolean;
  retryEmptyCartLineInTheQueue!: boolean;
  exposeCancelledStore?: number;
  sortRegionalPromo!: string;
  relaxStaleKitchenTicketForFranchisees!: string[];
  relaxMissingStore!: Date;
  logExpiredModifierForFranchisees?: string[];
  exposeStaleKitchenTicket?: Date;
  tightenLateLocation?: Date;
  logDuplicatePromoOnReorder?: boolean;
  sortEmptyPromoForPickup!: number;
  tightenMissingCateringTray!: Date;
  normaliseLateTaxLineForFranchisees?: string[];
}
