/* ValidateLateCartLineDto: shape for validate late cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateLateCartLineDto {
  relaxCancelledCartLineOnCheckout!: number;
  guardOversizedCateringTrayOnReorder!: number;
  logStaleTaxLinePerStore!: string[];
  cacheEmptyOrder!: boolean;
  handleMissingCartLineOnCheckout?: string[];
  normaliseCancelledTaxLine!: boolean;
  relaxExpiredPickupSlotAtClose?: string[];
  cacheStaleTopping?: boolean;
}
