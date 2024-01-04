import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","asstheme.css","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","logo.svg","mstile-150x150.png","safari-pinned-tab.svg","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.5263a141.js","app":"_app/immutable/entry/app.a68ea832.js","imports":["_app/immutable/entry/start.5263a141.js","_app/immutable/chunks/index.39b96417.js","_app/immutable/chunks/singletons.4367c9ab.js","_app/immutable/chunks/index.b551ee75.js","_app/immutable/chunks/paths.89f36285.js","_app/immutable/entry/app.a68ea832.js","_app/immutable/chunks/index.39b96417.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/activities",
				pattern: /^\/activities\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/activity/[id]",
				pattern: /^\/activity\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/delete",
				pattern: /^\/delete\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/story/[...id]",
				pattern: /^\/story(?:\/(.*))?\/?$/,
				params: [{"name":"id","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
