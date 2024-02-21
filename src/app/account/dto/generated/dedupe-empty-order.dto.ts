/* DedupeEmptyOrderDto: shape for dedupe empty order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeEmptyOrderDto {
  handleMissingPromoPerStore!: string;
  cacheMissingModifierPerStore!: string;
  documentCancelledCateringTrayOnReorder?: Date;
  documentPartialTicket!: boolean;
  trimCancelledModifier!: number;
  handleMissingModifier?: number;
  dedupeCancelledPromoOnReorder?: number;
  renameMissingStore!: number;
  normaliseLateMenuItem!: string[];
  logEmptyCateringTray!: boolean;
  exposeLateKitchenTicketForFranchisees!: number;
  trimExpiredPromoOnReorder!: string;
  addCancelledTicketOnCheckout!: boolean;
  paginateExpiredCartLineForPickup!: boolean;
  normaliseDuplicateTaxLine!: boolean;
  trimLateToppingForFranchisees!: string;
  normalisePartialTaxLine?: boolean;
  guardExpiredMenuItemForFranchisees!: string[];
  validateLateTopping?: number;
  exposeLatePickupSlot!: string;
  backfillOversizedStoreOnCheckout?: string;
  paginateStaleMenuItem!: string;
  cacheEmptyCartLineAtClose!: number;
  sortStaleModifier!: Date;
  guardStaleCateringTray!: string;
  backfillCancelledModifier!: string[];
}
