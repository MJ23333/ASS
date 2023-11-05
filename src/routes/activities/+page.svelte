<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { activities, types, activity, history } from '$lib/stores';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { findCover, parseActivities, parseContent } from '$lib/helper';
	import ActivityCards from '$lib/ActivityCards.svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import DialogueContent from '$lib/DialogueContent.svelte';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	var res = {};
	var loaded = false;
	var progress = {};
	var sorted = [];
	var covers;
	
	// console.log("sd");
	onMount(async function () {
		// console.log($activities);
		// res=await parseContent("activities/act25side/level_act25side_01_beg");

		if ($activities.length == 0 || $types.length == 0) {
			var result = await parseActivities();
			activities.set(result.activities);
			types.set(result.types);
			for (var act of $activities) {
				// console.log($history[act.id]);
				if (!$history[act.id]) {
					var newhistory = { ...$history };

					newhistory[act.id] = { lastread: 0 };
					history.set(newhistory);
				}
				for (var s of act.infoUnlockDatas) {
					if (!$history[act.id][s.storyTxt]) {
						var newhistory = { ...$history };
						newhistory[act.id][s.storyTxt] = { lastread: 0 };
						history.set(newhistory);
					}
				}
			}
			console.log($history);
			console.log('get');
		}
		sorted = [...$activities].sort((a, b) => $history[a.id].lastread < $history[b.id].lastread);
		for (var act of $activities) {
			// console.log($history[act.id]);
			var p = 0;

			for (var s of act.infoUnlockDatas) {
				if ($history[act.id][s.storyTxt].lastread > 0) {
					p++;
				}
			}
			progress[act.id] = (p / act.infoUnlockDatas.length) * 100;
		}
		// activities=res.activities;
		// types=res.types;
		// console.log(activities);
		loaded = true;
		// console.log(json);
		// console.log(categories);
	});
</script>
<Drawer>
	<div class="p-8">
		<div class="text-4xl font-black">
			查询参数设置
		</div>
		<div class="pt-4">
			ASS的活动查询格式为——命令(:参数)<br/>
			命令目前分为以下几种：<br/>
			<ul class="list-disc py-4">
				<li><code class="font-black">name:名称（或无前缀直接输入名称）</code>：查询指定名称（严格子串）</li>
				<li><code class="font-black">type:类型</code>：查询指定类型的活动，类型包含：主线、支线、剧情、干员密录（与PRTS维持一致）。需要注意的是，干员密录默认不会显示，只有在指定<code>type:干员密录</code>后才会显示</li>
				<li><code class="font-black">char:角色</code>：查询包含指定角色的活动（以剧情中角色名为准）</li>
				<li><code class="font-black">sort:方式</code>：按照指定方式排列查询的剧情，方式包括：<code>name</code>名称，<code>progress</code>阅读进度，<code>last_read</code>阅读进度，<code>type</code>类型</li>
				<li><code class="font-black">rev</code>（无参数）：翻转目前排列顺序</li>
				<!-- ... -->
			</ul>		
			请一次输入一个命令，命令格式正确后会在下方以徽章（Badge）显示。
		</div>
	</div>
</Drawer>
{#if loaded}
	<AppShell>
		<svelte:fragment slot="header">
			<AppBar gridColumns="grid-cols-2" slotDefault="place-self-left" slotTrail="place-content-end">
				<ol class="breadcrumb">
					<li class="crumb"><a class="font-bold text-primary-700" href="/">主页</a></li>
					<li class="crumb-separator" aria-hidden>/</li>
					<li class="crumb font-bold">活动选择</li>
				</ol>
				<svelte:fragment slot="trail">
					
					<div class="flex sm:flex-row flex-col items-center">
						{#if $history[sorted[0].id].lastread > 0}
						<i class="fas fa-history"></i><a class="text-primary-700 font-bold flex" href="/activity/{sorted[0].id}"
							>{sorted[0].name}</a
						>
						{/if}
					</div>
				</svelte:fragment>
			</AppBar>
		</svelte:fragment>
		<main>
			<ActivityCards {progress} />
			<!-- <DialogueContent content={res}></DialogueContent> -->
		</main>
	</AppShell>
{:else}
	<div class="w-full flex justify-center p-5">
		<ProgressRadial ... stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" />
	</div>
{/if}

<!-- <Content page="WD-1_赤角小镇之围/BEG"></Content> -->

<style>
</style>
