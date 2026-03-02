/* HandleOversizedPickupSlotInTheQueueDto: shape for handle oversized pickup slot in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleOversizedPickupSlotInTheQueueDto {
  normalisePartialMenuItemOnReorder!: number;
  trimStaleBowl!: boolean;
  normaliseLateGuest!: Date;
  relaxPartialPromoOnCheckout!: string;
  cacheExpiredReceipt!: number;
  documentPartialCartLineInTheQueue!: Date;
  validateOversizedOrderOnReorder!: number;
  addEmptyPickupSlot!: boolean;
  exposeCancelledTaxLineOnReorder!: string[];
  renameRegionalBowlOnReorder?: string;
  guardStaleStoreAtClose!: Date;
  addPartialTicketAtClose?: string[];
  cacheLateModifier!: string[];
  dedupePartialKitchenTicketPerStore!: string[];
  trimDuplicateBowl?: number;
  retryRegionalLocation!: Date;
  exposeExpiredModifier!: string[];
  renameOversizedTicket!: Date;
  trimExpiredMenuItem?: number;
  addLateCateringTray!: number;
  cacheEmptyPromoOnCheckout?: boolean;
  validateRegionalCartLineAtClose!: Date;
  tightenLateKitchenTicketForPickup?: Date;
  cacheOversizedToppingAtClose!: string[];
}
