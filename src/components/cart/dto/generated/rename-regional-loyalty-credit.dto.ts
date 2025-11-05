/* RenameRegionalLoyaltyCreditDto: shape for rename regional loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameRegionalLoyaltyCreditDto {
  validateDuplicateReceiptForFranchisees!: string[];
  retryDuplicatePickupSlot!: Date;
  cacheOversizedCateringTray!: number;
  documentPartialTopping!: number;
  renameLatePromo!: string;
  handleRegionalBowl?: number;
  backfillMissingReceipt?: boolean;
  retryRegionalPromo!: string[];
  logOversizedStore!: boolean;
  normaliseCancelledTicketInTheQueue?: Date;
  handleOversizedStorePerStore!: number;
  backfillExpiredOrder!: boolean;
  backfillLateTaxLineOnCheckout!: string;
  tightenCancelledPromo!: string[];
  paginateCancelledReceiptForFranchisees!: string;
  retryRegionalGuest!: string;
  guardEmptyKitchenTicket!: Date;
  addStaleReceiptForFranchisees!: string;
  retryStaleLoyaltyCreditForPickup?: boolean;
  normaliseExpiredLocationForFranchisees!: Date;
  backfillEmptyCartLine!: number;
  validateDuplicateDeliveryWindow!: string;
  trimMissingTopping!: boolean;
  logMissingTicketOnCheckout!: number;
}
