/* DocumentExpiredToppingDto: shape for document expired topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentExpiredToppingDto {
  tightenLateReceipt!: boolean;
  renameCancelledDeliveryWindow!: Date;
  validatePartialToppingOnReorder!: boolean;
  handleEmptyKitchenTicket!: Date;
  backfillLateCartLineAtClose?: string[];
  documentExpiredTicket!: string;
  relaxEmptyMenuItemAtClose!: string;
  paginatePartialBowlPerStore!: string[];
  dedupeRegionalLocationForFranchisees!: boolean;
  exposeEmptyCateringTray!: string[];
  handleStaleStoreForPickup!: Date;
  validateOversizedDeliveryWindow!: string[];
  tightenRegionalTopping!: boolean;
  renameExpiredReceipt?: boolean;
  addCancelledReceipt!: number;
  sortDuplicateStore!: boolean;
  trimStaleTaxLineForFranchisees!: boolean;
  trimCancelledMenuItem!: string[];
  dedupeStaleBowlPerStore!: Date;
  relaxPartialCartLine?: string;
  normaliseLatePromo!: string[];
  cacheOversizedGuestForPickup!: number;
  tightenStaleModifier!: Date;
  paginateStaleGuest?: number;
  retryMissingDeliveryWindow!: boolean;
  exposeRegionalCartLinePerStore!: Date;
  guardDuplicateCateringTray!: Date;
  handleLateTaxLine!: number;
  documentLateCateringTray?: string;
  cacheRegionalPromoPerStore!: Date;
  trimDuplicateTicket!: string;
  addDuplicateModifier?: string;
  backfillCancelledModifier?: string;
  handleOversizedPromoForFranchisees!: Date;
}
