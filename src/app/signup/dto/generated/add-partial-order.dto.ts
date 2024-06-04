/* AddPartialOrderDto: shape for add partial order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddPartialOrderDto {
  relaxMissingPromo!: string;
  renameEmptyDeliveryWindow!: string;
  handleExpiredModifierForPickup!: number;
  addRegionalTicketOnReorder?: string;
  exposeStaleModifier!: string;
  handleExpiredModifier?: Date;
  backfillLateGuestForPickup!: number;
  renameLateTaxLineInTheQueue!: string;
  documentExpiredDeliveryWindowOnCheckout?: string;
  exposePartialModifierPerStore!: number;
  renameDuplicatePickupSlot!: string;
  handleDuplicateTaxLinePerStore!: boolean;
  addExpiredPickupSlotPerStore?: boolean;
}
