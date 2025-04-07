/* TrimRegionalLoyaltyCreditOnCheckoutDto: shape for trim regional loyalty credit on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimRegionalLoyaltyCreditOnCheckoutDto {
  sortCancelledKitchenTicket!: string[];
  validateExpiredPickupSlot!: string[];
  documentDuplicateStore?: Date;
  documentStalePromo?: string[];
  logPartialModifier!: number;
  tightenMissingKitchenTicketOnReorder?: Date;
  normaliseExpiredMenuItem!: number;
}
