import useConfig from '../useConfig';

const useSiteMetaData = () => {
  const { meta } = useConfig();
  return meta;
};

export default useSiteMetaData;
