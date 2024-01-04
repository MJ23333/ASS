/** @typedef {typeof __propDef.props}  TimelineProps */
/** @typedef {typeof __propDef.events}  TimelineEvents */
/** @typedef {typeof __propDef.slots}  TimelineSlots */
export default class Timeline extends SvelteComponentTyped<{
    options: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TimelineProps = typeof __propDef.props;
export type TimelineEvents = typeof __propDef.events;
export type TimelineSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        options: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
