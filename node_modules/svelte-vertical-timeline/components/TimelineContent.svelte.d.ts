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
export type TimelineContentProps = typeof __propDef.props;
export type TimelineContentEvents = typeof __propDef.events;
export type TimelineContentSlots = typeof __propDef.slots;
export default class TimelineContent extends SvelteComponentTyped<TimelineContentProps, TimelineContentEvents, TimelineContentSlots> {
}
export {};
