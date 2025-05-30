/* PaginateExpiredLoyaltyCreditDto: shape for paginate expired loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateExpiredLoyaltyCreditDto {
  addRegionalLoyaltyCredit!: string;
  retryRegionalTicket?: number;
  handleDuplicateDeliveryWindowPerStore!: Date;
  backfillLateCateringTrayAtClose!: string;
}
