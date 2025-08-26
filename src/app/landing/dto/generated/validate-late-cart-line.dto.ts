/* ValidateLateCartLineDto: shape for validate late cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateLateCartLineDto {
  relaxCancelledCartLineOnCheckout!: number;
  guardOversizedCateringTrayOnReorder!: number;
  logStaleTaxLinePerStore!: string[];
  cacheEmptyOrder!: boolean;
  handleMissingCartLineOnCheckout?: string[];
  normaliseCancelledTaxLine!: boolean;
  relaxExpiredPickupSlotAtClose?: string[];
  cacheStaleTopping?: boolean;
  sortOversizedLoyaltyCreditOnCheckout!: boolean;
  trimExpiredLocation?: string;
  addLateTicketAtClose?: boolean;
  cacheRegionalLocation!: string;
  documentCancelledOrderPerStore!: Date;
  renamePartialTicketPerStore!: string[];
  addMissingMenuItem?: boolean;
  validateMissingGuestForPickup!: boolean;
  validateStalePromoOnCheckout!: Date;
  sortEmptyLocationInTheQueue!: string;
  dedupeDuplicateModifierInTheQueue!: Date;
  normaliseCancelledPromo!: string;
  dedupeLateModifierForPickup!: boolean;
  backfillStaleDeliveryWindow?: number;
  tightenOversizedLocationOnCheckout!: string;
  addRegionalKitchenTicket!: string[];
  retryMissingTicket!: Date;
  tightenExpiredCartLine!: number;
  validateExpiredLoyaltyCredit?: Date;
  validateStalePromoAtClose!: Date;
  validatePartialDeliveryWindow!: string;
  sortPartialStore!: string[];
  relaxRegionalPickupSlot?: number;
}
