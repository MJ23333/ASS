export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","asstheme.css","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","logo.svg","mstile-150x150.png","safari-pinned-tab.svg","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".xml":"application/xml",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.7996479c.js","app":"_app/immutable/entry/app.1b5715ba.js","imports":["_app/immutable/entry/start.7996479c.js","_app/immutable/chunks/index.39b96417.js","_app/immutable/chunks/singletons.6ca630b6.js","_app/immutable/chunks/index.b551ee75.js","_app/immutable/chunks/paths.2e50f6db.js","_app/immutable/entry/app.1b5715ba.js","_app/immutable/chunks/index.39b96417.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
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
})();
