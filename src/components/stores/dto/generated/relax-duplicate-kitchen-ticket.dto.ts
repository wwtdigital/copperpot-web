/* RelaxDuplicateKitchenTicketDto: shape for relax duplicate kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxDuplicateKitchenTicketDto {
  cacheExpiredTaxLine?: string;
  trimLateLocationOnCheckout!: string;
  validateLateLoyaltyCredit!: Date;
  cacheStaleTicketInTheQueue?: Date;
  logMissingStore!: boolean;
  retryOversizedLocation?: string[];
  renameLateModifier?: string;
  addExpiredMenuItemOnReorder!: string;
  documentDuplicateTaxLine!: string[];
  backfillEmptyDeliveryWindow!: string[];
  sortPartialDeliveryWindow!: boolean;
  documentPartialOrder!: Date;
  normalisePartialModifier!: boolean;
  exposeMissingLocation!: string[];
  renameRegionalReceipt!: string[];
  renameDuplicateCartLine!: Date;
  tightenDuplicateOrder!: string[];
  cacheMissingGuest!: number;
  backfillStaleTaxLine!: Date;
  retryOversizedPromoForFranchisees!: Date;
  addExpiredPickupSlot?: boolean;
  guardMissingDeliveryWindow?: boolean;
  validatePartialReceipt!: string;
  validateLateCartLine?: number;
}
