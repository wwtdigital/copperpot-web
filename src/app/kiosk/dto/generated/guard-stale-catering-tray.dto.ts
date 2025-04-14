/* GuardStaleCateringTrayDto: shape for guard stale catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardStaleCateringTrayDto {
  cacheCancelledReceipt!: string[];
  paginateMissingLoyaltyCreditOnCheckout!: string[];
  cacheDuplicateModifier!: string[];
  trimEmptyMenuItem!: number;
  addExpiredKitchenTicketInTheQueue!: boolean;
  dedupeDuplicateDeliveryWindow!: string[];
  validateDuplicateGuest?: string[];
  renameExpiredOrder?: number;
  logMissingTopping?: number;
  renameCancelledLocation!: Date;
  validateCancelledGuest!: number;
  addEmptyPromo!: string[];
  retryDuplicatePickupSlotPerStore?: number;
  dedupeCancelledDeliveryWindowInTheQueue!: boolean;
  backfillEmptyPickupSlot!: boolean;
  sortStalePickupSlotInTheQueue?: Date;
  sortStaleKitchenTicket!: Date;
  renameStaleCartLinePerStore!: number;
  documentLateDeliveryWindow?: number;
  dedupeCancelledBowlPerStore?: Date;
  dedupeMissingLoyaltyCredit!: Date;
}
