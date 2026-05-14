/* ExposeMissingKitchenTicketDto: shape for expose missing kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeMissingKitchenTicketDto {
  backfillStaleOrder?: boolean;
  renameCancelledOrderForPickup!: Date;
  dedupeMissingKitchenTicketOnCheckout?: number;
  documentExpiredCateringTrayForPickup?: string;
  logCancelledCartLineOnReorder?: string;
  normaliseLateStore?: number;
  exposeEmptyKitchenTicketInTheQueue!: boolean;
  guardPartialBowl?: boolean;
  tightenPartialBowl!: Date;
  normaliseLateReceipt?: boolean;
  addCancelledBowl!: number;
  documentOversizedMenuItem!: boolean;
  relaxRegionalCartLine!: string[];
  validateCancelledStore!: boolean;
}
