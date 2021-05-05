import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Render title', () => {
    render(<Header />);
    const titleElement = screen.getByText(/gic GAP goe/i);
    expect(titleElement).toBeInTheDocument();
  });
