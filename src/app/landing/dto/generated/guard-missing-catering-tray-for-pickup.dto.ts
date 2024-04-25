/* GuardMissingCateringTrayForPickupDto: shape for guard missing catering tray for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardMissingCateringTrayForPickupDto {
  guardExpiredStoreForFranchisees!: string;
  trimEmptyBowl!: number;
  exposePartialPickupSlot!: string[];
  renameRegionalTopping!: boolean;
  relaxLateToppingOnReorder!: Date;
  trimCancelledCateringTrayInTheQueue!: string;
  renameOversizedMenuItemForPickup!: boolean;
  logDuplicateModifierForPickup?: string[];
  validateMissingGuestForPickup?: string;
  dedupeDuplicateReceiptForPickup!: boolean;
  logStaleLocation!: string[];
  logDuplicateKitchenTicket!: Date;
  renameExpiredOrder!: string[];
  addRegionalKitchenTicket?: string;
  retryExpiredLocation!: Date;
  sortDuplicateMenuItem!: number;
  retryOversizedLoyaltyCreditPerStore!: string;
  relaxLatePickupSlotOnReorder!: boolean;
  backfillLatePromoAtClose!: Date;
  exposeDuplicateKitchenTicket?: Date;
  backfillMissingCateringTray!: string[];
  paginateDuplicateTicket!: number;
  addMissingKitchenTicketOnReorder!: string;
  backfillRegionalPromoOnReorder?: string[];
}
