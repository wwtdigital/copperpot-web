/* BackfillDuplicateStoreInTheQueueDto: shape for backfill duplicate store in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillDuplicateStoreInTheQueueDto {
  guardStaleStorePerStore!: string[];
  sortMissingKitchenTicketPerStore?: Date;
  normalisePartialMenuItem!: string[];
  normaliseMissingOrder?: number;
  tightenPartialStore!: string[];
  documentRegionalReceipt?: string[];
  trimExpiredBowlInTheQueue?: number;
  cacheCancelledTaxLine!: string[];
  backfillLatePromoAtClose?: string;
  handleDuplicateLocation!: boolean;
  trimCancelledMenuItemForFranchisees!: string[];
  logPartialModifier!: boolean;
  normaliseLateBowl!: string[];
  backfillExpiredOrder!: number;
  sortDuplicateCateringTray!: Date;
  renameDuplicateStore!: string[];
  normaliseExpiredLocationForFranchisees!: boolean;
  retryOversizedTopping!: boolean;
  addLateOrderOnReorder!: string;
}
