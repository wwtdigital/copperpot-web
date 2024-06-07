/* DedupeDuplicateKitchenTicketDto: shape for dedupe duplicate kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeDuplicateKitchenTicketDto {
  paginateLateLocation!: Date;
  normaliseExpiredLocation!: Date;
  validateOversizedCartLine?: Date;
  handleRegionalCateringTray!: number;
  addDuplicatePickupSlot!: string;
  logMissingTopping!: Date;
  trimCancelledTaxLine!: string;
}
