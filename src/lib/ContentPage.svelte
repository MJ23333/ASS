<script>
	// @ts-nocheck
	import { onMount, afterUpdate, onDestroy } from 'svelte';
	import {
		activities,
		types,
		activity,
		story,
		history,
		imagemap,
		charmap,
		linkmap,
		musicmap,
		wantmusic
	} from '$lib/stores';
	import { SlideToggle } from '@skeletonlabs/skeleton';
	import {
		findCover,
		parseActivities,
		parseContent,
		getImageMap,
		getCharMap,
		getLinkMap,
		getMusicMap
	} from '$lib/helper';
	let main;
	function parseScroll() {
		console.log(main.scrollTop);
	}
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import ActivityCards from '$lib/ActivityCards.svelte';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	// import { page } from '$app/stores';
	import DialogueContent from '$lib/DialogueContent.svelte';
	import { popup } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { offset } from '@floating-ui/dom';
	import { lazyLoad } from './lazy';
	// var story = {};
	var loaded = false;
	var covers;
	export let params;
	const popupList = {
		event: 'focus-click',
		target: 'popupList',
		placement: 'bottom'
	};
	// console.log("sd");
	onMount(async function () {
		// res=await parseContent("activities/act25side/level_act25side_01_beg");
		if ($activities.length == 0 || $types.length == 0) {
			var result = await parseActivities();
			activities.set(result.activities);
			types.set(result.types);
			for (var act of $activities) {
				if (!$history[act.id]) {
					var newhistory = { ...$history };
					newhistory[act.id] = { lastread: 0 };
					history.set(newhistory);
				}
				for (var s of act.infoUnlockDatas) {
					if (!$history[act.id][s.storyTxt]) {
						console.log($history[act.id]);
						var newhistory = { ...$history };
						newhistory[act.id][s.storyTxt] = { lastread: 0 };
						history.set(newhistory);
					}
				}
			}
			console.log($history);
			console.log('get');
		}
		// console.log($charmap);
		var story_ = await parseContent(params.id);
		if (!story_.storyMeta) {
			if (!$activity.name) {
				goto('/activities/');
			} else {
				goto(`/activity/${$activity.id}`);
			}
		} else {
			story.set(story_);
			for (var act of $activities) {
				if (act.id == $story.storyMeta.storyGroup) {
					activity.set(act);
					var newhistory = { ...$history };
					// console.log(newhistory[act.id]);
					newhistory[act.id].lastread = Date.now();
					newhistory[act.id][story_.storyMeta.storyTxt].lastread = Date.now();
					history.set(newhistory);
				}
			}
			loaded = true;
			console.log('story');
			console.log($story);
			// console.log($activity);
		}

		// if(!$activity.name){
		// 	goto("/activities");
		// }
		// activities=res.activities;
		// types=rxes.types;
		// console.log(activities);

		// console.log(json);
		// console.log(categories);
	});
	const source_url = 'https://static.prts.wiki/';
	let y;
	var le = [];
	// export let y;
	var box;
	var ap;
	var pre = [];
	var audios = [];
	var inter;
	var active = null;
	var preactive = null;
	function scrollHandler(event) {
		if (audios.length > 0 && ap) {
			var page_btn = document.getElementById('page').getBoundingClientRect().bottom / 1.5;
			var ele = document.getElementsByClassName('music');
			var activ = null;
			// console.log(page_btn);
			for (var el of ele) {
				// console.log(el.getBoundingClientRect().bottom);
				if (el.getBoundingClientRect().bottom < page_btn) {
					activ = Number(el.dataset.musicid);
				}
			}
			active = activ;
			// console.log(active);
		}
	}
	afterUpdate(() => {
		audios = [];
		if ($story.lines) {
			for (var line of $story.lines) {
				if (line.type == 'playmusic' && line.key) {
					audios.push({
						name: line.key.split('/').slice(-1)[0],
						artist: '塞壬唱片',
						url: line.key
					});
				}
			}
			// console.log("sdf");
			if (audios.length != 0 && pre.length != audios.length && document.getElementById('aplayer')) {
				ap = new APlayer({
					container: document.getElementById('aplayer'),
					fixed: true,
					autoplay: false,
					theme: '#9b9b9b',
					loop: 'one',
					order: 'random',
					preload: 'auto',
					volume: 0.7,
					mutex: true,
					listFolded: false,
					listMaxHeight: 90,
					lrcType: 3,
					audio: audios
				});
				pre = audios;
				var page_btn = document.getElementById('page').getBoundingClientRect().bottom / 1.5;
				var ele = document.getElementsByClassName('music');
				var activ = null;
				// console.log(page_btn);
				for (var el of ele) {
					// console.log(el.getBoundingClientRect().bottom);
					if (el.getBoundingClientRect().bottom < page_btn) {
						activ = Number(el.dataset.musicid);
					}
				}
				active = activ;
			}
		}
	});
	onDestroy(() => {
		console.log('des');
		if (ap) {
			ap.destroy();
		}
		ap = null;
	});
	$: {
		console.log(active);
		if (ap) {
			if (active != null && active >= 0) {
				console.log(active);
				ap.list.switch(active);
				if ($wantmusic) {
					ap.play();
				} else {
					ap.pause();
				}
			} else {
				ap.pause();
			}
			preactive = active;
		}
	}
