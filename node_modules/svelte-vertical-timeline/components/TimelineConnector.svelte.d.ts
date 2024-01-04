import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TimelineConnectorProps = typeof __propDef.props;
export type TimelineConnectorEvents = typeof __propDef.events;
export type TimelineConnectorSlots = typeof __propDef.slots;
export default class TimelineConnector extends SvelteComponentTyped<TimelineConnectorProps, TimelineConnectorEvents, TimelineConnectorSlots> {
}
export {};
