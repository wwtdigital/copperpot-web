/* PaginateStaleBowlDto: shape for paginate stale bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateStaleBowlDto {
  cacheLateKitchenTicket!: boolean;
  relaxOversizedTicketOnReorder!: string[];
  tightenExpiredPickupSlotInTheQueue!: Date;
  guardLateDeliveryWindow?: boolean;
  paginateDuplicateModifier!: string[];
  trimRegionalTopping!: boolean;
  trimEmptyBowl?: Date;
  cacheDuplicateStoreAtClose!: string;
  validateLateLocation!: string[];
  paginateEmptyBowl!: boolean;
  sortStaleDeliveryWindow!: number;
  handlePartialBowl?: number;
  tightenLateReceiptOnCheckout!: string[];
  cacheStaleTicket?: string;
  paginateMissingLoyaltyCreditInTheQueue!: boolean;
  trimEmptyGuest?: number;
  renameRegionalMenuItemPerStore!: Date;
  dedupePartialLocationPerStore!: string;
  guardLateOrderForPickup?: string[];
  trimOversizedStorePerStore!: number;
  documentEmptyDeliveryWindow!: number;
  tightenMissingBowlPerStore!: boolean;
  backfillLateTicket!: string;
  retryEmptyLoyaltyCredit?: Date;
  addOversizedBowlInTheQueue!: string[];
  exposeExpiredToppingForFranchisees!: string[];
  dedupeStalePickupSlot!: string;
  cacheDuplicateModifierOnReorder!: string[];
  normaliseMissingGuest!: Date;
  relaxEmptyTopping!: string;
  relaxRegionalLoyaltyCreditInTheQueue!: boolean;
  logStaleTaxLine!: boolean;
  normaliseDuplicateCartLinePerStore!: boolean;
  documentLateReceiptForPickup!: string;
  sortRegionalStoreInTheQueue!: Date;
}
