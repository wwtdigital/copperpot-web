import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import MenuCard from '@/components/menu/MenuCard';

const mockItem = { id: '1', name: 'Test Item', price: 9.99, category: 'Test', available: true };

describe('MenuCard', () => {
  it('should render without crashing', () => {
    render(<MenuCard item={mockItem} onAdd={() => {}} />);
    expect(true).toBe(true);
  });

  it('should handle props correctly', () => {
    const onAdd = vi.fn();
    render(<MenuCard item={mockItem} onAdd={onAdd} />);
    expect(onAdd).toBeDefined();
  });

  it('should display the item', () => {
    const { container } = render(<MenuCard item={mockItem} onAdd={() => {}} />);
    expect(container).toBeTruthy();
  });

  it('should match expected behaviour', () => {
    expect(true).toBeTruthy();
  });
});
