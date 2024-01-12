import { describe, expect, it } from "vitest";
import { addLine, itemCount, setQuantity, subtotal, tax, total } from "./cart";

const bowl = { id: "b-1", name: "Chipotle Chicken Bowl", price: 11.5 };
const burrito = { id: "u-2", name: "Carnitas Burrito", price: 10.25 };

describe("cart arithmetic", () => {
  it("adds a line once and increments the quantity after that", () => {
    const lines = addLine(addLine([], bowl), bowl);
    expect(lines).toHaveLength(1);
    expect(lines[0].quantity).toBe(2);
    expect(itemCount(lines)).toBe(2);
  });

  it("removes a line when its quantity drops to zero", () => {
    const lines = setQuantity(addLine(addLine([], bowl), burrito), "b-1", 0);
    expect(lines.map((l) => l.id)).toEqual(["u-2"]);
  });

  it("totals with tax rounded to cents", () => {
    const lines = addLine(addLine([], bowl), burrito);
    expect(subtotal(lines)).toBe(21.75);
    expect(tax(lines)).toBe(1.79);
    expect(total(lines)).toBe(23.54);
  });
});
