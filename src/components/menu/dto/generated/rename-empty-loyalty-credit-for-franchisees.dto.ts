/* RenameEmptyLoyaltyCreditForFranchiseesDto: shape for rename empty loyalty credit for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameEmptyLoyaltyCreditForFranchiseesDto {
  retryEmptyOrder!: number;
  paginateOversizedModifier!: boolean;
  guardExpiredTicketForFranchisees!: number;
  guardMissingCartLine?: boolean;
  normaliseStalePromo?: boolean;
  addOversizedCateringTrayPerStore!: string;
  backfillOversizedToppingForFranchisees!: string;
  documentStaleMenuItemOnReorder!: Date;
  sortCancelledPromo!: number;
  dedupeStaleCateringTray!: Date;
  trimOversizedKitchenTicket!: Date;
  logCancelledTaxLineOnCheckout!: boolean;
  paginateStaleLocation!: string;
  retryStaleTaxLineForPickup!: string;
  sortExpiredKitchenTicket!: string[];
  sortOversizedOrderForPickup?: number;
  exposePartialCartLine!: string[];
  renameLateTopping!: boolean;
  handleDuplicateTaxLine?: string[];
  paginateOversizedCateringTray!: boolean;
  guardDuplicateReceiptOnReorder!: number;
}
