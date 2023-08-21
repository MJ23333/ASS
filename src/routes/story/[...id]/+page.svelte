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
	<meta name="referrer" content="no-referrer">
	<link
		href="http://fonts.geekzu.org/css2?family=Noto+Sans+SC:wght@400;700;900&display=swap"
		rel="stylesheet"
	/>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.css" integrity="sha512-CIYsJUa3pr1eoXlZFroEI0mq0UIMUqNouNinjpCkSWo3Bx5NRlQ0OuC6DtEB/bDqUWnzXc1gs2X/g52l36N5iw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js" integrity="sha512-RWosNnDNw8FxHibJqdFRySIswOUgYhFxnmYO3fp+BgCU7gfo4z0oS7mYFBvaa8qu+axY39BmQOrhW3Tp70XbaQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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