</script>

{#if loaded}
	<AppShell on:scroll={scrollHandler}>
		<svelte:fragment slot="header">
			<AppBar gridColumns="grid-cols-2" slotDefault="place-self-left" slotTrail="place-content-end">
				<ol class="breadcrumb flex">
					<li class="crumb"><a class="font-bold text-primary-700" href="/">主页</a></li>
					<li class="crumb-separator" aria-hidden>/</li>
					<li class="crumb">
						<a class="font-bold text-primary-700" href="/activities">活动选择</a>
					</li>
					<li class="crumb-separator" aria-hidden>/</li>
					<li class="crumb">
						<a class="font-bold text-primary-700" href="/activity/{$activity.id}"
							>{$activity.name}</a
						>
					</li>
					<li class="crumb-separator" aria-hidden>/</li>
					<li class="crumb">
						<button class="font-bold" use:popup={popupList}
							>{$story.storyMeta.storyName + ' ' + $story.storyMeta.avgTag}</button
						>
					</li>
				</ol>
				<div class="card p-4 max-h-96 overflow-scroll" data-popup="popupList">
					<ul>
						{#each $activity.infoUnlockDatas as s}
							{#if s.storyTxt == $story.storyMeta.storyTxt}
								<li class="text-primary-700 p-1">
									<p>
										{s.storyName + ' ' + s.avgTag}
									</p>
								</li>
							{:else}
								<li class="p-1">
									<a href="/story/{s.storyTxt}">
										{s.storyName + ' ' + s.avgTag}
									</a>
								</li>
							{/if}
						{/each}
						<!-- ... -->
					</ul>
				</div>
				<svelte:fragment slot="trail">
					<SlideToggle name="slider-label" bind:checked={$wantmusic}
						><i class="fas fa-music" /></SlideToggle
					>
				</svelte:fragment>
			</AppBar>
		</svelte:fragment>
		<main>
			<div class="grid grid-cols-3 m-auto md:w-3/4 p-4 font-bold">
				<div class="text-left">
					{#if $story.storyMeta.prev != null}
						<a href="/story/{$activity.infoUnlockDatas[$story.storyMeta.prev].storyTxt}"
							><i class="fas fa-running fa-flip-horizontal" />{$activity.infoUnlockDatas[
								$story.storyMeta.prev
							].storyName +
								' ' +
								$activity.infoUnlockDatas[$story.storyMeta.prev].avgTag}</a
						>
					{/if}
				</div>
				<div class="text-center">
					<span class="font-normal"><i class="fas fa-undo" /></span><a
						href="/activity/{$activity.id}">{$activity.name}</a
					>
				</div>
				<div class="text-right">
					{#if $story.storyMeta.next != null}
						<a href="/story/{$activity.infoUnlockDatas[$story.storyMeta.next].storyTxt}"
							>{$activity.infoUnlockDatas[$story.storyMeta.next].storyName +
								' ' +
								$activity.infoUnlockDatas[$story.storyMeta.next].avgTag}<i
								class="fas fa-running"
							/></a
						>
					{/if}
				</div>
			</div>

			<div class="flex justify-center py-4 items-end">
				<span class="text-right sm:text-5xl text-4xl font-black inline-block pr-4"
					>{$story.storyMeta.storyName}</span
				><span
					><span class="text-left sm:text-3xl text-2xl font-bold inline-block"
						>{$story.storyMeta.avgTag}</span
					></span
				>
			</div>
			<div id="aplayer" class="text-primary-700" />
			<div class="block" bind:this={box}>
				<div class="text-lg w-3/4 block m-auto">
					{#each $story.lines as line}
						{#if (line.type == 'dialogue' || line.type == 'multiline' || line.type == 'subtitle')&&line.text}
							<div class="md:flex py-1 margin:auto" id={line.id}>
								<div
									class="md:basis-1/6 md:text-right pr-3 text-primary-600 font-bold inline text-left"
								>
									{#if line.name}
										<button
											class=""
											use:popup={{
												event: 'click',
												target: 'popupHover' + line.id.toString(),
												placement: 'top'
											}}
										>
											<span>{line.name}</span>
										</button>
									{/if}
								</div>
								<div class="basis-5/6 text-primary-50 md:flex inline">
									{@html line.text.replace('\\n', '<br/>')}
								</div>
								<div
									class="card border-4 border-primary-800"
									data-popup={'popupHover' + line.id.toString()}
								>
									{#if line.figure}
										<img
											class="w-52 flex aspect-[21/9] object-cover object-top m-auto"
											use:lazyLoad={line.figure}
											alt={line.name}
										/>
									{/if}
									<a
										class="text-center m-auto block"
										target="_blank"
										href="https://prts.wiki/index.php?search={line.name}&profile=advanced&fulltext=1&ns0=1&ns3000=1"
										>在PRTS上搜索<span class="font-bold">{line.name}</span></a
									>
								</div>
							</div>
							<!-- {#if line.end}
         </span> 
            {/if} -->
						{:else if (line.type == 'text' || line.type == 'sticker') && line.text}
							<div class="flex py-2 justify-center" id={'line' + line.id}>
								<div class="text-primary-50 md:w-5/8">
									{@html line.text.replace('\\n', '<br/>')}
								</div>
							</div>
						{:else if line.type == 'decision'}
							<div class="py-3">
								{#each Object.entries(line.options) as [i, opt]}
									<div
										class="text-primary-50 text-center p-2 font-bold"
										id={'line' + line.id + 'opt' + i}
									>
										<span class="dec">{opt.text}</span>
									</div>
								{/each}
							</div>
						{:else if line.type == 'predicate'&&line.references}
							<!-- <span class="predicate"> -->
							<div class="md:flex pt-4 pb-2" id={'line' + line.id}>
								<div class="basis-1/6 text-right pr-3 text-primary-600 font-bold text-sm inline">
									<span class="opt">Option {line.references.join(',')}</span>
								</div>
								<div class="basis-5/6 text-primary-50 inline" />
							</div>
						{:else if line.type == 'background' && line.image}
							<div class="md:flex pt-4 pb-2 justify-center" id={'line' + line.id}>
								<img
									class="md:w-3/5 aspect-[21/9] object-cover"
									use:lazyLoad={line.image}
									alt={line.image}
								/>
							</div>
						{:else if line.type == 'image' && line.image}
							<div class="md:flex pt-4 pb-2 justify-center" id={'line' + line.id}>
								<img
									class="md:w-3/5 aspect-[21/9] object-cover"
									use:lazyLoad={line.image}
									alt={line.image}
								/>
							</div>
						{:else if line.type == 'playmusic'}
							{#if line.key}
								<div
									class="md:flex pt-1 pb-1 justify-center text-primary-800 music"
									id={'line' + line.id}
									data-musicid={line.musicid}
								>
									<button
										on:click={() => {
											ap.list.switch(line.musicid);
											ap.play();
										}}
									>
										<i class="inline-block fas fa-volume-up px-3 m-auto" />{line.key
											.split('/')
											.slice(-1)[0]}
									</button>
								</div>
							{/if}
						{:else if line.type.toLowerCase() == 'stopmusic'}
							<div
								class="md:flex pt-1 pb-1 justify-center text-primary-800 music"
								id={'line' + line.id}
								data-musicid="-999"
							>
								<button
									on:click={() => {
										ap.pause();
									}}
								>
									<i class="fas fa-volume-mute px-3" />音乐停止
								</button>
							</div>
						{/if}
					{/each}
				</div>
			</div>
			<!-- <ActivityCards/> -->
			<!-- <DialogueContent content={res}></DialogueContent> -->

			<!-- <Content page="WD-1_赤角小镇之围/BEG"></Content> -->
			<div class="grid grid-cols-3 m-auto md:w-3/4 p-4 font-bold">
				<div class="text-left">
					{#if $story.storyMeta.prev != null}
						<a href="/story/{$activity.infoUnlockDatas[$story.storyMeta.prev].storyTxt}"
							><i class="fas fa-running fa-flip-horizontal" />{$activity.infoUnlockDatas[
								$story.storyMeta.prev
							].storyName +
								' ' +
								$activity.infoUnlockDatas[$story.storyMeta.prev].avgTag}</a
						>
					{/if}
				</div>
				<div class="text-center">
					<span class="font-normal"><i class="fas fa-undo" /></span><a
						href="/activity/{$activity.id}">{$activity.name}</a
					>
				</div>
				<div class="text-right">
					{#if $story.storyMeta.next != null}
						<a href="/story/{$activity.infoUnlockDatas[$story.storyMeta.next].storyTxt}"
							>{$activity.infoUnlockDatas[$story.storyMeta.next].storyName +
								' ' +
								$activity.infoUnlockDatas[$story.storyMeta.next].avgTag}<i
								class="fas fa-running"
							/></a
						>
					{/if}
				</div>
			</div>
		</main>
	</AppShell>
{:else}
	<div class="w-full flex justify-center p-5">
		<ProgressRadial ... stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" />
	</div>
{/if}

<style>
	.mx {
		max-width: 40%;
	}
</style>
