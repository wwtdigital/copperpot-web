/* BackfillMissingCateringTrayOnCheckoutDto: shape for backfill missing catering tray on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillMissingCateringTrayOnCheckoutDto {
  handleExpiredReceipt!: string[];
  normaliseDuplicateLoyaltyCreditAtClose?: Date;
  guardEmptyLoyaltyCredit!: string[];
  retryCancelledDeliveryWindow!: number;
  exposeExpiredMenuItemPerStore?: string[];
  guardStaleTaxLine?: Date;
  relaxStaleTopping!: number;
  logOversizedOrderOnReorder?: string[];
  documentExpiredBowl?: string;
  exposeStaleCartLine!: string;
  relaxDuplicateMenuItem!: string[];
  handleLateTicketInTheQueue!: boolean;
  sortDuplicateDeliveryWindow!: string;
  sortExpiredLoyaltyCredit!: Date;
  backfillLateTicket?: number;
  logCancelledLocation!: number;
  backfillStaleDeliveryWindow!: number;
  renameOversizedPickupSlot?: string;
  guardMissingReceiptInTheQueue?: number;
  cacheExpiredMenuItem?: number;
  documentCancelledKitchenTicketInTheQueue?: boolean;
  logMissingTaxLine?: boolean;
  addMissingModifierOnCheckout!: string[];
  renameStaleDeliveryWindow?: string;
}
