import { useSyncExternalStore } from 'react';
import { createStore as createVanillaStore, StateCreator, StoreApi } from 'zustand/vanilla';

export type UseBoundStore<T> = {
  (): T;
  <U>(selector: (state: T) => U): U;
} & StoreApi<T>;

export function create<T>(createState: StateCreator<T>): UseBoundStore<T> {
  const api = createVanillaStore(createState);

  const useBoundStore = ((selector?: (state: T) => any) => {
    const getSnapshot = selector ? () => selector(api.getState()) : api.getState;
    const getServerSnapshot = selector ? () => selector(api.getInitialState()) : api.getInitialState;

    return useSyncExternalStore(
      api.subscribe,
      getSnapshot,
      getServerSnapshot
    );
  }) as UseBoundStore<T>;

  Object.assign(useBoundStore, api);
  return useBoundStore;
}
