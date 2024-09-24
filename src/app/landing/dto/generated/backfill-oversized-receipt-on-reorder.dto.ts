/* BackfillOversizedReceiptOnReorderDto: shape for backfill oversized receipt on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillOversizedReceiptOnReorderDto {
  sortPartialStore!: Date;
  handlePartialModifier?: string[];
  documentStaleStore!: string;
  logCancelledStore!: number;
  handleMissingLocation!: number;
}
