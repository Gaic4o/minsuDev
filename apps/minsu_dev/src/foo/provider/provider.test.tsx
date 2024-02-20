import { render, screen } from '@testing-library/react';
import { useQueryClient } from '@tanstack/react-query';
import Providers from '.';

function TestQueryClient() {
  const queryClient = useQueryClient();
  return <div>QueryClient does not produce an error.</div>;
}

function TestChildComponent() {
  return <div>Child component rendered</div>;
}

describe('Providers', () => {
  test('QueryClientProvider provides a query client to child components', () => {
    render(
      <Providers>
        <TestQueryClient />
      </Providers>,
    );
    expect(
      screen.getByText('QueryClient does not produce an error.'),
    ).toBeInTheDocument();
  });

  test('Providers renders its child components correctly', () => {
    render(
      <Providers>
        <TestChildComponent />
      </Providers>,
    );
    expect(screen.getByText('Child component rendered')).toBeInTheDocument();
  });
});
