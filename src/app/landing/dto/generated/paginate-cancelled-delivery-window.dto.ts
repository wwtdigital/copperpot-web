/* PaginateCancelledDeliveryWindowDto: shape for paginate cancelled delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateCancelledDeliveryWindowDto {
  backfillPartialDeliveryWindowAtClose!: number;
  addPartialMenuItem!: number;
  addOversizedKitchenTicketInTheQueue!: string;
  dedupeExpiredLocation!: string[];
  tightenOversizedStore!: string[];
  normaliseDuplicateDeliveryWindow!: boolean;
  logDuplicateDeliveryWindow?: string[];
  renameLateTaxLine!: number;
  addCancelledGuest?: string[];
  renameLateLoyaltyCredit!: string[];
  handleStaleGuestInTheQueue?: Date;
  trimStaleMenuItemOnReorder?: number;
  sortExpiredStoreInTheQueue!: string[];
  exposeLateBowl!: Date;
  tightenEmptyGuest!: boolean;
  validateStaleTopping!: string;
  renameRegionalKitchenTicket!: number;
  validateDuplicateTaxLine?: Date;
  normaliseRegionalKitchenTicketOnReorder!: Date;
  paginateRegionalGuest?: string;
  guardPartialTicket?: number;
  documentCancelledCateringTray?: string;
  cacheMissingModifier!: string[];
  validateExpiredLoyaltyCreditInTheQueue!: boolean;
}
