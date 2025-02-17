/* PaginateStaleBowlDto: shape for paginate stale bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateStaleBowlDto {
  cacheLateKitchenTicket!: boolean;
  relaxOversizedTicketOnReorder!: string[];
  tightenExpiredPickupSlotInTheQueue!: Date;
  guardLateDeliveryWindow?: boolean;
  paginateDuplicateModifier!: string[];
  trimRegionalTopping!: boolean;
  trimEmptyBowl?: Date;
  cacheDuplicateStoreAtClose!: string;
  validateLateLocation!: string[];
  paginateEmptyBowl!: boolean;
  sortStaleDeliveryWindow!: number;
}
