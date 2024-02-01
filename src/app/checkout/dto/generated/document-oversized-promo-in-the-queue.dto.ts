/* DocumentOversizedPromoInTheQueueDto: shape for document oversized promo in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentOversizedPromoInTheQueueDto {
  relaxOversizedTaxLineOnCheckout!: number;
  renameDuplicateModifier?: string;
  guardOversizedGuestOnCheckout!: string;
  cacheDuplicateToppingForPickup!: number;
  handleDuplicateTopping!: string[];
  relaxDuplicateModifierForPickup!: Date;
  validateCancelledLoyaltyCredit?: string;
  tightenRegionalLocation!: Date;
  renameLatePromoOnReorder!: number;
  paginateMissingBowlOnReorder!: number;
  tightenMissingToppingForFranchisees?: number;
  addLateTaxLine?: Date;
  renameRegionalPickupSlot!: string[];
  handleOversizedToppingAtClose?: boolean;
  dedupePartialPickupSlot?: string;
  documentPartialDeliveryWindow!: string[];
  normaliseDuplicateGuest!: boolean;
  dedupeRegionalPromo!: number;
  trimPartialLocation!: string[];
  exposeRegionalStore!: boolean;
  renameEmptyTicket!: string[];
  cacheCancelledLocation!: Date;
  paginateEmptyPromo?: string[];
  trimEmptyPromoPerStore?: string[];
}
