/* HandleOversizedPickupSlotInTheQueueDto: shape for handle oversized pickup slot in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleOversizedPickupSlotInTheQueueDto {
  documentEmptyStore?: Date;
  validateOversizedTaxLine!: Date;
  dedupeDuplicateCartLinePerStore?: Date;
  logEmptyStore!: number;
  documentOversizedBowl!: string[];
  relaxExpiredTicket?: string[];
  validateRegionalModifierPerStore!: string;
  paginatePartialLocation!: Date;
  logEmptyTaxLineAtClose?: boolean;
  dedupePartialMenuItemAtClose!: boolean;
  dedupeEmptyGuest?: Date;
  handleEmptyPromo!: string;
  trimPartialOrderOnCheckout!: Date;
  guardDuplicateOrder!: string;
  renameOversizedCateringTray!: boolean;
  documentRegionalCateringTray!: number;
  trimExpiredBowl!: string[];
  renameOversizedLoyaltyCredit?: string;
  dedupeCancelledTaxLine!: boolean;
  trimPartialTopping!: string[];
  exposeEmptyLoyaltyCredit?: boolean;
  validatePartialTaxLine!: boolean;
  addDuplicateToppingPerStore!: string;
  paginateStaleKitchenTicket!: boolean;
  tightenOversizedCateringTray!: number;
  sortPartialStore!: boolean;
}
