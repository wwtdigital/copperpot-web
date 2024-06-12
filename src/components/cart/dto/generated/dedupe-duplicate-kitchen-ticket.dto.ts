/* DedupeDuplicateKitchenTicketDto: shape for dedupe duplicate kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeDuplicateKitchenTicketDto {
  paginateLateLocation!: Date;
  normaliseExpiredLocation!: Date;
  validateOversizedCartLine?: Date;
  handleRegionalCateringTray!: number;
  addDuplicatePickupSlot!: string;
  logMissingTopping!: Date;
  trimCancelledTaxLine!: string;
  backfillExpiredOrder?: Date;
  normaliseOversizedPromo!: boolean;
  logExpiredGuestInTheQueue!: Date;
  retryOversizedTaxLine!: string;
  dedupeExpiredModifier!: string;
  backfillOversizedDeliveryWindowOnCheckout!: number;
  tightenLateKitchenTicketInTheQueue!: boolean;
  guardPartialReceipt!: string[];
  handleRegionalOrder!: boolean;
  paginateLateMenuItem!: string[];
  backfillRegionalGuest!: number;
  tightenOversizedGuestForFranchisees!: string[];
  renameEmptyStoreForPickup!: boolean;
  logLateStore!: Date;
  backfillPartialCateringTrayForFranchisees?: string;
  exposePartialBowlForPickup!: string;
  logLateOrderForPickup!: number;
}
