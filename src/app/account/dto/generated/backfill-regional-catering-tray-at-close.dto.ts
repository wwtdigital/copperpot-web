/* BackfillRegionalCateringTrayAtCloseDto: shape for backfill regional catering tray at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillRegionalCateringTrayAtCloseDto {
  sortExpiredKitchenTicket!: number;
  handleDuplicateDeliveryWindow!: string[];
  normaliseMissingDeliveryWindow!: boolean;
  addEmptyStore!: Date;
  trimMissingKitchenTicketForFranchisees!: number;
  tightenExpiredCartLineForPickup?: number;
  guardDuplicateStore!: string[];
  cacheRegionalPickupSlot?: Date;
  dedupeOversizedModifier!: number;
}
