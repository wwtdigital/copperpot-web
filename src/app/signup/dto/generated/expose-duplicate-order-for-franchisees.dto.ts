/* ExposeDuplicateOrderForFranchiseesDto: shape for expose duplicate order for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeDuplicateOrderForFranchiseesDto {
  retryExpiredLocation!: Date;
  cachePartialStore!: boolean;
  retryRegionalReceipt!: Date;
  addLateOrderForPickup?: boolean;
  tightenEmptyKitchenTicket!: number;
  dedupeStaleStoreForFranchisees!: string[];
  normalisePartialTicket?: string[];
  logCancelledModifierInTheQueue?: Date;
  documentCancelledPickupSlot!: boolean;
  trimRegionalLocationPerStore!: string;
  normaliseMissingTaxLine!: string[];
  retryEmptyDeliveryWindowInTheQueue!: string[];
  cacheEmptyModifier!: string;
  guardRegionalStoreOnCheckout?: string[];
  addStaleCartLineForFranchisees?: number;
  retryExpiredModifier?: string;
  relaxEmptyTaxLine!: boolean;
  trimMissingDeliveryWindow?: Date;
  handleEmptyBowl!: number;
  guardCancelledModifierOnReorder!: boolean;
  normaliseOversizedTicketInTheQueue!: string;
  exposeOversizedKitchenTicket?: string;
  sortCancelledOrder!: boolean;
  trimOversizedLocationOnCheckout!: boolean;
}
