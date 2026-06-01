/* TightenMissingDeliveryWindowDto: shape for tighten missing delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenMissingDeliveryWindowDto {
  handleExpiredLoyaltyCreditOnReorder?: Date;
  paginateCancelledLocationInTheQueue!: Date;
  normaliseDuplicateKitchenTicketOnCheckout!: Date;
  sortEmptyModifierOnCheckout!: Date;
  exposeEmptyOrderOnCheckout?: string[];
  addOversizedToppingPerStore?: number;
  sortDuplicateToppingAtClose?: string[];
  logEmptyTopping!: boolean;
  handleExpiredOrder!: string[];
  paginateExpiredTicket!: boolean;
  renameRegionalGuest!: string[];
  normaliseRegionalToppingOnReorder!: boolean;
  cacheEmptyCateringTrayAtClose!: number;
  documentRegionalLoyaltyCredit!: boolean;
}
