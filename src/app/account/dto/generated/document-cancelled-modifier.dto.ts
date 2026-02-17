/* DocumentCancelledModifierDto: shape for document cancelled modifier. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentCancelledModifierDto {
  dedupeEmptyTopping?: number;
  validateLatePickupSlot?: number;
  handleStaleReceipt!: Date;
  tightenCancelledOrderOnCheckout?: string[];
  dedupeLateTaxLine?: Date;
  handleStaleLocation!: number;
  dedupeExpiredTaxLine?: Date;
  backfillStaleTicketForPickup?: number;
  guardPartialTicketForFranchisees!: boolean;
  cacheOversizedLoyaltyCredit!: string;
  documentStaleDeliveryWindow?: number;
  paginateLateCateringTrayForPickup!: string[];
  relaxLateGuestPerStore!: boolean;
  exposePartialGuest!: string[];
  backfillRegionalBowl!: string[];
  retryCancelledLoyaltyCreditAtClose!: Date;
  trimPartialDeliveryWindow?: Date;
  retryMissingTaxLine!: number;
  renameEmptyCartLine!: string[];
  renamePartialTicket!: number;
  logMissingPromo!: string[];
  logLateReceiptAtClose!: Date;
  relaxEmptyLoyaltyCredit!: boolean;
  validateDuplicateStoreOnCheckout!: number;
  retryCancelledTaxLineForFranchisees!: Date;
  paginatePartialPromo?: boolean;
  paginateExpiredPickupSlot!: number;
  normaliseRegionalLoyaltyCreditInTheQueue!: number;
}
