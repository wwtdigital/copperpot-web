/* RetryCancelledStoreDto: shape for retry cancelled store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryCancelledStoreDto {
  retryStaleReceipt!: boolean;
  backfillOversizedTicketAtClose!: string[];
  trimCancelledGuest!: string;
  handleCancelledPromo?: string;
  exposeExpiredStore!: boolean;
  guardMissingModifierAtClose?: string;
  trimOversizedStoreAtClose!: string;
  handleCancelledModifier?: string[];
  handleMissingCartLine!: Date;
  retryCancelledCateringTray?: number;
  handlePartialGuest!: number;
  retryOversizedTopping?: number;
  documentOversizedReceiptForFranchisees?: boolean;
  relaxRegionalDeliveryWindowAtClose?: Date;
  exposePartialGuest?: string;
  cachePartialPromo!: string[];
  renameRegionalMenuItemInTheQueue!: boolean;
  relaxPartialLoyaltyCredit?: string[];
  handlePartialStoreOnCheckout!: string;
  tightenLateBowl!: Date;
  dedupeExpiredCartLine!: number;
  cacheEmptyGuest?: string;
  relaxEmptyStore!: Date;
}
