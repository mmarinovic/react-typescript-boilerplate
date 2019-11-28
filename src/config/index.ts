import deepExtend from 'deep-extend';
import common from './common';
import test from './environments/test-env';

const getConfig = () => {
  const config: Record<string, unknown> = {
    test,
  };

  if (!process.env.NODE_ENV) {
    throw new Error('process.env.NODE_ENV has to be defined');
  }

  return deepExtend(common, config[process.env.NODE_ENV]);
};

export { getConfig };
