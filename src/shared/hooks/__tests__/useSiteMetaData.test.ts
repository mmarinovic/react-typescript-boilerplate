import { renderHook } from '@testing-library/react-hooks';
import useSiteMetaData from '../useSiteMetaData';

describe('useSiteMetaData.test', () => {
  it('provides site meta', () => {
    const { result } = renderHook(() => useSiteMetaData());
    expect(result.current).toEqual({
      url: 'https://test.com',
      description: 'This is test description',
      imageUrl: '/images/social.jpg',
    });
  });
});
