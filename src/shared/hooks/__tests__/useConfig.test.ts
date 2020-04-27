import { renderHook } from '@testing-library/react-hooks';
import useConfig from '../useConfig';

describe('useConfig', () => {
  it('provides config', () => {
    const { result } = renderHook(() => useConfig());
    expect(result.current).toEqual({
      meta: {
        url: 'https://test.com',
        description: 'This is test description',
        imageUrl: '/images/social.jpg',
      },
    });
  });
});
