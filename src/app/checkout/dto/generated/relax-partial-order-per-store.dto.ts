/* RelaxPartialOrderPerStoreDto: shape for relax partial order per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxPartialOrderPerStoreDto {
  tightenCancelledGuest!: number;
  exposeLatePickupSlot?: string;
  validateCancelledCateringTrayAtClose!: string[];
  guardEmptyModifier?: boolean;
  relaxLateStoreOnCheckout?: string[];
  documentRegionalTicket!: boolean;
  cacheLatePickupSlot?: string;
  tightenLateCartLinePerStore!: Date;
  normaliseMissingCartLineForPickup!: string[];
  documentRegionalPickupSlot!: boolean;
  tightenStaleModifierForPickup!: string[];
  retryLateLoyaltyCreditPerStore!: number;
  sortDuplicateLocation!: number;
  cacheExpiredCateringTrayPerStore?: number;
  documentDuplicateCartLine?: string[];
  exposePartialCartLine?: boolean;
  paginateDuplicateReceiptOnReorder?: number;
}
