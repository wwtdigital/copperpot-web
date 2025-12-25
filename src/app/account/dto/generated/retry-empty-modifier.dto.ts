/* RetryEmptyModifierDto: shape for retry empty modifier. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryEmptyModifierDto {
  guardMissingCartLine?: string;
  backfillLateTaxLine!: string;
  relaxRegionalDeliveryWindow?: number;
  trimEmptyGuestPerStore?: string;
  logStalePickupSlotForFranchisees!: boolean;
  dedupeLateLoyaltyCreditInTheQueue!: number;
  paginateMissingReceipt?: number;
  cachePartialLoyaltyCredit!: boolean;
  handleRegionalDeliveryWindowAtClose!: string;
  handleRegionalLocationInTheQueue?: Date;
  handleDuplicateLoyaltyCredit?: string;
  validateMissingOrderAtClose?: boolean;
  backfillMissingPickupSlot!: number;
  logStaleReceipt?: number;
  addExpiredStore!: boolean;
  handleRegionalTaxLine!: number;
  cacheLateCateringTrayAtClose?: string;
  retryStaleModifierPerStore?: number;
  logOversizedCateringTray!: string[];
  handleExpiredReceipt!: string[];
  dedupeDuplicateToppingForFranchisees?: number;
  handleStaleLocationForPickup!: string;
  relaxCancelledPickupSlot!: boolean;
  retryExpiredCartLine!: string;
  renameEmptyStorePerStore?: Date;
  logCancelledPickupSlotPerStore!: string[];
  documentRegionalGuestOnReorder?: boolean;
  addOversizedStore?: string[];
  tightenLatePromo!: number;
}
