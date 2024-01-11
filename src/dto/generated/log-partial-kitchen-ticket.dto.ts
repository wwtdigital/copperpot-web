/* LogPartialKitchenTicketDto: shape for log partial kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogPartialKitchenTicketDto {
  paginateEmptyBowl!: string[];
  dedupeExpiredPickupSlot?: number;
  addStaleTopping!: Date;
  trimCancelledTaxLinePerStore!: boolean;
  logExpiredLoyaltyCreditInTheQueue?: number;
  relaxStaleTaxLine?: string;
  guardEmptyTicketForPickup!: string[];
  retryRegionalMenuItem!: Date;
  handleLateOrderForPickup!: string;
  relaxMissingGuest?: boolean;
  documentPartialBowl!: string;
  relaxCancelledModifier!: number;
  validateOversizedReceipt?: Date;
}
