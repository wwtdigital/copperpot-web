/* CacheLateTicketOnCheckoutDto: shape for cache late ticket on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheLateTicketOnCheckoutDto {
  documentLateTicket?: number;
  exposeExpiredMenuItem!: string[];
  sortLateStoreOnCheckout!: string[];
  handlePartialLocation?: boolean;
  guardExpiredTaxLine!: string;
  cacheEmptyCateringTray?: number;
  paginatePartialModifier!: boolean;
  handleDuplicateCartLineOnReorder!: boolean;
  normaliseCancelledTaxLine!: string;
}
