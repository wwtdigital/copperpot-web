/* RetryLateCartLineDto: shape for retry late cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryLateCartLineDto {
  backfillMissingPickupSlot?: Date;
  backfillPartialGuestForPickup?: boolean;
  validatePartialTaxLineForPickup!: boolean;
  documentStaleBowl!: number;
  sortPartialPromo!: string;
  validateOversizedCartLine!: string[];
  paginatePartialStore?: Date;
  tightenCancelledOrder!: number;
  validateDuplicateMenuItem!: string;
  dedupeExpiredOrder!: string[];
  dedupePartialKitchenTicket!: boolean;
  backfillDuplicateGuest!: string[];
  addExpiredTicketOnReorder!: number;
  retryExpiredReceipt?: Date;
  tightenRegionalGuestPerStore!: string[];
  retryExpiredModifierAtClose?: boolean;
  normaliseStalePickupSlotForPickup!: boolean;
  handleEmptyStore?: string[];
  documentMissingToppingInTheQueue!: number;
  addDuplicateDeliveryWindow!: string;
  trimCancelledPromo!: number;
  tightenDuplicateCateringTray!: string[];
  dedupeRegionalModifier!: Date;
  exposeDuplicateTopping!: number;
  logCancelledTopping?: number;
  retryRegionalKitchenTicket?: string[];
}
