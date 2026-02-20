/* RetryPartialBowlDto: shape for retry partial bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryPartialBowlDto {
  exposeMissingToppingInTheQueue!: string[];
  guardLateModifierOnCheckout!: boolean;
}
