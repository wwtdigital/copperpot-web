import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import MenuCard, { type MenuCardItem } from './MenuCard';

const item: MenuCardItem = {
  id: 'b-1',
  name: 'Chipotle Chicken Bowl',
  price: 11.5,
  category: 'Bowls',
  available: true,
};

describe('MenuCard', () => {
  it('shows the name, category and price', () => {
    render(<MenuCard item={item} onAdd={() => {}} />);
    expect(screen.getByRole('heading', { name: 'Chipotle Chicken Bowl' })).toBeInTheDocument();
    expect(screen.getByText('Bowls')).toBeInTheDocument();
    expect(screen.getByText('$11.50')).toBeInTheDocument();
  });

  it('calls onAdd with the item', () => {
    const onAdd = vi.fn();
    render(<MenuCard item={item} onAdd={onAdd} />);
    fireEvent.click(screen.getByRole('button', { name: 'Add to order' }));
    expect(onAdd).toHaveBeenCalledWith(item);
  });

  it('disables the button when the item is sold out', () => {
    render(<MenuCard item={{ ...item, available: false }} onAdd={() => {}} />);
    expect(screen.getByRole('button', { name: 'Sold out' })).toBeDisabled();
  });
});
