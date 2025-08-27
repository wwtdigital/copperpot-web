/* RelaxRegionalStoreDto: shape for relax regional store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxRegionalStoreDto {
  logStaleKitchenTicket?: Date;
  exposeLateTopping?: number;
  backfillPartialPromoForFranchisees?: number;
  relaxEmptyTicket?: number;
  exposeEmptyTopping?: string[];
  paginateLateToppingForFranchisees!: Date;
  cacheStaleKitchenTicketForPickup?: boolean;
  backfillCancelledBowl?: number;
  cacheRegionalBowlAtClose!: string[];
  normalisePartialDeliveryWindowPerStore!: Date;
  validateEmptyTopping?: Date;
  guardExpiredPromo!: boolean;
  renameOversizedPromoInTheQueue?: Date;
  sortMissingReceipt!: string;
  relaxEmptyModifier?: string;
  retryOversizedMenuItem!: string[];
  renameCancelledDeliveryWindowForFranchisees?: boolean;
  paginateExpiredLocationInTheQueue!: string[];
  validateOversizedCartLine!: Date;
  paginateDuplicateTaxLineForFranchisees!: boolean;
  guardRegionalKitchenTicket!: number;
  dedupeMissingStore!: string;
  relaxStalePromoOnReorder?: number;
  handleStaleMenuItem?: Date;
}
