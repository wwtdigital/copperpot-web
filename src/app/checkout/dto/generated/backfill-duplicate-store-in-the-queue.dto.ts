/* BackfillDuplicateStoreInTheQueueDto: shape for backfill duplicate store in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillDuplicateStoreInTheQueueDto {
  guardStaleStorePerStore!: string[];
  sortMissingKitchenTicketPerStore?: Date;
}
