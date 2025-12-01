/* NormaliseMissingOrderDto: shape for normalise missing order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseMissingOrderDto {
  cacheOversizedTicketForFranchisees!: string;
  exposePartialMenuItem!: number;
  addMissingReceipt?: number;
  trimStaleReceiptOnCheckout!: Date;
  relaxOversizedCartLineForPickup!: number;
  exposeStaleCateringTray?: string;
  dedupeMissingGuest?: number;
  guardLateKitchenTicket!: number;
  trimRegionalCartLine?: string[];
  cacheRegionalCartLineForFranchisees!: string[];
  exposePartialModifier?: string[];
  renameStaleCateringTray!: string;
  sortCancelledTicketOnReorder!: string[];
  backfillOversizedBowlOnCheckout!: string[];
  paginateDuplicateCateringTray?: Date;
  trimLateOrderInTheQueue?: number;
  relaxPartialLocation!: number;
  trimPartialStoreInTheQueue!: boolean;
  handleMissingKitchenTicket!: number;
}
