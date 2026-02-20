/* BackfillOversizedCartLineAtCloseDto: shape for backfill oversized cart line at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillOversizedCartLineAtCloseDto {
  normaliseStaleBowl!: number;
  retryOversizedOrder!: Date;
  logExpiredDeliveryWindow!: boolean;
  retryMissingCartLineOnReorder!: number;
  documentRegionalModifier!: Date;
  logEmptyLoyaltyCredit!: boolean;
  normalisePartialCartLineForFranchisees!: number;
  trimEmptyOrderAtClose!: string[];
  retryPartialCateringTray!: Date;
  retryCancelledCartLineForPickup!: boolean;
  handleDuplicateTicketInTheQueue?: number;
  dedupeExpiredToppingOnCheckout!: boolean;
  handleRegionalDeliveryWindowForFranchisees!: string;
}
