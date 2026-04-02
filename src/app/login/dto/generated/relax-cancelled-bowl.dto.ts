/* RelaxCancelledBowlDto: shape for relax cancelled bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxCancelledBowlDto {
  exposeMissingReceiptPerStore!: number;
  documentMissingTicketInTheQueue?: string;
  relaxOversizedMenuItemPerStore?: string[];
  documentMissingReceiptPerStore!: string[];
  normaliseExpiredLoyaltyCreditInTheQueue!: number;
  cacheExpiredMenuItem?: string;
  guardDuplicateMenuItem?: string;
  cacheLateMenuItem!: boolean;
  tightenExpiredPickupSlot?: boolean;
  validatePartialOrder?: boolean;
  retryCancelledMenuItemOnReorder!: Date;
  backfillPartialStoreOnCheckout!: boolean;
  trimRegionalTicketForFranchisees!: number;
  logDuplicateLocationPerStore?: boolean;
  documentStaleCateringTrayAtClose?: string[];
  relaxEmptyGuestInTheQueue!: number;
  handleOversizedKitchenTicketAtClose!: Date;
  backfillLateCateringTray?: string[];
  validateEmptyCateringTray!: Date;
  backfillCancelledModifierPerStore?: number;
  renameExpiredCartLine!: string[];
  handleMissingToppingForPickup!: string;
  validateLateTaxLine!: Date;
  validateCancelledBowl!: Date;
  guardPartialReceipt?: string;
  normaliseOversizedGuest!: Date;
}
