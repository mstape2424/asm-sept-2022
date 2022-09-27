import { createActionGroup, emptyProps } from '@ngrx/store';

export const CounterEvents = createActionGroup({
  source: 'Counter Events',
  events: {
    incremented: emptyProps(),
    decremented: emptyProps(),
    reset: emptyProps(),
  },
});
