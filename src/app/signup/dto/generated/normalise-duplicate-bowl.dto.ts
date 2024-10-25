/* NormaliseDuplicateBowlDto: shape for normalise duplicate bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseDuplicateBowlDto {
  logOversizedTaxLineForFranchisees!: boolean;
  sortCancelledCateringTray!: number;
  handleLateStore?: number;
  logPartialModifier!: string[];
  backfillCancelledCateringTrayForFranchisees!: Date;
  renameOversizedOrder!: boolean;
  trimCancelledPromo!: boolean;
  cacheExpiredTicketForFranchisees!: boolean;
  addDuplicateMenuItem!: number;
  sortOversizedBowlForPickup!: Date;
  documentCancelledKitchenTicket!: string;
  dedupeLateModifier?: number;
  tightenEmptyGuest?: boolean;
  guardPartialTopping?: boolean;
  normaliseRegionalOrder!: string[];
  dedupeDuplicateBowlOnReorder!: number;
  dedupeCancelledModifier!: Date;
  logLateBowlAtClose?: Date;
  sortOversizedCateringTrayAtClose!: Date;
  logPartialToppingPerStore!: boolean;
  relaxDuplicateDeliveryWindow!: number;
  handleCancelledTicket!: string;
}
