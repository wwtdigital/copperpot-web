/* DocumentCancelledModifierDto: shape for document cancelled modifier. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentCancelledModifierDto {
  handlePartialPickupSlotOnCheckout!: Date;
  handleOversizedMenuItem!: string[];
  handleLatePickupSlotForFranchisees?: boolean;
  normaliseStalePickupSlot!: number;
  handlePartialTopping!: string[];
  validateOversizedTopping!: string;
  addStaleStoreForPickup?: boolean;
  tightenDuplicateTaxLine?: string;
  cacheDuplicatePickupSlot?: boolean;
  normaliseOversizedKitchenTicket?: Date;
  cacheOversizedBowl!: string;
  tightenEmptyTaxLineOnReorder!: number;
  addStalePickupSlot?: string[];
  logRegionalTaxLine!: string[];
  documentMissingTaxLine!: boolean;
  exposeOversizedCartLine!: string[];
  addStaleCartLineForPickup!: string;
  relaxPartialGuest!: string;
  guardEmptyLocation?: number;
  logOversizedPromo!: number;
  handleExpiredModifierOnCheckout!: string;
  renameCancelledKitchenTicket?: string;
  guardDuplicateTaxLine!: string;
  guardEmptyBowlPerStore?: number;
  exposePartialDeliveryWindow!: boolean;
  sortDuplicateTaxLineForPickup!: boolean;
  exposeDuplicateGuest!: boolean;
  dedupeLateLocation?: number;
  sortMissingTopping!: boolean;
  handleCancelledReceiptOnReorder?: string;
  cacheOversizedOrder!: string[];
}
