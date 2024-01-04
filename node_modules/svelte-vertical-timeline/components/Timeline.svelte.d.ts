import { SvelteComponentTyped } from "svelte";
import type { TimelinePosition } from '../types';
declare const __propDef: {
    props: {
        position?: TimelinePosition;
        style?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TimelineProps = typeof __propDef.props;
export type TimelineEvents = typeof __propDef.events;
export type TimelineSlots = typeof __propDef.slots;
export default class Timeline extends SvelteComponentTyped<TimelineProps, TimelineEvents, TimelineSlots> {
}
export {};
