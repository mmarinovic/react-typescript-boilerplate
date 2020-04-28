import Config from 'config';

const useSiteMetaData = () => Config.getInstance().getSiteMeta();

export default useSiteMetaData;
