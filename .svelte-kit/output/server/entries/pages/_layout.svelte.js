import { c as create_ssr_component } from "../../chunks/index2.js";
import { computePosition, autoUpdate, offset, shift, flip, arrow } from "@floating-ui/dom";
import { w as writable } from "../../chunks/index.js";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const asstheme = "";
const skeleton = "";
const app = "";
const storePopup = writable(void 0);
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  storePopup.set({
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
    arrow
  });
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
