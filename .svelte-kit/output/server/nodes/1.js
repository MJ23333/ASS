

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3aef4159.js","_app/immutable/chunks/index.39b96417.js","_app/immutable/chunks/stores.d589b532.js","_app/immutable/chunks/singletons.6ca630b6.js","_app/immutable/chunks/index.b551ee75.js","_app/immutable/chunks/paths.2e50f6db.js"];
export const stylesheets = [];
export const fonts = [];
