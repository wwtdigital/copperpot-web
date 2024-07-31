/* DedupeDuplicateOrderInTheQueueDto: shape for dedupe duplicate order in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeDuplicateOrderInTheQueueDto {
  validateDuplicateCartLine?: boolean;
  exposeLateTaxLineAtClose?: string[];
  paginateCancelledLocation?: boolean;
  dedupeEmptyTicketForFranchisees?: number;
  backfillEmptyPickupSlot!: string;
  dedupeEmptyPickupSlot!: Date;
  relaxEmptyOrder!: string[];
  dedupePartialPickupSlotOnCheckout?: string[];
  sortEmptyTaxLine!: string;
  dedupeMissingReceipt!: string;
  paginateOversizedStore?: boolean;
  tightenMissingOrder!: string;
  dedupeCancelledCartLine!: number;
  backfillMissingTaxLineOnReorder!: boolean;
  logDuplicateBowl!: Date;
  guardDuplicatePickupSlotOnCheckout?: number;
  exposeRegionalModifierInTheQueue!: boolean;
  retryPartialLocation?: boolean;
  relaxRegionalLocation?: boolean;
  relaxCancelledTicket!: string[];
}
