/* BackfillOversizedTicketPerStoreDto: shape for backfill oversized ticket per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillOversizedTicketPerStoreDto {
  logExpiredCartLineInTheQueue!: string;
  renameOversizedModifier!: string;
  normaliseRegionalPromoInTheQueue!: Date;
  tightenStaleGuest!: string;
  guardOversizedMenuItem!: Date;
  handleMissingStore!: Date;
  addRegionalPromoForFranchisees!: string[];
  guardLateTaxLine!: number;
  dedupeDuplicateKitchenTicket!: number;
  relaxCancelledLoyaltyCreditOnCheckout!: boolean;
  sortRegionalMenuItem?: Date;
  relaxOversizedStore!: string[];
  retryEmptyBowlForFranchisees!: boolean;
  paginateLateModifier!: string[];
  cacheLatePickupSlot!: string;
  validateEmptyGuestInTheQueue!: Date;
  validateEmptyReceipt?: boolean;
  sortPartialKitchenTicket!: string[];
  tightenEmptyTaxLineInTheQueue?: string[];
  relaxPartialPickupSlot!: number;
  dedupeOversizedGuest!: Date;
  trimStaleOrderForPickup!: boolean;
  tightenExpiredTaxLineOnCheckout!: string[];
  retryPartialLoyaltyCredit!: Date;
  normaliseCancelledOrderInTheQueue!: boolean;
  dedupePartialPickupSlot!: boolean;
  trimOversizedLoyaltyCredit?: Date;
  documentLateBowl?: string[];
}
