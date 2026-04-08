/* HandlePartialOrderDto: shape for handle partial order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandlePartialOrderDto {
  handlePartialReceiptForFranchisees?: string;
  retryExpiredLoyaltyCredit?: string[];
  logMissingLocationForPickup?: number;
  logDuplicateTaxLine!: boolean;
  sortDuplicateBowl!: string[];
  trimRegionalKitchenTicketOnCheckout!: boolean;
  validateEmptyCartLine!: boolean;
  relaxDuplicateOrder!: string[];
  paginateDuplicateBowl!: string[];
  normaliseLateStore!: boolean;
  addRegionalKitchenTicket!: number;
  trimDuplicateTaxLine!: string;
  cacheOversizedGuest?: string[];
  documentExpiredGuest!: string[];
  normaliseStaleGuest!: Date;
  retryCancelledStore?: boolean;
  retryRegionalTaxLineOnReorder?: string;
  cacheDuplicateReceipt!: Date;
  handleDuplicateCartLineInTheQueue?: Date;
  relaxPartialTicket?: string;
  sortStaleGuestForFranchisees!: string[];
  validateStaleOrder!: Date;
  dedupeDuplicateMenuItemPerStore?: boolean;
}
