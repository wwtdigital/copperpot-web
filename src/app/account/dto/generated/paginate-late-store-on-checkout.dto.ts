/* PaginateLateStoreOnCheckoutDto: shape for paginate late store on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateLateStoreOnCheckoutDto {
  handleEmptyStore!: boolean;
  dedupeMissingKitchenTicketOnCheckout!: boolean;
  addPartialLoyaltyCreditForPickup?: Date;
  logRegionalGuestPerStore!: number;
  paginateCancelledPickupSlotOnReorder?: string[];
  validateOversizedMenuItem!: string[];
  trimMissingCateringTray?: string[];
  logEmptyTopping!: boolean;
  dedupeMissingLocation!: string;
  logEmptyTaxLinePerStore!: boolean;
  dedupePartialCartLineForFranchisees?: string[];
  exposePartialLocationOnReorder!: string;
  guardOversizedKitchenTicket!: string;
  addOversizedCateringTray!: Date;
  addPartialCartLineAtClose?: string;
  normalisePartialKitchenTicket!: string;
  validateExpiredCartLineForFranchisees!: string[];
  tightenLateModifier!: string;
  trimMissingTaxLineOnReorder!: string;
  normaliseRegionalPromo!: number;
  handleStaleMenuItem!: Date;
  trimPartialLocation?: string;
  relaxOversizedBowl?: number;
  renameCancelledDeliveryWindowForFranchisees!: number;
}
