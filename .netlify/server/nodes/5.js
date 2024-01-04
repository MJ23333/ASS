

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/delete/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.8b6f9708.js","_app/immutable/chunks/index.39b96417.js","_app/immutable/chunks/ActivityCards.svelte_svelte_type_style_lang.5dd1f5a1.js","_app/immutable/chunks/index.b551ee75.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.552c7a5b.js","_app/immutable/chunks/navigation.25373cf1.js","_app/immutable/chunks/singletons.4367c9ab.js","_app/immutable/chunks/paths.89f36285.js"];
export const stylesheets = ["_app/immutable/assets/ActivityCards.47592024.css","_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
