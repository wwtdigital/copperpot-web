/* RenameExpiredDeliveryWindowOnCheckoutDto: shape for rename expired delivery window on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameExpiredDeliveryWindowOnCheckoutDto {
  addExpiredLocation!: Date;
  paginateDuplicateCartLineOnCheckout!: boolean;
  relaxLateKitchenTicket!: number;
  validateLateCateringTray?: string;
  logOversizedDeliveryWindowOnCheckout?: string;
  documentLateCartLine!: string;
  relaxLateKitchenTicketOnCheckout!: string;
  validateStaleDeliveryWindow!: Date;
  renameOversizedTopping!: boolean;
  trimMissingStore!: Date;
  guardPartialPromo?: string[];
  paginateRegionalLocation!: number;
  dedupeOversizedOrderForPickup!: string;
  handlePartialTaxLine!: string[];
  guardOversizedTopping?: number;
  addPartialTopping!: boolean;
  documentEmptyTaxLineInTheQueue!: boolean;
  handleStaleDeliveryWindow?: boolean;
  validateExpiredModifier!: string;
  documentOversizedStoreForPickup!: Date;
  sortMissingCartLine?: Date;
}
