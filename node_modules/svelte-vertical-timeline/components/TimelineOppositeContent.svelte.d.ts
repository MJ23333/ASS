import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TimelineOppositeContentProps = typeof __propDef.props;
export type TimelineOppositeContentEvents = typeof __propDef.events;
export type TimelineOppositeContentSlots = typeof __propDef.slots;
export default class TimelineOppositeContent extends SvelteComponentTyped<TimelineOppositeContentProps, TimelineOppositeContentEvents, TimelineOppositeContentSlots> {
}
export {};
