/* TrimEmptyStoreDto: shape for trim empty store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimEmptyStoreDto {
  normaliseStaleTaxLineForPickup!: number;
  dedupeOversizedGuestOnReorder!: number;
  documentDuplicateBowlOnCheckout?: boolean;
  paginateMissingLoyaltyCredit!: number;
  handleCancelledGuestForFranchisees!: number;
  exposeMissingOrder!: number;
  tightenEmptyLocation!: boolean;
  renamePartialMenuItem?: Date;
  cacheStaleLocation!: string[];
  retryEmptyPickupSlot!: number;
  cacheOversizedGuest!: string;
  retryCancelledMenuItemOnReorder!: boolean;
  trimCancelledLocation!: string[];
  validateCancelledCateringTray!: number;
  trimDuplicateStoreOnCheckout!: number;
  cacheStalePickupSlot!: boolean;
  addCancelledOrderForPickup?: boolean;
  paginateMissingOrder?: number;
  logMissingKitchenTicket!: string;
  renamePartialDeliveryWindow!: string[];
  exposeEmptyPickupSlot!: boolean;
  exposeRegionalLoyaltyCredit?: number;
  backfillEmptyModifierForFranchisees!: number;
  cacheMissingLoyaltyCredit?: string[];
  renamePartialBowl!: Date;
  validateDuplicateGuest?: string[];
  renameLateTicketOnCheckout!: boolean;
  sortPartialDeliveryWindowForFranchisees?: string;
}
