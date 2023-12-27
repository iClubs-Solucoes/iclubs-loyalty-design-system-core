import { fireEvent, render, screen } from '@testing-library/react';
import { ScrollProvider } from 'hooks';
import { describe, expect, it, vi } from 'vitest';

import { Select } from './Select';
import { SelectProps } from './types';

function Wrapper({ ...selectProps }: SelectProps) {
  return (
    <ScrollProvider>
      <Select {...selectProps} />
    </ScrollProvider>
  );
}

describe('<Select />', () => {
  const handleChange = vi.fn();

  const itemsMock = [
    {
      value: 'Test 1',
      label: 'Test 1',
    },
    {
      value: 'Test 2',
      label: 'Teste 2',
    },
    {
      value: 'Test 3',
      label: '',
    },
  ];

  it('should render the component', () => {
    const { container } = render(<Wrapper />);

    expect(container).toBeTruthy();
  });

  it('should select item', () => {
    const { rerender } = render(
      <Wrapper
        values={{ value: 'Test', label: '' }}
        onChange={handleChange}
        items={itemsMock}
      />,
    );

    fireEvent.click(screen.getByText('Test'));

    fireEvent.click(screen.getByText('Teste 2'));

    rerender(
      <Wrapper
        values={{ value: 'Test 2', label: 'Teste 2' }}
        onChange={handleChange}
        items={itemsMock}
      />,
    );

    expect(handleChange).toBeCalledWith({
      ...itemsMock[1],
    });

    expect(screen.getByText(/Teste 2/i)).toBeTruthy();
  });
});
