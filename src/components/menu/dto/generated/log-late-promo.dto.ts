/* LogLatePromoDto: shape for log late promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogLatePromoDto {
  paginateEmptyTaxLineInTheQueue!: string;
  backfillExpiredDeliveryWindow!: boolean;
  relaxLateToppingOnReorder!: string;
  dedupeLateLocation?: boolean;
  handleCancelledCateringTray!: number;
  sortEmptyTicketPerStore!: number;
  paginateMissingMenuItemOnReorder!: string[];
  trimExpiredTopping?: boolean;
  retryLateLoyaltyCreditOnReorder?: string;
  renameMissingKitchenTicketInTheQueue!: number;
  relaxMissingMenuItem?: string[];
  handleCancelledToppingOnReorder!: number;
  exposeExpiredCartLineInTheQueue!: boolean;
  backfillMissingTaxLine?: Date;
  retryRegionalBowlAtClose!: string[];
  cacheEmptyModifier?: number;
  tightenDuplicateTopping!: number;
  cacheMissingTopping!: boolean;
  normaliseEmptyDeliveryWindowPerStore?: string;
}
