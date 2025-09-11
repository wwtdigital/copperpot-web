/* ExposeDuplicateStoreDto: shape for expose duplicate store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeDuplicateStoreDto {
  documentRegionalPickupSlot?: string;
  relaxEmptyPromo!: string;
  retryExpiredTaxLineForPickup!: string[];
  handleDuplicateLocationOnCheckout?: string[];
  addDuplicateCateringTrayForFranchisees!: string[];
  paginateEmptyCartLine?: boolean;
  logMissingToppingOnCheckout!: boolean;
  validateLateReceipt!: Date;
  logExpiredLoyaltyCredit!: number;
  exposeLateModifier?: string[];
  retryLateLoyaltyCreditForFranchisees!: Date;
  renameEmptyLocationForPickup!: boolean;
}
