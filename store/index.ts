import { init, RematchRootState } from '@rematch/core';
import createPersistPlugin from '@rematch/persist';
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

import * as models from './models';

const persist = createPersistPlugin({});

const store = init({
  models,
  plugins: [persist],
});

export type Dispatch = typeof store.dispatch;
export type State = RematchRootState<typeof models>

const makeStore: MakeStore<State> = (context: Context) => store;

export default createWrapper(makeStore);
