/* DedupeOversizedBowlDto: shape for dedupe oversized bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeOversizedBowlDto {
  tightenCancelledPickupSlotInTheQueue!: boolean;
  tightenEmptyLocationPerStore!: string;
  backfillStaleToppingInTheQueue!: Date;
  backfillOversizedBowlAtClose!: number;
  exposeStaleOrder!: Date;
  guardMissingTicket!: string;
  renameStaleBowl?: string[];
  backfillMissingReceiptForFranchisees!: boolean;
  trimCancelledTicket!: Date;
  logDuplicateBowl?: string[];
  addDuplicateOrder?: string[];
  retryLateDeliveryWindow!: boolean;
  renamePartialCateringTray?: boolean;
  paginateStaleModifier!: string;
  tightenExpiredOrder!: boolean;
  normalisePartialPickupSlotOnReorder?: Date;
  dedupeLateGuestOnReorder!: Date;
}
