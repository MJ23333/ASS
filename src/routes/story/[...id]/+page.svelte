<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { activities, types, activity,story,history ,imagemap,charmap,linkmap} from '$lib/stores';
	import { findCover, parseActivities, parseContent ,getImageMap,getCharMap,getLinkMap} from '$lib/helper';
	import ActivityCards from '$lib/ActivityCards.svelte';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import DialogueContent from '$lib/DialogueContent.svelte';
	import { popup} from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import ContentPage from '$lib/ContentPage.svelte';
	// var y=0;
	// $:console.log(`adf${y}`);
	// var story = {};
</script>
<!-- <svelte:window bind:scrollY={y} /> -->
<svelte:head>
	
</svelte:head>
{#key $page.params}
	<ContentPage params={$page.params}></ContentPage>
{/key}
<style>
	/* .fixx{
		position: fixed;
		font-size: 2em;
		color: white;
		font-variant: tabular-nums;
	} */
</style>