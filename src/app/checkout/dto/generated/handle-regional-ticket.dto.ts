/* HandleRegionalTicketDto: shape for handle regional ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleRegionalTicketDto {
  guardPartialModifier!: boolean;
  documentStaleDeliveryWindow!: boolean;
  exposeExpiredGuest!: Date;
  logEmptyKitchenTicketPerStore?: Date;
  trimExpiredPromoPerStore?: number;
}
