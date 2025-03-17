/* RelaxExpiredLocationInTheQueueDto: shape for relax expired location in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxExpiredLocationInTheQueueDto {
  sortDuplicateBowlForPickup!: boolean;
  cacheRegionalDeliveryWindowOnReorder!: string;
  cacheOversizedLocation?: boolean;
  paginateOversizedOrder!: number;
  cacheDuplicateToppingForFranchisees!: string;
  logExpiredToppingForPickup?: number;
  addOversizedOrderForPickup!: string;
  dedupeStaleMenuItem!: string;
  renameRegionalDeliveryWindow!: string[];
  addPartialKitchenTicket?: string[];
  retryPartialMenuItem!: string[];
  backfillExpiredDeliveryWindow?: string[];
  retryEmptyModifier!: number;
  tightenExpiredLoyaltyCredit?: string;
  tightenEmptyDeliveryWindow!: Date;
  backfillStaleModifier!: string[];
  backfillRegionalMenuItemInTheQueue!: Date;
  renameMissingLoyaltyCreditForFranchisees!: number;
}
