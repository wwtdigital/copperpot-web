/* TightenMissingOrderDto: shape for tighten missing order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenMissingOrderDto {
  sortRegionalDeliveryWindowForPickup!: string;
  tightenRegionalReceipt!: boolean;
  backfillOversizedLocationInTheQueue!: boolean;
  addRegionalPromoInTheQueue!: Date;
  documentPartialMenuItem!: Date;
  paginateLateToppingInTheQueue?: boolean;
  tightenCancelledTaxLineInTheQueue!: Date;
  handleOversizedMenuItem!: number;
  handlePartialLocation!: Date;
  relaxCancelledToppingInTheQueue!: string;
  paginateLateTicketForFranchisees!: boolean;
  exposeDuplicatePickupSlot!: string[];
  renameEmptyModifier!: string;
  paginateLateStore!: number;
  backfillExpiredToppingOnReorder!: Date;
}
