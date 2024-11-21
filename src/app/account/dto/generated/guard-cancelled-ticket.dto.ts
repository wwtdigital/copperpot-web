/* GuardCancelledTicketDto: shape for guard cancelled ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardCancelledTicketDto {
  exposeStaleCartLine?: boolean;
  dedupeMissingCateringTray!: number;
  validateCancelledReceiptOnCheckout?: number;
  relaxRegionalMenuItemForFranchisees!: boolean;
  relaxRegionalDeliveryWindow?: Date;
  dedupeStaleToppingForPickup!: boolean;
  renameStaleReceipt!: boolean;
  normaliseLateOrder!: number;
  normaliseDuplicateStoreOnCheckout?: string;
  exposePartialDeliveryWindow?: boolean;
}
