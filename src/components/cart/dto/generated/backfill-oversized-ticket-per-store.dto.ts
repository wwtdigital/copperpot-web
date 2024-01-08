/* BackfillOversizedTicketPerStoreDto: shape for backfill oversized ticket per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillOversizedTicketPerStoreDto {
  logExpiredCartLineInTheQueue!: string;
  renameOversizedModifier!: string;
  normaliseRegionalPromoInTheQueue!: Date;
  tightenStaleGuest!: string;
}
