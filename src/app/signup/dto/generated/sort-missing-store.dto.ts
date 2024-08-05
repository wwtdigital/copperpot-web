/* SortMissingStoreDto: shape for sort missing store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortMissingStoreDto {
  retryDuplicateModifier!: string[];
  documentEmptyStoreAtClose!: string;
  addEmptyTicketForPickup!: Date;
  handleOversizedGuest?: number;
  guardCancelledTicket!: string;
  renameOversizedPickupSlotPerStore!: boolean;
}
