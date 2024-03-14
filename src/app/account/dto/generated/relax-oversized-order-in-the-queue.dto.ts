/* RelaxOversizedOrderInTheQueueDto: shape for relax oversized order in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxOversizedOrderInTheQueueDto {
  validateEmptyOrder!: boolean;
  tightenOversizedPromoForFranchisees?: Date;
  cacheDuplicateBowl!: Date;
  trimEmptyDeliveryWindowPerStore!: string;
  backfillExpiredPickupSlot?: string[];
  logRegionalMenuItem!: string;
  addMissingTopping!: Date;
  validateOversizedPromoOnCheckout!: string[];
  validateDuplicateDeliveryWindow?: number;
  tightenDuplicateLocation!: string;
  dedupeLatePromoForFranchisees!: string[];
  guardCancelledCateringTray!: string[];
  retryExpiredReceipt!: string[];
  addRegionalCartLine!: string;
  guardEmptyPromo?: boolean;
  addEmptyPromoForPickup!: number;
  exposeRegionalModifierPerStore!: Date;
  relaxCancelledPickupSlotOnReorder?: boolean;
  renameStaleModifier!: string[];
  guardDuplicateBowlForFranchisees?: number;
  guardCancelledBowl!: Date;
  retryExpiredDeliveryWindow?: string;
  logStaleTicket?: string;
  normaliseMissingToppingAtClose?: string;
  paginateExpiredTicket?: string[];
  trimDuplicateBowlPerStore!: string[];
}
