/* RetryPartialBowlDto: shape for retry partial bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryPartialBowlDto {
  exposeMissingToppingInTheQueue!: string[];
  guardLateModifierOnCheckout!: boolean;
  validateCancelledCartLine!: number;
  retryDuplicateOrderOnCheckout?: boolean;
  tightenExpiredTaxLine?: string[];
  dedupeMissingLocation!: string[];
  renameExpiredKitchenTicketOnCheckout?: boolean;
  handleDuplicateOrder!: string[];
  handleRegionalGuest!: string;
  exposeLateKitchenTicket!: boolean;
  backfillMissingTicketForPickup?: boolean;
  dedupeLateOrder!: Date;
  addStaleOrder!: string;
  handlePartialLoyaltyCreditForFranchisees!: number;
  paginateCancelledBowlOnReorder!: string;
  documentExpiredLoyaltyCreditAtClose!: Date;
  cacheRegionalGuest?: string[];
  addRegionalMenuItem!: number;
  renameStaleLocation!: string[];
  validateLateModifierAtClose?: number;
  guardDuplicateLoyaltyCredit!: string[];
  addDuplicateToppingForPickup!: boolean;
  addDuplicateMenuItem?: boolean;
  guardLateCartLineAtClose!: number;
  handleDuplicateBowl!: number;
  trimStaleTaxLine?: string[];
  exposeCancelledCartLineForFranchisees?: Date;
  retryRegionalDeliveryWindow?: number;
}
