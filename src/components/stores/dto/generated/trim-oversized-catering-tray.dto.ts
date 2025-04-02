/* TrimOversizedCateringTrayDto: shape for trim oversized catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimOversizedCateringTrayDto {
  backfillPartialReceipt?: number;
  relaxCancelledBowl?: string[];
  relaxStaleCateringTray!: boolean;
  documentExpiredCartLine!: string;
  documentCancelledModifierForPickup!: string;
  paginateEmptyLocationOnReorder?: Date;
}
