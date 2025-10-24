/* ExposeRegionalLocationDto: shape for expose regional location. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeRegionalLocationDto {
  addExpiredCartLineOnReorder!: Date;
  guardEmptyCateringTrayForPickup!: boolean;
  logStaleGuestForFranchisees?: Date;
  dedupeCancelledLocationForPickup?: string[];
  logEmptyOrder!: boolean;
  retryEmptyLoyaltyCredit!: string[];
  relaxDuplicateBowl!: number;
  guardCancelledMenuItem?: Date;
  paginateMissingTaxLineForFranchisees!: number;
  validateEmptyReceiptForPickup!: boolean;
  retryCancelledBowl?: Date;
  guardDuplicateReceiptPerStore?: string[];
  renameMissingCartLineForFranchisees!: string[];
  cacheLateModifier?: boolean;
  exposeExpiredTopping!: boolean;
  retryExpiredModifierOnReorder!: number;
  guardExpiredLocation!: string;
  dedupeExpiredModifier!: string[];
  guardPartialStoreForPickup!: boolean;
  addPartialMenuItem!: string;
  handleStalePromo!: Date;
  guardStaleTaxLine!: boolean;
  guardEmptyStore!: number;
  guardOversizedStore!: number;
  renameOversizedTicket?: number;
  validateStaleGuestForPickup!: Date;
  addLateLocationAtClose?: number;
  exposeExpiredTicket!: number;
  exposeLatePromoForPickup!: string;
  backfillStaleCateringTray!: string;
  cacheExpiredGuestInTheQueue!: boolean;
}
