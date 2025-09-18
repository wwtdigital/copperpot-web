/* DocumentExpiredCateringTrayDto: shape for document expired catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentExpiredCateringTrayDto {
  backfillPartialModifier?: string[];
  addMissingMenuItem?: boolean;
  guardRegionalCartLine!: boolean;
  normaliseStalePromo!: string;
  paginatePartialKitchenTicketOnReorder!: Date;
  sortRegionalTicketForFranchisees?: string;
  sortRegionalPromoInTheQueue!: string[];
  dedupeEmptyCateringTrayInTheQueue!: number;
  cacheExpiredOrder?: string[];
  sortStaleDeliveryWindowForFranchisees?: string;
  handleMissingDeliveryWindow!: string;
  logExpiredReceipt!: string[];
  tightenLateModifier!: number;
  backfillEmptyOrder?: Date;
  exposeOversizedPromoOnCheckout!: boolean;
  logDuplicateGuest!: string[];
  normaliseExpiredReceipt?: string[];
  logDuplicateReceipt?: number;
  logExpiredGuestForPickup!: number;
  backfillStalePromo!: Date;
  validateMissingReceiptPerStore?: string;
  logCancelledCateringTray!: string[];
  exposePartialBowlOnReorder!: Date;
  trimOversizedStore!: string;
  validateStaleKitchenTicket!: string[];
}
