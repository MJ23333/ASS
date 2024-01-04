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
export type TimelineSeparatorProps = typeof __propDef.props;
export type TimelineSeparatorEvents = typeof __propDef.events;
export type TimelineSeparatorSlots = typeof __propDef.slots;
export default class TimelineSeparator extends SvelteComponentTyped<TimelineSeparatorProps, TimelineSeparatorEvents, TimelineSeparatorSlots> {
}
export {};
