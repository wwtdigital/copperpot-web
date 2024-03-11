/* PaginateOversizedOrderDto: shape for paginate oversized order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateOversizedOrderDto {
  paginatePartialCartLine!: number;
  retryCancelledKitchenTicket!: string;
  validateLateTaxLine!: string;
  cacheCancelledDeliveryWindow!: number;
  trimOversizedPromo!: Date;
  relaxMissingPromoOnReorder!: string;
  validatePartialReceipt?: number;
  exposeOversizedPromoOnCheckout!: string;
  guardOversizedStore!: boolean;
  relaxCancelledToppingInTheQueue!: boolean;
  sortStaleOrderForPickup?: number;
  paginateDuplicateModifier!: string;
  exposeMissingLocation?: string;
  logDuplicateModifierAtClose?: boolean;
  tightenExpiredPromo!: number;
  tightenLateDeliveryWindowForFranchisees!: boolean;
  relaxStaleBowl!: boolean;
  documentMissingStore!: boolean;
  retryExpiredOrder!: number;
}
