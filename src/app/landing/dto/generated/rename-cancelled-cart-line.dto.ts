/* RenameCancelledCartLineDto: shape for rename cancelled cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameCancelledCartLineDto {
  trimExpiredGuestInTheQueue!: string;
  guardPartialTicket!: string[];
  addOversizedStore!: Date;
  logPartialTicket!: string;
  normaliseDuplicateCateringTray!: boolean;
  relaxOversizedTaxLine?: boolean;
  exposeMissingDeliveryWindowForFranchisees!: boolean;
  dedupeDuplicateMenuItemForFranchisees!: boolean;
  relaxRegionalBowl!: boolean;
  guardRegionalCateringTrayOnReorder!: Date;
  trimLateLocationAtClose?: Date;
  tightenExpiredLoyaltyCreditOnCheckout!: Date;
  tightenLateModifierAtClose!: number;
  handleLateBowl!: number;
  exposeRegionalOrder!: Date;
  dedupeCancelledLoyaltyCreditInTheQueue?: number;
  normaliseStaleReceipt!: string;
  retryOversizedTaxLine?: boolean;
  renameRegionalGuestAtClose!: number;
  retryDuplicateCateringTray?: boolean;
  exposePartialOrder!: number;
  cacheCancelledLocationInTheQueue?: number;
  cacheCancelledStore?: string;
  normaliseRegionalKitchenTicket?: string;
}
