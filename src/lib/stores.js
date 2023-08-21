import { writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';
export const activities = writable([]);
export const types=writable([]);
export const query=writable([]);
export const activity = writable({});
export const story = writable({});
export const imagemap=writable({});
export const charmap=writable({});
export const linkmap=writable({});
export const musicmap=writable({});
export const history = localStorageStore('history', {});
export const wantmusic = localStorageStore('wantmusic', false);