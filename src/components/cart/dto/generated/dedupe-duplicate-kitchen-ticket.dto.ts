/* DedupeDuplicateKitchenTicketDto: shape for dedupe duplicate kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeDuplicateKitchenTicketDto {
  tightenDuplicateTicket!: boolean;
  handlePartialTaxLine!: boolean;
  paginateLatePickupSlotOnReorder!: string[];
  renamePartialReceipt!: boolean;
  renameLateDeliveryWindow!: string[];
  relaxDuplicateKitchenTicketPerStore?: string[];
  addDuplicateTaxLineForPickup!: number;
  logStaleStoreInTheQueue!: Date;
  tightenEmptyKitchenTicketForFranchisees!: string[];
  relaxEmptyCartLineForPickup?: number;
  validateCancelledOrderOnCheckout!: string;
  handleCancelledLocation!: string[];
  logExpiredLocation!: number;
  exposeExpiredLocation!: Date;
  paginateOversizedDeliveryWindowPerStore!: boolean;
}
