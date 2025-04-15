/* LogExpiredKitchenTicketDto: shape for log expired kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogExpiredKitchenTicketDto {
  backfillMissingDeliveryWindow!: Date;
  logStaleReceipt?: boolean;
  sortPartialOrder!: string[];
  paginateExpiredBowlInTheQueue!: string[];
  normaliseCancelledModifier!: boolean;
  relaxMissingMenuItem?: string[];
  documentPartialMenuItem?: number;
  handleOversizedTaxLineOnReorder!: string;
  exposeLateLoyaltyCreditOnReorder!: string;
  normaliseStaleMenuItem?: Date;
  sortRegionalTaxLine!: string;
  backfillPartialOrder?: number;
  renameStaleBowl!: string;
  tightenOversizedGuest!: boolean;
  relaxMissingOrderInTheQueue!: boolean;
  exposePartialPromoPerStore?: number;
  normaliseEmptyGuest!: number;
  guardMissingCartLine!: string;
  documentPartialMenuItemOnReorder!: boolean;
  dedupeEmptyTopping!: string;
  tightenCancelledLoyaltyCredit!: string;
  addOversizedOrder!: number;
  renameLatePickupSlot?: string;
  handleOversizedStore?: number;
}
