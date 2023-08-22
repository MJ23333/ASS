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
    var clear=false;
    onMount(()=>{
        if(localStorage){
            localStorage.clear(); 
        }
        clear=true;
		setTimeout(()=>{goto("/")}, 5000); 
    })
	// var y=0;
	// $:console.log(`adf${y}`);
	// var story = {};
</script>
<main>
    {#if clear==true}
        <div class="m-auto text-6xl">清除完成，5s后返回主页</div>
    {/if}
</main>
<!-- <svelte:window bind:scrollY={y} /> -->
<style>
	/* .fixx{
		position: fixed;
		font-size: 2em;
		color: white;
		font-variant: tabular-nums;
	} */
</style>