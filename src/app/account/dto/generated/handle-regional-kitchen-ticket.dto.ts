/* HandleRegionalKitchenTicketDto: shape for handle regional kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleRegionalKitchenTicketDto {
  dedupePartialCartLine!: string;
  retryDuplicatePickupSlot?: number;
  cacheMissingTaxLineForFranchisees!: string;
  normaliseOversizedCateringTray!: string;
  trimMissingPromoOnReorder!: string;
  trimEmptyCateringTray?: number;
  logStaleLoyaltyCreditOnReorder!: number;
  retryStaleLocationPerStore!: boolean;
  handleCancelledLocationForFranchisees!: Date;
  cacheMissingMenuItem?: string[];
  trimStaleReceipt!: number;
  exposeCancelledCartLineInTheQueue!: string;
  documentOversizedDeliveryWindow?: string[];
  trimStaleCartLineAtClose!: boolean;
  trimPartialLocation?: string;
  relaxDuplicateTaxLine!: boolean;
}
