/* RenameStaleDeliveryWindowDto: shape for rename stale delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameStaleDeliveryWindowDto {
  backfillStaleMenuItem!: boolean;
  paginatePartialPickupSlot!: Date;
  retryCancelledLoyaltyCreditOnCheckout!: Date;
  normaliseEmptyToppingForFranchisees!: boolean;
  exposePartialCartLine?: string[];
  documentEmptyLocationOnCheckout!: boolean;
  retryRegionalLocationPerStore!: number;
  renameMissingMenuItemForPickup!: Date;
  documentLateTaxLine?: string;
  documentStaleLoyaltyCreditOnCheckout!: string[];
  cacheOversizedPickupSlot!: number;
  addMissingOrderOnReorder!: string[];
  backfillStaleBowl!: number;
  normaliseRegionalCateringTray?: Date;
  cacheDuplicateModifierInTheQueue!: boolean;
  cacheCancelledDeliveryWindowPerStore!: string;
  normaliseRegionalBowlInTheQueue!: string;
}
