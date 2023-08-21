<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { activities, types, activity, story ,history} from '$lib/stores';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { findCover, parseActivities, parseContent } from '$lib/helper';
	import ActivityCards from '$lib/ActivityCards.svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import DialogueContent from '$lib/DialogueContent.svelte';
	import { goto } from '$app/navigation';
	var pos=0;
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';
	import { check_outros } from 'svelte/internal';
	var res = {};
	function check2(width){
		pos= width>=700?"alternate":"right";
	}
	$:check2(innerWidth);
	var sorted=[];
	var loaded = false;
	var covers;
	var innerWidth=0;
	// console.log("sd");
	onMount(async function () {
		// res=await parseContent("activities/act25side/level_act25side_01_beg");
		if ($activities.length == 0 || $types.length == 0) {
			var result = await parseActivities();
			activities.set(result.activities);
			types.set(result.types);
			for(var act of $activities){
				if(!$history[act.id]){
					var newhistory = { ...$history };
					newhistory[act.id]={lastread:0};
					history.set(newhistory);
				}
				for(var s of act.infoUnlockDatas){
					if(!$history[act.id][s.storyTxt]){
						var newhistory = { ...$history };
						newhistory[act.id][s.storyTxt]={lastread:0}
						history.set(newhistory);
					}
				}
			}
			console.log($history);
			console.log('get');
		}
		console.log($page.params.id);
		for (var act of $activities) {
			if (act.id == $page.params.id) {
				var newhistory={...$history};
				newhistory[act.id].lastread=Date.now();
				history.set(newhistory);
				console.log($history);
				activity.set(act);
				story.set({});
			}
		}
		console.log($activity);
		if (!$activity.name) {
			goto('/activities/');
		} else {
			sorted=[...$activity.infoUnlockDatas].sort((a,b)=>$history[$activity.id][a.storyTxt].lastread<$history[$activity.id][b.storyTxt].lastread)
			console.log(sorted);
			loaded = true;
		}
		// $:console.log(width);
		// activities=res.activities;
		// types=res.types;
		// console.log(activities);
		// loaded=true;

		// console.log(json);
		// console.log(categories);
	});
</script>
<svelte:window bind:innerWidth />
<svelte:head>
	<link
		href="http://fonts.geekzu.org/css2?family=Noto+Sans+SC:wght@400;700;900&display=swap"
		rel="stylesheet"
	/>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</svelte:head>
{#if loaded}
<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-2" slotDefault="place-self-left" slotTrail="place-content-end">
			
				<ol class="breadcrumb flex">
					<li class="crumb"><a class="font-bold text-primary-700" href="/">主页</a></li>
					<li class="crumb-separator" aria-hidden>/</li>
					<li class="crumb"><a class="font-bold text-primary-700" href="/activities">活动选择</a></li>
					<li class="crumb-separator" aria-hidden>/</li>
					<li class="font-bold text-primary-700 crumb">{$activity.name}</li>
				</ol>
				<svelte:fragment slot="trail">{#if $history[$activity.id][sorted[0].storyTxt].lastread>0}
					<div class="flex sm:flex-row flex-col items-center">
					<i class="fas fa-history"></i><a class="text-primary-700 font-bold" href="/story/{sorted[0].storyTxt}">{sorted[0].storyName + ' ' + sorted[0].avgTag}</a>
					</div>
				{/if}
					</svelte:fragment>
				
			
		</AppBar>
	</svelte:fragment>
	<main>
		
			<div class="block">
				<div class="md:w-3/4 m-auto">
					<div class="flex justify-center p-4">
						<span class="text-center text-5xl font-black inline-block">{$activity.name}</span>
					</div>
					{#if $activity.cover}
						<div
							class="m-auto md:w-1/2 w-full bg-cover aspect-[21/9] block text-center overflow-hidden p-10"
							style="background-image: url('{$activity.cover}')"
							title={$activity.name}
						/>
					{:else}
						<div
							class="m-auto md:w-1/2 w-full aspect-[21/9] block bg-cover text-center overflow-hidden p-10
                "
							style="background-color:black"
							title={$activity.name}
						/>
					{/if}
					{#key pos}
					<Timeline position={pos}>
						{#each $activity.infoUnlockDatas as story}
							<TimelineItem>
								<TimelineOppositeContent slot="opposite-content" style={"flex:"+(pos=="alternate"?"1":"0.1")}>
									{#if story.storyCode}
									<p class="text-2xl font-bold text-primary-900">{story.storyCode}</p>
									{/if}
								</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineDot style="background-color:gray"/>
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent style="margin-bottom:2em">
									<a
										class="text-3xl font-black cardname bg-white
									hover:bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text hover:text-transparent box-decoration-clone trans hover:cursor-pointer"
										href="/story/{story.storyTxt}">{story.storyName + ' ' + story.avgTag}</a
									>
									<p  class="text-zinc-300">{story.storyInfo}</p>
								</TimelineContent>
							</TimelineItem>
						{/each}
					</Timeline>
					{/key}
				</div>
			</div>
			<!-- <ActivityCards/> -->
			<!-- <DialogueContent content={res}></DialogueContent> -->
		
		<!-- <Content page="WD-1_赤角小镇之围/BEG"></Content> -->
	</main>
	<!-- ... -->
</AppShell>
{:else}
			<div class="w-full flex justify-center p-5">
			<ProgressRadial ... stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" />
		</div>
		{/if}

<style>
	.trans {
		-webkit-transition: all 0.5s ease;
		-moz-transition: all 0.5s ease;
		-o-transition: all 0.5s ease;
		transition: all 0.5s ease;
	}
	.flex1{
		flex:0.5;
	}
</style>