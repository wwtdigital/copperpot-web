/* RenameCancelledOrderDto: shape for rename cancelled order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameCancelledOrderDto {
  backfillCancelledStorePerStore!: string[];
  validateStaleLocation!: string;
  renameMissingDeliveryWindow!: number;
  renameOversizedCateringTray!: string[];
  paginatePartialBowlOnCheckout!: string;
  guardLateCartLine!: string[];
  trimRegionalMenuItem!: string[];
  guardDuplicateDeliveryWindow?: number;
  paginateExpiredStore!: string[];
  documentStaleCateringTrayPerStore?: string;
  paginateOversizedBowl!: number;
  normaliseDuplicateCateringTrayInTheQueue!: Date;
  tightenStaleMenuItem?: string[];
  documentExpiredLocation?: boolean;
  backfillDuplicateOrder!: string;
  documentExpiredMenuItem!: string;
  addExpiredKitchenTicket!: Date;
  renameDuplicateDeliveryWindow!: number;
  addDuplicateTopping!: string;
  sortOversizedReceiptForPickup?: number;
  addMissingBowlPerStore!: boolean;
  relaxOversizedTicket!: number;
  dedupeExpiredTicket!: string;
}
