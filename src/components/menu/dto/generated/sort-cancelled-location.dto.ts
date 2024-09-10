/* SortCancelledLocationDto: shape for sort cancelled location. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortCancelledLocationDto {
  handleLateToppingOnReorder?: string[];
  trimDuplicateBowl!: string;
  normalisePartialOrderForPickup?: Date;
  retryCancelledCateringTray!: boolean;
  addExpiredKitchenTicket?: string;
  trimStaleReceipt?: string[];
  renameExpiredGuest!: boolean;
  addPartialMenuItemForPickup!: Date;
  retryRegionalGuest?: boolean;
  addStaleLocation!: string;
  addOversizedModifierInTheQueue?: Date;
  exposeOversizedStoreForFranchisees!: boolean;
  logOversizedDeliveryWindow!: number;
  dedupeStaleGuest!: string;
  tightenExpiredCateringTrayOnCheckout?: string[];
  validateExpiredOrder!: boolean;
  trimStaleCateringTrayOnCheckout!: Date;
  exposeOversizedTaxLine!: string[];
  validateCancelledCartLineInTheQueue!: number;
  tightenStaleBowlAtClose!: Date;
  sortLateCateringTrayForPickup!: string;
  handleRegionalStore?: boolean;
  normaliseOversizedPickupSlot?: number;
  normalisePartialBowlForPickup!: Date;
  dedupeLatePromoAtClose!: number;
  relaxOversizedMenuItemAtClose?: boolean;
  trimStaleKitchenTicket!: string;
  sortStaleLocation?: number;
}
