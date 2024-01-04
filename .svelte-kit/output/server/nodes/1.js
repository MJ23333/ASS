

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.985a981b.js","_app/immutable/chunks/index.39b96417.js","_app/immutable/chunks/stores.d0055b78.js","_app/immutable/chunks/singletons.4367c9ab.js","_app/immutable/chunks/index.b551ee75.js","_app/immutable/chunks/paths.89f36285.js"];
export const stylesheets = [];
export const fonts = [];
