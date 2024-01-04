import { c as create_ssr_component, a as subscribe, b as createEventDispatcher, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { h as history, a as activities, t as types } from "../../../chunks/ActivityCards.svelte_svelte_type_style_lang.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { P as ProgressRadial } from "../../../chunks/ProgressRadial.js";
import { w as writable } from "../../../chunks/index.js";
import "postcss/lib/list";
function drawerService() {
  const { subscribe: subscribe2, set, update } = writable({});
  return {
    subscribe: subscribe2,
    set,
    update,
    /** Open the drawer. */
    open: (newSettings) => update(() => {
      return { open: true, ...newSettings };
    }),
    /** Close the drawer. */
    close: () => update((d) => {
      d.open = false;
      return d;
    })
  };
}
const drawerStore = drawerService();
const cBackdrop = "fixed top-0 left-0 right-0 bottom-0 flex";
const cDrawer = "overflow-y-auto transition-transform";
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesPosition;
  let classesWidth;
  let classesHeight;
  let classesRounded;
  let classesBackdrop;
  let classesDrawer;
  let $drawerStore, $$unsubscribe_drawerStore;
  $$unsubscribe_drawerStore = subscribe(drawerStore, (value) => $drawerStore = value);
  createEventDispatcher();
  let { position = "left" } = $$props;
  let { duration = 150 } = $$props;
  let { bgBackdrop = "bg-surface-backdrop-token" } = $$props;
  let { blur = "" } = $$props;
  let { padding = "" } = $$props;
  let { bgDrawer = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "" } = $$props;
  let { shadow = "shadow-xl" } = $$props;
  let { width = "" } = $$props;
  let { height = "" } = $$props;
  let { zIndex = "z-40" } = $$props;
  let { regionBackdrop = "" } = $$props;
  let { regionDrawer = "" } = $$props;
  let { labelledby = "" } = $$props;
  let { describedby = "" } = $$props;
  const presets = {
    top: {
      alignment: "items-start",
      width: "w-full",
      height: "h-[50%]",
      rounded: "rounded-bl-container-token rounded-br-container-token"
    },
    bottom: {
      alignment: "items-end",
      width: "w-full",
      height: " h-[50%]",
      rounded: "rounded-tl-container-token rounded-tr-container-token"
    },
    left: {
      alignment: "justify-start",
      width: "w-[90%]",
      height: "h-full",
      rounded: "rounded-tr-container-token rounded-br-container-token"
    },
    right: {
      alignment: "justify-end",
      width: "w-[90%]",
      height: "h-full",
      rounded: "rounded-tl-container-token rounded-bl-container-token"
    }
  };
  let elemBackdrop;
  let elemDrawer;
  const propDefaults = {
    position,
    duration,
    bgBackdrop,
    blur,
    padding,
    bgDrawer,
    border,
    rounded,
    shadow,
    width,
    height,
    labelledby,
    describedby,
    regionBackdrop,
    regionDrawer
  };
  function applyPropSettings(settings) {
    position = settings.position || propDefaults.position;
    duration = settings.duration || propDefaults.duration;
    bgBackdrop = settings.bgBackdrop || propDefaults.bgBackdrop;
    blur = settings.blur || propDefaults.blur;
    padding = settings.padding || propDefaults.padding;
    bgDrawer = settings.bgDrawer || propDefaults.bgDrawer;
    border = settings.border || propDefaults.border;
    rounded = settings.rounded || propDefaults.rounded;
    shadow = settings.shadow || propDefaults.shadow;
    width = settings.width || propDefaults.width;
    height = settings.height || propDefaults.height;
    regionBackdrop = settings.regionBackdrop || propDefaults.regionBackdrop;
    regionDrawer = settings.regionDrawer || propDefaults.regionDrawer;
    labelledby = settings.labelledby || propDefaults.labelledby;
    describedby = settings.describedby || propDefaults.describedby;
  }
  drawerStore.subscribe((settings) => {
    if (settings.open !== true)
      return;
    applyPropSettings(settings);
  });
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.bgBackdrop === void 0 && $$bindings.bgBackdrop && bgBackdrop !== void 0)
    $$bindings.bgBackdrop(bgBackdrop);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.bgDrawer === void 0 && $$bindings.bgDrawer && bgDrawer !== void 0)
    $$bindings.bgDrawer(bgDrawer);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.regionBackdrop === void 0 && $$bindings.regionBackdrop && regionBackdrop !== void 0)
    $$bindings.regionBackdrop(regionBackdrop);
  if ($$props.regionDrawer === void 0 && $$bindings.regionDrawer && regionDrawer !== void 0)
    $$bindings.regionDrawer(regionDrawer);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  if ($$props.describedby === void 0 && $$bindings.describedby && describedby !== void 0)
    $$bindings.describedby(describedby);
  classesPosition = presets[position].alignment;
  classesWidth = width ? width : presets[position].width;
  classesHeight = height ? height : presets[position].height;
  classesRounded = rounded ? rounded : presets[position].rounded;
  classesBackdrop = `${cBackdrop} ${bgBackdrop} ${padding} ${blur} ${classesPosition} ${regionBackdrop} ${zIndex} ${$$props.class ?? ""}`;
  classesDrawer = `${cDrawer} ${bgDrawer} ${border} ${rounded} ${shadow} ${classesWidth} ${classesHeight} ${classesRounded} ${regionDrawer}`;
  $$unsubscribe_drawerStore();
  return `

${$drawerStore.open === true ? `
	
	
	<div class="${"drawer-backdrop " + escape(classesBackdrop, true)}" data-testid="drawer-backdrop"${add_attribute("this", elemBackdrop, 0)}>
		
		<div class="${"drawer " + escape(classesDrawer, true)}" data-testid="drawer" role="dialog" aria-modal="true"${add_attribute("aria-labelledby", labelledby, 0)}${add_attribute("aria-describedby", describedby, 0)}${add_attribute("this", elemDrawer, 0)}>
			${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_history;
  let $$unsubscribe_activities;
  let $$unsubscribe_types;
  $$unsubscribe_history = subscribe(history, (value) => value);
  $$unsubscribe_activities = subscribe(activities, (value) => value);
  $$unsubscribe_types = subscribe(types, (value) => value);
  $$unsubscribe_history();
  $$unsubscribe_activities();
  $$unsubscribe_types();
  return `${validate_component(Drawer, "Drawer").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="p-8"><div class="text-4xl font-black">查询参数设置
		</div>
		<div class="pt-4">ASS的活动查询格式为——命令(:参数)<br>
			命令目前分为以下几种：<br>
			<ul class="list-disc py-4"><li><code class="font-black">name:名称（或无前缀直接输入名称）</code>：查询指定名称（严格子串）</li>
				<li><code class="font-black">type:类型</code>：查询指定类型的活动，类型包含：主线、支线、剧情、干员密录（与PRTS维持一致）。需要注意的是，干员密录默认不会显示，只有在指定<code>type:干员密录</code>后才会显示</li>
				<li><code class="font-black">char:角色</code>：查询包含指定角色的活动（以剧情中角色名为准）</li>
				<li><code class="font-black">sort:方式</code>：按照指定方式排列查询的剧情，方式包括：<code>name</code>名称，<code>progress</code>阅读进度，<code>last_read</code>阅读进度，<code>type</code>类型</li>
				<li><code class="font-black">rev</code>（无参数）：翻转目前排列顺序</li>
				</ul>		
			请一次输入一个命令，命令格式正确后会在下方以徽章（Badge）显示。
		</div></div>`;
    }
  })}
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
  )}</div>`}

`;
});
export {
  Page as default
};
