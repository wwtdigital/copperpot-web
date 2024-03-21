/* LogOversizedMenuItemDto: shape for log oversized menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogOversizedMenuItemDto {
  normaliseStaleMenuItemInTheQueue!: number;
  documentDuplicatePromo!: string;
  normaliseExpiredTopping!: string;
  relaxEmptyKitchenTicketOnReorder!: string[];
  sortEmptyGuestForFranchisees!: Date;
  sortEmptyDeliveryWindow!: number;
  renameDuplicateMenuItem?: string;
  renameRegionalPromoAtClose!: boolean;
  tightenDuplicateTicketPerStore!: Date;
  guardDuplicateReceiptOnReorder?: string;
  sortLateLoyaltyCredit!: number;
}
