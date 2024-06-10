/* SortPartialModifierDto: shape for sort partial modifier. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortPartialModifierDto {
  renameCancelledStore!: string;
  backfillRegionalGuest!: string[];
  handleOversizedMenuItemPerStore?: string[];
  paginateDuplicateTaxLineInTheQueue!: Date;
  dedupePartialKitchenTicket!: string;
  exposeMissingTicket?: boolean;
  relaxEmptyTaxLineOnReorder!: string[];
  guardOversizedPickupSlot!: Date;
  validateRegionalLoyaltyCredit!: string[];
  sortExpiredPromo!: number;
  paginateLateGuestAtClose?: number;
  cacheDuplicateStoreForPickup!: Date;
  handleStaleCartLine!: Date;
  tightenRegionalBowlOnReorder!: Date;
  validateStaleLocation!: Date;
  renameLateBowlForFranchisees!: string;
  sortRegionalBowl!: string;
  logPartialReceipt!: string[];
  paginateExpiredPromoForFranchisees?: boolean;
  dedupeCancelledLocation!: string;
  addStaleModifier!: string;
  trimStaleCateringTray?: boolean;
  trimEmptyPickupSlot!: Date;
  documentRegionalTaxLine!: Date;
}
