/* ExposeCancelledOrderDto: shape for expose cancelled order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeCancelledOrderDto {
  logDuplicateCateringTray!: string[];
  guardPartialTopping!: string[];
  exposeStaleStore?: boolean;
  trimStaleGuestAtClose!: string[];
  addExpiredKitchenTicket!: string;
  normaliseEmptyStoreOnCheckout!: boolean;
  dedupeStaleTaxLine?: boolean;
  paginateStalePromo?: string[];
  backfillPartialDeliveryWindow!: string[];
  sortCancelledPickupSlot?: string;
  dedupePartialStoreForFranchisees?: boolean;
  handleOversizedModifierInTheQueue!: string;
  tightenOversizedLocationAtClose!: string;
  backfillStaleTaxLine!: string;
  addRegionalCartLine?: string[];
  logExpiredCateringTray!: number;
  documentEmptyMenuItemPerStore!: Date;
  sortMissingModifier!: string;
  relaxEmptyPickupSlotForPickup?: number;
  paginateEmptyPromoForFranchisees?: Date;
  renameEmptyGuest!: string[];
  documentLatePickupSlot?: string[];
  sortStaleKitchenTicketForFranchisees?: string;
  tightenExpiredStorePerStore?: string;
}
