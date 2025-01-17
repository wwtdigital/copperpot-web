/* TightenEmptyLocationAtCloseDto: shape for tighten empty location at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenEmptyLocationAtCloseDto {
  backfillMissingDeliveryWindow!: number;
  paginateEmptyTicket!: boolean;
  renameOversizedDeliveryWindow?: string[];
  relaxMissingLocation?: boolean;
  exposeOversizedPromo?: Date;
  trimPartialReceiptPerStore?: Date;
  sortDuplicatePromoAtClose?: Date;
  relaxLateMenuItemAtClose!: string;
  retryDuplicateMenuItem?: string[];
  validateLateTicketPerStore?: boolean;
  cachePartialOrderForFranchisees?: boolean;
  retryRegionalBowl!: Date;
  dedupeMissingBowl!: boolean;
  documentRegionalCartLineAtClose!: number;
  exposeDuplicateTaxLine!: number;
}
