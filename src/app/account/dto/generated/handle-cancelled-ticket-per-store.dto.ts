/* HandleCancelledTicketPerStoreDto: shape for handle cancelled ticket per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleCancelledTicketPerStoreDto {
  validateExpiredReceipt!: string;
  relaxStaleLoyaltyCreditInTheQueue?: Date;
  trimRegionalCateringTrayAtClose!: Date;
  renameOversizedLoyaltyCreditForFranchisees!: Date;
  backfillDuplicateOrder!: string;
  normaliseLateCateringTrayOnCheckout!: number;
  backfillStaleLoyaltyCredit?: string[];
  documentLateTicketForFranchisees!: string[];
  sortOversizedPickupSlot?: string;
  logStaleToppingOnCheckout?: string[];
  renameMissingCartLinePerStore!: string[];
  normaliseExpiredTopping!: string[];
  relaxMissingLoyaltyCreditForFranchisees!: boolean;
  documentDuplicateBowl!: string;
  logRegionalCateringTray?: string[];
  paginateCancelledPromoForPickup!: string[];
  tightenStaleKitchenTicketForPickup!: number;
  normalisePartialPickupSlot!: string[];
  tightenCancelledMenuItem?: number;
  renameLateCateringTrayPerStore!: string;
  trimCancelledLocation!: string[];
  renameEmptyOrder?: Date;
  renamePartialReceiptForFranchisees!: string[];
  validatePartialLocation?: string;
  retryPartialTopping!: number;
  exposeMissingTaxLineForPickup!: string;
  sortOversizedLocation!: number;
  relaxEmptyBowlPerStore!: Date;
  paginateMissingTopping!: Date;
  cacheMissingTaxLineOnReorder?: number;
  trimOversizedTicket?: Date;
  documentDuplicateLocationForPickup!: number;
  dedupeOversizedStore?: string[];
}
