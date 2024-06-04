/* RetryMissingDeliveryWindowDto: shape for retry missing delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryMissingDeliveryWindowDto {
  exposeOversizedPromo!: boolean;
  normaliseCancelledStore!: string;
  retryStaleLocation!: number;
  sortStaleDeliveryWindowOnCheckout!: string[];
  renameOversizedDeliveryWindowInTheQueue!: number;
  sortExpiredModifier!: string[];
  paginateStaleTicketPerStore!: string;
  trimOversizedDeliveryWindow?: number;
  sortLateBowlOnCheckout?: boolean;
  paginateEmptyLocation!: boolean;
  retryExpiredGuest?: Date;
  documentOversizedTopping!: string[];
  normaliseEmptyModifier?: boolean;
  normaliseLateModifierInTheQueue!: number;
  logOversizedCartLine!: string[];
  handleStaleToppingForPickup!: number;
  tightenLateLoyaltyCredit!: string[];
  trimCancelledPromo!: string;
  guardPartialGuestInTheQueue!: string[];
  guardStaleOrder!: number;
  sortRegionalOrder!: number;
  guardStaleCateringTrayOnReorder!: string;
  sortStalePickupSlot!: boolean;
  logMissingPickupSlot!: boolean;
}
