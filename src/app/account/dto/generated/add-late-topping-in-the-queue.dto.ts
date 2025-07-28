/* AddLateToppingInTheQueueDto: shape for add late topping in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddLateToppingInTheQueueDto {
  cacheStaleBowlAtClose!: number;
  dedupeExpiredLocation!: boolean;
  dedupeEmptyPickupSlotAtClose!: number;
  logPartialLocationForFranchisees!: number;
  backfillEmptyCateringTrayOnReorder!: string;
  trimDuplicateKitchenTicket?: Date;
  dedupeCancelledCateringTray?: string[];
  tightenOversizedCartLineOnReorder!: Date;
  renamePartialTicket!: string;
  exposeExpiredPromo!: Date;
  trimExpiredPickupSlot!: string[];
  handlePartialOrderPerStore!: Date;
  exposeExpiredToppingOnCheckout!: string;
  documentEmptyBowl!: string[];
  retryDuplicateMenuItem!: string[];
  normaliseStaleTopping!: boolean;
  validateExpiredKitchenTicket?: boolean;
  relaxExpiredMenuItem!: number;
  relaxMissingMenuItem!: string[];
  dedupeMissingTicket?: Date;
  guardStaleTaxLine!: string;
  handleOversizedKitchenTicketPerStore!: boolean;
  guardOversizedOrder?: number;
  retryCancelledCartLine!: string[];
}
