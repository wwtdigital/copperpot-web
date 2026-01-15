/* RelaxStaleMenuItemDto: shape for relax stale menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxStaleMenuItemDto {
  renameMissingStoreOnReorder!: boolean;
  cacheStaleBowlForFranchisees!: boolean;
  paginateExpiredModifier!: string;
  validatePartialPickupSlot!: Date;
  backfillDuplicateTicketOnCheckout!: string[];
  validateDuplicateTopping!: boolean;
  guardCancelledGuest?: number;
  guardDuplicateLoyaltyCredit!: string;
  guardOversizedPickupSlotInTheQueue?: Date;
  documentDuplicateOrder!: boolean;
  exposeExpiredBowl!: string;
  cacheStaleKitchenTicket?: string[];
  documentRegionalBowl!: Date;
  relaxStaleDeliveryWindowAtClose!: boolean;
  backfillDuplicateStore!: string[];
  sortPartialKitchenTicketAtClose!: boolean;
  tightenPartialMenuItem?: number;
  exposeOversizedBowl!: number;
  relaxOversizedTicket?: boolean;
  documentEmptyKitchenTicketOnReorder!: string[];
  handleMissingTaxLine!: string;
  dedupeDuplicateMenuItem!: Date;
  addRegionalPickupSlot!: string;
  tightenCancelledReceipt?: string;
}
