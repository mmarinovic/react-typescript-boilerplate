import React from 'react';
import { Layout } from '../Layout';
import { render } from '@testing-library/react';

describe('Layout', () => {
  it('should match a snapshot', () => {
    const { container } = render(
      <Layout>
        <div>
          <h1>I'm in layout</h1>
        </div>
      </Layout>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
