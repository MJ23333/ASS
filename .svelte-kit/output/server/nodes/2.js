

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.f6470363.js","_app/immutable/chunks/index.39b96417.js","_app/immutable/chunks/ActivityCards.svelte_svelte_type_style_lang.5dd1f5a1.js","_app/immutable/chunks/index.b551ee75.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.552c7a5b.js","_app/immutable/chunks/ProgressRadial.2f47bfaf.js","_app/immutable/chunks/paths.89f36285.js"];
export const stylesheets = ["_app/immutable/assets/2.2ccb5669.css","_app/immutable/assets/ActivityCards.47592024.css","_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
