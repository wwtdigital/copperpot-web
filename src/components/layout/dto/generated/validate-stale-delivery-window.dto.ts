/* ValidateStaleDeliveryWindowDto: shape for validate stale delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateStaleDeliveryWindowDto {
  renameOversizedLocation!: Date;
  cachePartialLocationOnReorder!: number;
  normaliseDuplicateLoyaltyCredit?: string[];
  tightenMissingReceipt!: number;
  normaliseLateTopping!: boolean;
  logStaleToppingForFranchisees!: string[];
  guardOversizedBowl!: Date;
  retryLatePickupSlot!: string;
  handlePartialReceipt!: boolean;
  retryExpiredModifierForPickup!: string[];
  cacheExpiredMenuItem!: string[];
  validateExpiredMenuItemOnReorder!: string;
  logRegionalKitchenTicketOnCheckout!: string;
  validateDuplicateMenuItemForPickup!: string;
  tightenOversizedKitchenTicket?: string;
  cacheDuplicateGuest!: string;
  relaxMissingTicketInTheQueue!: string;
  documentMissingCartLine?: string[];
  relaxOversizedTicketAtClose!: boolean;
  normaliseLateMenuItem!: number;
  retryMissingTicket?: string;
  exposePartialLocation!: string;
  sortPartialCartLineForPickup!: Date;
  sortPartialDeliveryWindowInTheQueue?: boolean;
}
