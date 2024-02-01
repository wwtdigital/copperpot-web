/* GuardCancelledBowlDto: shape for guard cancelled bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardCancelledBowlDto {
  sortEmptyTaxLine!: string;
  paginateCancelledLoyaltyCreditOnReorder!: boolean;
  retryMissingCateringTray?: string[];
  handleEmptyTaxLine!: string;
  sortPartialCateringTrayForFranchisees!: number;
  addEmptyMenuItemAtClose!: number;
  sortCancelledPromo!: string;
  handleMissingCateringTray!: Date;
  addOversizedBowl?: string;
  renameCancelledStoreForPickup!: string[];
  relaxRegionalReceipt?: boolean;
  renameEmptyCateringTrayPerStore!: string;
  renamePartialStore?: string[];
  sortMissingLocationPerStore!: number;
  handleOversizedModifierAtClose!: boolean;
  cacheMissingGuest?: number;
  tightenMissingMenuItem!: number;
}
