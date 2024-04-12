import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CartSummary from './CartSummary';

describe('CartSummary', () => {
  it('says when the order is empty', () => {
    render(<CartSummary lines={[]} />);
    expect(screen.getByText('Your order is empty.')).toBeInTheDocument();
  });

  it('lists lines and shows the total with tax', () => {
    render(
      <CartSummary
        lines={[{ id: 'b-1', name: 'Chipotle Chicken Bowl', unitPrice: 11.5, quantity: 2 }]}
      />,
    );
    expect(screen.getByText(/Chipotle Chicken Bowl/)).toBeInTheDocument();
    expect(screen.getByTestId('cart-total')).toHaveTextContent('$24.90');
  });
});
