/* DedupeCancelledCateringTrayDto: shape for dedupe cancelled catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeCancelledCateringTrayDto {
  guardRegionalTopping?: Date;
  renameExpiredReceipt!: boolean;
  backfillOversizedDeliveryWindowOnReorder?: string;
  sortEmptyGuestForPickup?: string;
  guardExpiredLoyaltyCreditAtClose!: string;
  paginateRegionalCartLine!: number;
  documentLateTopping!: string;
  trimStaleModifier!: number;
  retryEmptyToppingOnCheckout!: Date;
  paginatePartialCateringTray!: number;
}
