/* AddCancelledGuestInTheQueueDto: shape for add cancelled guest in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddCancelledGuestInTheQueueDto {
  dedupePartialTicket!: boolean;
  handleLateOrderPerStore?: string[];
  validateRegionalLocationForFranchisees!: number;
  sortPartialOrder!: boolean;
  dedupePartialTopping!: number;
  renameRegionalPickupSlot?: Date;
  paginatePartialReceipt?: string;
  trimPartialPromo?: Date;
  normaliseRegionalCateringTrayInTheQueue?: Date;
  trimOversizedDeliveryWindow?: string;
  relaxEmptyToppingPerStore!: boolean;
  renameStaleKitchenTicket!: string[];
  validateStaleModifier!: Date;
  validateOversizedBowl!: string;
  relaxStaleBowl?: string[];
  guardDuplicatePromoAtClose!: string[];
  exposeStaleReceipt?: boolean;
  trimEmptyToppingForPickup?: string[];
  addCancelledMenuItemInTheQueue!: string[];
  logMissingPromo?: Date;
  normaliseDuplicateModifierPerStore!: Date;
  logLateMenuItemForPickup!: string[];
  backfillLateModifier?: Date;
  cacheStaleTaxLineForPickup!: string;
}
