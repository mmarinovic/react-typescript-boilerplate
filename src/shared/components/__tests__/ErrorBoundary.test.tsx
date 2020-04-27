import React from 'react';
import { ErrorBoundary } from '../ErrorBoundary';
import { render } from '@testing-library/react';

describe('ErrorBoundary', () => {
  it('should match snapshot', () => {
    const { container } = render(<ErrorBoundary>"Hi"</ErrorBoundary>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('catches error and displays fallback', () => {
    const ThrowError = () => {
      throw new Error('Here is it');
    };

    const { container } = render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
