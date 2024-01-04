import { c as create_ssr_component, a as subscribe, e as escape } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<main><div class="font-black text-9xl">出错啦！</div>
    ${escape($page.status)} ${escape($page.error.message)}
    <div><a href="/">返回主页</a></div></main>`;
});
export {
  Error as default
};
