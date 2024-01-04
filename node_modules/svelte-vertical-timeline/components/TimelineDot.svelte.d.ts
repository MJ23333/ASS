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
export type TimelineDotProps = typeof __propDef.props;
export type TimelineDotEvents = typeof __propDef.events;
export type TimelineDotSlots = typeof __propDef.slots;
export default class TimelineDot extends SvelteComponentTyped<TimelineDotProps, TimelineDotEvents, TimelineDotSlots> {
}
export {};
