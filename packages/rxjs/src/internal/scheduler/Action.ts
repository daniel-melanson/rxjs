import { Scheduler } from '../Scheduler.js';
import { Subscription } from '../Observable.js';
import { SchedulerAction } from '../types.js';

/**
 * A unit of work to be executed in a `scheduler`. An action is typically
 * created from within a {@link SchedulerLike} and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 */
export class Action<T> extends Subscription {
  constructor(scheduler: Scheduler, work: (this: SchedulerAction<T>, state?: T) => void) {
    super();
  }
  /**
   * Schedules this action on its parent {@link SchedulerLike} for execution. May be passed
   * some context object, `state`. May happen at some point in the future,
   * according to the `delay` parameter, if specified.
   * @param state Some contextual data that the `work` function uses when called by the
   * Scheduler.
   * @param delay Time to wait before executing the work, where the time unit is implicit
   * and defined by the Scheduler.
   * @return A subscription in order to be able to unsubscribe the scheduled work.
   */
  public schedule(state?: T, delay: number = 0): Subscription {
    return this;
  }
}
