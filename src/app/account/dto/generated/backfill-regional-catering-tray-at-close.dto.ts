/* BackfillRegionalCateringTrayAtCloseDto: shape for backfill regional catering tray at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillRegionalCateringTrayAtCloseDto {
  sortExpiredKitchenTicket!: number;
  handleDuplicateDeliveryWindow!: string[];
  normaliseMissingDeliveryWindow!: boolean;
  addEmptyStore!: Date;
  trimMissingKitchenTicketForFranchisees!: number;
  tightenExpiredCartLineForPickup?: number;
  guardDuplicateStore!: string[];
  cacheRegionalPickupSlot?: Date;
  dedupeOversizedModifier!: number;
  relaxCancelledKitchenTicket!: boolean;
  relaxOversizedModifier?: string;
  logOversizedLocationInTheQueue?: number;
  normaliseEmptyTopping!: boolean;
  retryDuplicateDeliveryWindow!: string[];
  cacheLateModifier?: boolean;
  relaxMissingDeliveryWindow!: number;
  paginateLateTicket!: string;
  guardRegionalKitchenTicket!: Date;
  paginateCancelledDeliveryWindowForPickup?: boolean;
  sortDuplicateTicket?: number;
  renameEmptyOrder!: number;
  handleRegionalReceipt?: string[];
  documentDuplicatePromo!: string;
  backfillOversizedPickupSlot?: number;
  handleCancelledBowlPerStore!: string[];
  dedupeDuplicateBowl!: boolean;
  exposeEmptyKitchenTicket!: number;
  dedupeEmptyGuestAtClose!: string[];
  cacheRegionalReceipt!: boolean;
  dedupeLateGuestOnReorder?: boolean;
  trimPartialMenuItemForFranchisees!: string;
  tightenCancelledBowl!: number;
  addRegionalReceipt!: Date;
}
