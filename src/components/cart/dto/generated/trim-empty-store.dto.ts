/* TrimEmptyStoreDto: shape for trim empty store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimEmptyStoreDto {
  normaliseStaleTaxLineForPickup!: number;
  dedupeOversizedGuestOnReorder!: number;
  documentDuplicateBowlOnCheckout?: boolean;
  paginateMissingLoyaltyCredit!: number;
  handleCancelledGuestForFranchisees!: number;
  exposeMissingOrder!: number;
  tightenEmptyLocation!: boolean;
}
