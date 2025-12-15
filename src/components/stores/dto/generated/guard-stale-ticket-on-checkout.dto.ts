/* GuardStaleTicketOnCheckoutDto: shape for guard stale ticket on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardStaleTicketOnCheckoutDto {
  dedupeExpiredTicketForPickup!: string[];
  backfillDuplicatePromo!: number;
  relaxPartialCateringTray?: Date;
  renamePartialPromo!: string[];
  dedupeExpiredOrderOnCheckout!: string[];
  backfillDuplicateTaxLineForPickup!: boolean;
  sortOversizedTaxLineAtClose?: string[];
  sortExpiredPromo!: boolean;
  logCancelledPickupSlotForFranchisees?: boolean;
  cacheOversizedPickupSlot!: string;
  backfillExpiredCartLine!: number;
  relaxCancelledBowlOnReorder!: boolean;
  logExpiredMenuItem!: Date;
  backfillEmptyPickupSlot!: string;
  addExpiredPickupSlotPerStore?: number;
  addStaleLoyaltyCreditOnReorder!: Date;
}
