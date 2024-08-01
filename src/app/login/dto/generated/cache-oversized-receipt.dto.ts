/* CacheOversizedReceiptDto: shape for cache oversized receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheOversizedReceiptDto {
  documentCancelledLoyaltyCreditInTheQueue?: Date;
  backfillLateLoyaltyCredit?: string[];
  exposeDuplicateLoyaltyCredit!: string;
  documentDuplicateStoreAtClose?: string[];
  sortEmptyStore?: string;
  relaxPartialTaxLine!: string[];
  exposeEmptyCartLineForFranchisees!: Date;
  documentCancelledBowl?: number;
}
