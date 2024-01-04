import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../../chunks/index2.js";
import { b as activity, h as history, a as activities, t as types } from "../../../../chunks/ActivityCards.svelte_svelte_type_style_lang.js";
import "../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { P as ProgressRadial } from "../../../../chunks/ProgressRadial.js";
import "postcss/lib/list";
import { p as page } from "../../../../chunks/stores.js";
const Timeline_svelte_svelte_type_style_lang = "";
const TimelineItem_svelte_svelte_type_style_lang = "";
const TimelineSeparator_svelte_svelte_type_style_lang = "";
const TimelineDot_svelte_svelte_type_style_lang = "";
const TimelineConnector_svelte_svelte_type_style_lang = "";
const TimelineContent_svelte_svelte_type_style_lang = "";
const TimelineOppositeContent_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".trans.svelte-il5d0d{-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;-o-transition:all 0.5s ease;transition:all 0.5s ease}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_activity;
  let $$unsubscribe_history;
  let $$unsubscribe_page;
  let $$unsubscribe_activities;
  let $$unsubscribe_types;
  $$unsubscribe_activity = subscribe(activity, (value) => value);
  $$unsubscribe_history = subscribe(history, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_activities = subscribe(activities, (value) => value);
  $$unsubscribe_types = subscribe(types, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_activity();
  $$unsubscribe_history();
  $$unsubscribe_page();
  $$unsubscribe_activities();
  $$unsubscribe_types();
  return `
${`<div class="w-full flex justify-center p-5">${validate_component(ProgressRadial, "ProgressRadial").$$render(
    $$result,
    {
      "...": true,
      stroke: 100,
      meter: "stroke-primary-500",
      track: "stroke-primary-500/30"
    },
    {},
    {}
  )}</div>`}`;
});
export {
  Page as default
};
