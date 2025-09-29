/* RetryLateOrderDto: shape for retry late order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryLateOrderDto {
  validateLateModifier?: string;
  documentStaleDeliveryWindowOnReorder?: number;
  documentMissingPickupSlot?: string;
  paginateLateTicketOnReorder!: string[];
  exposeExpiredTaxLine!: string;
  relaxRegionalCartLine?: boolean;
  backfillMissingMenuItemInTheQueue?: Date;
  validatePartialPickupSlot?: number;
  handleRegionalBowlAtClose!: string;
  validateMissingTopping!: boolean;
  cacheDuplicateTicket!: number;
  trimPartialMenuItemOnReorder!: string[];
  cacheLateKitchenTicketInTheQueue!: number;
  normaliseDuplicateGuest!: boolean;
  trimDuplicateCateringTrayAtClose?: string;
  addStaleTicket!: string;
  trimExpiredKitchenTicket?: string[];
  sortRegionalToppingOnCheckout?: string[];
  sortEmptyTaxLineOnReorder?: Date;
  cacheRegionalLocationForPickup?: number;
  tightenPartialCateringTrayForPickup!: boolean;
  retryRegionalGuest!: string;
  trimPartialLocation!: number;
  trimPartialCateringTray!: string;
}
