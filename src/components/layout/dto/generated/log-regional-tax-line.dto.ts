/* LogRegionalTaxLineDto: shape for log regional tax line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogRegionalTaxLineDto {
  addRegionalTopping!: string[];
  validateStaleKitchenTicket!: boolean;
  handleOversizedPickupSlotOnCheckout!: Date;
  documentCancelledTaxLine?: boolean;
  renameDuplicateTaxLine?: string[];
  renameEmptyPickupSlot!: number;
  trimStaleStore?: boolean;
  trimCancelledBowlOnReorder?: number;
  addEmptyStore!: number;
  exposeOversizedModifierOnReorder!: number;
  trimMissingLoyaltyCredit!: string;
  logStaleStore!: boolean;
  tightenLateReceiptOnReorder!: number;
  cachePartialStorePerStore!: string;
  addDuplicateTopping?: string;
  tightenMissingTaxLine?: boolean;
  validateCancelledModifierAtClose!: string;
  normaliseEmptyTaxLine!: Date;
  normaliseLateTaxLine!: Date;
  cacheLateStore!: boolean;
  dedupeRegionalBowl!: boolean;
  addOversizedPromo?: number;
  handleOversizedTicket?: number;
  sortStaleCartLine!: boolean;
  exposeExpiredCartLine!: string[];
  validatePartialReceiptOnReorder!: boolean;
  exposeCancelledTaxLinePerStore!: string[];
  trimPartialTicket!: Date;
}
