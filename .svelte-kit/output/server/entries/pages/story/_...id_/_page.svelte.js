import { c as create_ssr_component, a as subscribe, o as onDestroy, v as validate_component } from "../../../../chunks/index2.js";
import { w as wantmusic, s as story, h as history, a as activities, b as activity, t as types } from "../../../../chunks/ActivityCards.svelte_svelte_type_style_lang.js";
import "../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import "postcss/lib/list";
import { p as page } from "../../../../chunks/stores.js";
import { P as ProgressRadial } from "../../../../chunks/ProgressRadial.js";
const ContentPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_wantmusic;
  let $$unsubscribe_story;
  let $$unsubscribe_history;
  let $$unsubscribe_activities;
  let $$unsubscribe_activity;
  let $$unsubscribe_types;
  $$unsubscribe_wantmusic = subscribe(wantmusic, (value) => value);
  $$unsubscribe_story = subscribe(story, (value) => value);
  $$unsubscribe_history = subscribe(history, (value) => value);
  $$unsubscribe_activities = subscribe(activities, (value) => value);
  $$unsubscribe_activity = subscribe(activity, (value) => value);
  $$unsubscribe_types = subscribe(types, (value) => value);
  let { params } = $$props;
  var ap;
  var active = null;
  onDestroy(() => {
    console.log("des");
    if (ap) {
      ap.destroy();
    }
    ap = null;
  });
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        console.log(active);
        if (ap) {
          {
            ap.pause();
          }
        }
      }
    }
    $$rendered = `${`<div class="w-full flex justify-center p-5">${validate_component(ProgressRadial, "ProgressRadial").$$render(
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
  } while (!$$settled);
  $$unsubscribe_wantmusic();
  $$unsubscribe_story();
  $$unsubscribe_history();
  $$unsubscribe_activities();
  $$unsubscribe_activity();
  $$unsubscribe_types();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `
${$$result.head += `<!-- HEAD_undefined_START --><!-- HEAD_undefined_END -->`, ""}
${validate_component(ContentPage, "ContentPage").$$render($$result, { params: $page.params }, {}, {})}`;
});
export {
  Page as default
};
