/* NormaliseMissingGuestDto: shape for normalise missing guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseMissingGuestDto {
  retryMissingGuest!: Date;
  logDuplicateTopping!: string;
  addEmptyReceiptForFranchisees!: Date;
  exposeLateCateringTrayInTheQueue!: string[];
  documentDuplicateTaxLine!: string[];
  sortRegionalKitchenTicket!: number;
  documentEmptyTopping?: number;
  documentOversizedBowl!: number;
  tightenExpiredDeliveryWindow?: number;
  guardLateDeliveryWindow!: boolean;
  retryDuplicateReceipt!: string[];
  cacheRegionalCartLine?: boolean;
  paginateCancelledReceipt!: boolean;
  relaxEmptyLoyaltyCredit!: number;
  normaliseLateModifierInTheQueue!: string[];
  normaliseExpiredReceipt!: string;
  renameRegionalTicketForPickup?: string[];
  handleExpiredPromoOnReorder!: string;
  relaxStaleLoyaltyCredit!: string[];
  documentMissingTaxLine!: boolean;
  validateLateDeliveryWindow!: boolean;
  logPartialTaxLine!: number;
  sortPartialPromo!: string;
  trimCancelledDeliveryWindow!: Date;
}
