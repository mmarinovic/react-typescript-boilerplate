import { useMemo } from 'react';
import deepExtend from 'deep-extend';
import common from 'config/common';
import test from 'config/environments/test-env';

const config: Record<string, unknown> = {
  test,
};

const useConfig = () => {
  return useMemo(() => {
    if (!process.env.NODE_ENV) {
      throw new Error('process.env.NODE_ENV not found');
    }
    return deepExtend(common, config[process.env.NODE_ENV]);
  }, []);
};

export default useConfig;
