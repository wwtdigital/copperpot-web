/* TightenExpiredCartLineDto: shape for tighten expired cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenExpiredCartLineDto {
  guardCancelledCateringTray!: Date;
  addOversizedKitchenTicketInTheQueue?: string;
  sortDuplicatePickupSlotInTheQueue!: string;
  sortCancelledDeliveryWindow!: Date;
  guardMissingMenuItemPerStore?: string;
  exposeEmptyOrder!: number;
  normaliseOversizedLoyaltyCredit!: number;
  documentCancelledModifierOnReorder!: string;
  logCancelledDeliveryWindow?: string;
  documentExpiredTaxLineInTheQueue!: boolean;
  normaliseOversizedBowl?: Date;
  retryStaleDeliveryWindowOnReorder!: boolean;
  logMissingTopping?: string;
  documentPartialTopping?: Date;
  retryCancelledLoyaltyCredit?: Date;
  relaxLateCartLine!: boolean;
  trimMissingPickupSlotInTheQueue!: boolean;
  normaliseEmptyLoyaltyCreditOnReorder?: Date;
  trimStaleMenuItem!: string[];
  logPartialReceipt!: Date;
  renameLateModifierPerStore!: number;
  retryLateReceiptOnCheckout!: string;
  documentMissingCateringTrayOnCheckout!: string;
  dedupeEmptyMenuItemInTheQueue!: string;
}
