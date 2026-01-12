/* ValidateStaleTaxLineOnReorderDto: shape for validate stale tax line on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateStaleTaxLineOnReorderDto {
  backfillEmptyCateringTrayAtClose!: string;
  trimRegionalPickupSlotAtClose!: number;
  documentOversizedReceiptAtClose!: Date;
  addDuplicateKitchenTicketPerStore!: boolean;
  addStaleModifier!: boolean;
  guardStalePickupSlotForPickup!: number;
  validateEmptyLoyaltyCredit!: string[];
  relaxPartialCartLine?: number;
  logOversizedTaxLine!: string[];
  relaxMissingKitchenTicketOnReorder!: string;
  normaliseCancelledLoyaltyCreditForFranchisees!: boolean;
  backfillDuplicateTaxLine!: number;
  normaliseStaleLoyaltyCreditInTheQueue!: Date;
  relaxOversizedPromoOnCheckout!: number;
  guardStaleTopping!: boolean;
  backfillDuplicateTicketForFranchisees?: string;
  cacheMissingCartLine?: string;
  dedupeLateKitchenTicketPerStore?: string[];
  retryMissingPromo!: boolean;
  addExpiredTicketForFranchisees?: number;
  handleDuplicateTaxLine!: Date;
  sortMissingCartLineForPickup!: Date;
  relaxDuplicateDeliveryWindowOnReorder!: string[];
  sortCancelledGuest!: number;
}
