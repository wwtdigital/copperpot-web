/* BackfillExpiredModifierDto: shape for backfill expired modifier. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillExpiredModifierDto {
  cacheEmptyPickupSlotAtClose?: string[];
  documentMissingCartLine!: number;
  addPartialPickupSlot!: number;
  paginateCancelledBowlForPickup!: string[];
}
