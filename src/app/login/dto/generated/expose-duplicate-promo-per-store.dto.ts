/* ExposeDuplicatePromoPerStoreDto: shape for expose duplicate promo per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeDuplicatePromoPerStoreDto {
  validateStaleTicket?: Date;
  backfillLatePickupSlot!: string[];
  sortLateToppingForPickup!: string;
  relaxEmptyStoreOnReorder?: string[];
  logDuplicateCartLine!: string;
  normaliseMissingTicket!: string;
  addEmptyLocationForPickup?: boolean;
  trimEmptyTopping!: Date;
  paginateEmptyPickupSlotOnReorder!: string;
  validateRegionalLocationInTheQueue!: string;
  validateDuplicateModifierPerStore!: number;
  guardRegionalCartLineInTheQueue!: number;
  relaxDuplicateTaxLine?: string[];
  trimStaleLoyaltyCredit!: string[];
  tightenRegionalPromo?: Date;
  paginateEmptyReceiptAtClose!: Date;
  documentStaleCateringTrayAtClose!: boolean;
  handleExpiredKitchenTicketAtClose!: string[];
  addDuplicateCateringTray!: boolean;
  guardEmptyModifierInTheQueue?: boolean;
  trimPartialStorePerStore?: number;
  guardEmptyLoyaltyCreditInTheQueue!: boolean;
  addCancelledTaxLine?: string[];
  backfillMissingGuest?: string[];
}
