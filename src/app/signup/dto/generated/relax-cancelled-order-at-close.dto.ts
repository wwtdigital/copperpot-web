/* RelaxCancelledOrderAtCloseDto: shape for relax cancelled order at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxCancelledOrderAtCloseDto {
  sortRegionalCateringTray!: Date;
  tightenExpiredTopping!: Date;
  handleStaleStore!: Date;
  validateExpiredTopping!: Date;
  guardEmptyModifier!: string;
  tightenOversizedKitchenTicketPerStore!: boolean;
  normaliseStaleCartLinePerStore!: boolean;
  exposeEmptyLoyaltyCreditInTheQueue!: string[];
  validateExpiredPromo!: Date;
}
