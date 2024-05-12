<script>
	//@ts-nocheck
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { query} from "$lib/stores"
	import {goto} from "$app/navigation"
	export let act,progress;
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	function addtype(tn) {
		dispatch('message', {
			typename: tn
		});
	}
	// var { current_type } = getContext('update');
	// import { SkeletonImage } from "skeleton-elements/svelte";
	
</script>

<Motion let:motion layoutId={act.id} layout>
	<div
		use:motion
		class="card variant-ghost-surface overflow-hidden max-w-sm rounded overflow-hidden shadow-lg actcard hover:border-4 border-primary-900 h-700"
	>
		<!-- class="card card-hover relative variant-ghost-surface overflow-hidden max-w-sm rounded overflow-hidden shadow-lg" -->
		{#if act.cover}
			<div
				class="cardcover w-full aspect-[21/9] flex-none bg-clip-border text-center overflow-hidden"
				style="background-image: url('{act.cover}')"
				title={act.name}
			/>
		{:else}
			<div
				class="w-full aspect-[21/9] flex-none bg-cover bg-clip-border text-center overflow-hidden
                "
				style="background-color:black"
				title={act.name}
			/>
		{/if}
		<div class="px-3 py-4 flex justify-between text-right">
			<div class="">
				<button
					class="text-left text-3xl font-black cardname bg-white
            hover:bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text hover:text-transparent box-decoration-clone trans inline-block"
			on:click={()=>goto(`/activity/${act.id}`)}>{act.name}</button
				>
			</div>
			{#if act.type == '干员密录'}
				<div class="">
					<button
						class="text-xl font-medium inline-block cardname bg-white
                hover:bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text hover:text-transparent box-decoration-clone trans text-right min-w-max"
						on:click={() => {addtype("type:"+act.type)}}>{act.charname}</button
					>
					<br/>
					<div>{progress.toFixed(0)+" %"}</div>
				</div>
			{:else}
				<div class="margin-auto">
					<button
						class="text-xl font-medium inline-block cardname bg-white
			hover:bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text hover:text-transparent box-decoration-clone trans text-right min-w-max"
						on:click={() => {addtype("type:"+act.type)}}>{act.type}</button
					>
					<br/>
					<div class="py-2">
						<ProgressRadial value={progress} width="w-10" stroke=80 font=170>{progress.toFixed(0)}%</ProgressRadial>
					</div>
				</div>
			{/if}
		</div>
	</div>
</Motion>
<!-- query.update((q)=>{return q.concat(["type:"+act.type])}); -->

<style>
	/* .cardname {
		font-family: STSong, SimSun, serif;
	} */
	.actcard {
		-webkit-transition: border 0.3s;
		-moz-transition: border 0.3s;
		-o-transition: border 0.3s;
		transition: border 0.3s;
	}
	.cardcover {
		background-size: 110%;
		background-position: -10px -5px;
	}
	.trans {
		-webkit-transition: all 0.5s ease;
		-moz-transition: all 0.5s ease;
		-o-transition: all 0.5s ease;
		transition: all 0.5s ease;
	}
	/* .actcard{
        outline:2px;
    }
	.actcard:hover,
	.actcard:focus {
		outline-offset: 2px;
	} */
	/* .stroke{
        border-width: 2px 3px 2px 5px;
        border-radius: 90% 6% 93% 5% / 5% 94% 7% 95%;
    } */
	/* .card{
        width:200px
    } */
</style>
