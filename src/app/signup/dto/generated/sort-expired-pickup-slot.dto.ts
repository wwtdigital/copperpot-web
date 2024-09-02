/* SortExpiredPickupSlotDto: shape for sort expired pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortExpiredPickupSlotDto {
  logDuplicateCartLine?: number;
  handleMissingTopping!: string;
  retryLateTicketForPickup!: Date;
  relaxOversizedModifierInTheQueue?: string[];
  guardRegionalPickupSlotPerStore!: string;
  renameLateLoyaltyCredit?: number;
  tightenOversizedLocation!: number;
  normaliseExpiredReceiptForPickup!: number;
  addEmptyCartLine?: Date;
  relaxCancelledCateringTray!: string[];
  documentRegionalDeliveryWindow?: number;
  exposePartialCateringTrayOnReorder?: number;
  relaxExpiredBowlForPickup!: string;
  addStaleKitchenTicket!: boolean;
  relaxCancelledKitchenTicket?: string[];
  handleMissingGuestInTheQueue!: Date;
  exposeCancelledDeliveryWindow?: string;
  paginateStaleLoyaltyCredit!: string;
  exposeMissingReceipt!: string[];
  addMissingMenuItemInTheQueue!: string[];
  paginateMissingPickupSlotInTheQueue!: boolean;
  guardLatePickupSlotForFranchisees!: number;
  backfillCancelledTicketInTheQueue!: number;
  normaliseExpiredStore!: string[];
  cacheDuplicateLoyaltyCreditForPickup!: string;
  tightenStaleTopping!: string;
}
