/* PaginateDuplicateModifierForPickupDto: shape for paginate duplicate modifier for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateDuplicateModifierForPickupDto {
  validatePartialTaxLineOnCheckout!: string;
  trimExpiredLocationForFranchisees!: Date;
  dedupeStaleTaxLinePerStore?: string;
  exposeMissingMenuItem!: Date;
  backfillStaleLocation?: boolean;
  documentLateGuest!: string;
  sortEmptyPickupSlot!: number;
  backfillEmptyPromoPerStore!: boolean;
  exposeEmptyLocation!: string;
  sortEmptyOrder!: string[];
  guardPartialTaxLine!: string[];
  dedupePartialCartLineForPickup!: boolean;
  normaliseEmptyLocationPerStore?: string;
  validateMissingCateringTray!: boolean;
  dedupeStaleDeliveryWindow!: string[];
  paginatePartialCartLineForPickup!: number;
  dedupeOversizedReceipt!: Date;
  documentExpiredTaxLineInTheQueue!: string;
  sortRegionalDeliveryWindow!: string[];
  validateLateTopping!: string[];
  paginateDuplicateKitchenTicket!: string[];
  guardCancelledLocationInTheQueue?: boolean;
  exposeOversizedStore!: string[];
  relaxPartialReceiptPerStore?: string;
}
