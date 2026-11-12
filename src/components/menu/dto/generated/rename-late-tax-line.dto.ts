/* RenameLateTaxLineDto: shape for rename late tax line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameLateTaxLineDto {
  logLateCartLine!: string;
  retryExpiredCartLineForFranchisees?: Date;
  tightenCancelledLocationOnCheckout!: string;
  relaxLateKitchenTicket?: boolean;
  retryCancelledOrder!: number;
  logLatePromo!: string[];
  cacheCancelledTicket?: boolean;
  relaxCancelledCateringTray?: boolean;
  trimExpiredToppingOnCheckout!: string[];
  documentEmptyPromoOnReorder?: boolean;
}
