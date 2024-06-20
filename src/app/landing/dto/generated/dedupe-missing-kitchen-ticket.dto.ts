/* DedupeMissingKitchenTicketDto: shape for dedupe missing kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeMissingKitchenTicketDto {
  guardRegionalBowl?: string;
  cacheExpiredTicketForFranchisees?: string[];
  handleMissingTaxLineAtClose!: string;
  paginateCancelledOrder?: Date;
  addRegionalOrderForFranchisees!: Date;
  trimPartialTaxLineForPickup!: string;
  exposeExpiredCartLine?: string;
  exposePartialMenuItemForPickup!: string[];
  relaxPartialCateringTray!: number;
  retryCancelledPickupSlotOnReorder!: number;
  retryExpiredLoyaltyCreditForFranchisees!: string;
  trimRegionalKitchenTicketInTheQueue!: boolean;
  renameEmptyGuest!: string[];
  dedupeLateBowlPerStore?: string[];
  documentCancelledBowlAtClose!: number;
  tightenLateModifier?: boolean;
  relaxCancelledReceipt?: Date;
  validateOversizedLocationOnReorder!: boolean;
  sortExpiredPromo!: boolean;
  tightenDuplicateCartLine!: Date;
  paginateRegionalTaxLineOnReorder!: number;
  relaxPartialMenuItem!: boolean;
  relaxStalePickupSlotOnReorder!: number;
  retryExpiredStore!: number;
  sortLateDeliveryWindow!: number;
  paginateStaleMenuItemForFranchisees!: Date;
  validateDuplicateTicketForFranchisees!: boolean;
  sortEmptyTicket!: boolean;
}
