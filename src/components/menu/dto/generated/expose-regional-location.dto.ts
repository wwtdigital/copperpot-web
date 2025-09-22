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
}
