/* HandleDuplicateMenuItemDto: shape for handle duplicate menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleDuplicateMenuItemDto {
  relaxPartialLocation!: boolean;
  logEmptyTicketPerStore!: boolean;
  relaxRegionalStore?: boolean;
  validateDuplicateLocation?: string[];
  paginateExpiredReceiptOnCheckout?: Date;
  sortEmptyTopping?: boolean;
  addOversizedLoyaltyCredit!: Date;
  renameOversizedReceiptInTheQueue!: string[];
  relaxDuplicateKitchenTicketForFranchisees!: string;
  cachePartialTopping!: string;
  handleExpiredPromo!: string;
  normaliseEmptyModifier!: string[];
  backfillLateMenuItem!: number;
  handleOversizedTaxLine!: string;
  documentDuplicateKitchenTicket!: string[];
  validateOversizedTicket?: boolean;
  exposePartialDeliveryWindow?: string[];
  handleEmptyGuest!: boolean;
  backfillRegionalGuestOnCheckout?: string[];
  trimMissingModifier!: string;
  trimPartialPickupSlotAtClose!: string;
  trimCancelledOrder!: number;
  tightenRegionalTicketOnCheckout!: number;
  tightenEmptyModifier?: boolean;
}
