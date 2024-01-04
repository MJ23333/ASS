import { w as writable } from "./index.js";
import { l as localStorageStore } from "./ProgressBar.svelte_svelte_type_style_lang.js";
const activities = writable([]);
const types = writable([]);
const activity = writable({});
const story = writable({});
const history = localStorageStore("history", {});
const wantmusic = localStorageStore("wantmusic", false);
const ActivityCard_svelte_svelte_type_style_lang = "";
const ActivityCards_svelte_svelte_type_style_lang = "";
export {
  activities as a,
  activity as b,
  history as h,
  story as s,
  types as t,
  wantmusic as w
};
