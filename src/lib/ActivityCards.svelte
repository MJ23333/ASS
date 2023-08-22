<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { setContext } from 'svelte';
	import { types, activities, query ,history} from '$lib/stores';
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import AnimateSharedLayout from 'svelte-motion/src/components/AnimateSharedLayout/AnimateSharedLayout.svelte';
	import ActivityCard from './ActivityCard.svelte';
	import { goto } from '$app/navigation';
	import { InputChip } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
	import MotionConfig from 'svelte-motion/src/components/MotionConfig/MotionConfig.svelte';
	import { split } from 'postcss/lib/list';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	// export let activitiesdata;
	var items = [];
	var names=[];
	// var queries = {};
	var queries = { type: [], character: [],name: [], soft: '' ,rev:false};
	var query_types = ['type'];
	export let progress={};
	var a = 1;
	var loaded;
	var splitOnce = function (str, delim) {
		var components = str.split(delim);
		var result = [components.shift()];
		if (components.length) {
			result.push(components.join(delim));
		}
		return result;
	};
	// function sort(){
	//     items = items.sort(function() {
	//     return .5 - Math.random();
	//     });
	// }
	function removeDuplicates(arr) {
		const sortIndices = [];
		// 找到以"sort:"开头的字符串的索引
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].startsWith('sort:')) {
				sortIndices.push(i);
			}
		}

		if (sortIndices.length > 1) {
			// 保留最后一个"sort:"字符串的索引，删除其他的
			const lastIndexToKeep = sortIndices.pop();
			sortIndices.forEach((index) => {
				arr[index] = ""; // 标记要删除的字符串为null
			});
		}

		// 创建新数组，跳过标记为null的元素
		const result = arr.filter((item) => item != "");
		return result;
	}
	function parseQuery(q) {
		console.log($query);
		var qs = { type: [], character: [],name:[], sort: '' ,rev:false};
        query.set(removeDuplicates($query));
		for (var qu of q) {
			var res = splitOnce(qu, ':');
			var t = res[0];
			switch (String(t)) {
				case 'type':
					qs.type.push(res[1]);
					break;
				case 'char':
					qs.character.push(res[1]);
					break;
                case 'sort':
                    qs.sort=res[1];
                    break;
				case 'name':
                    qs.name.push(res[1]);
                    break;
                case 'rev':
                    qs.rev=true;
				default:
					break;
			}
		}
		queries = qs;
	}
	function filterActivity(q) {
		var its = [];
        console.log(q);
		for (var act of $activities) {
			if(q.name.length!=0&&!q.name.some(ite=>act.name.includes(ite))){
				continue;
			}
			var ok = false;
			if (!q.type.includes('干员密录') && act.type == '干员密录') {
				continue;
			}
			for (var t of q.type) {
				// console.log(t)
				if (act.type == t) {
					ok = true;
				}
			}
			if (!ok && q.type.length > 0) {
				continue;
			}
			ok = true;
			// console.log(act.characters);
			for (var c of q.character) {
				// console.log(t)
				if (!act.characters.includes(c)) {
					ok = false;
				}
			}
			if (!ok && q.character.length > 0) {
				continue;
			}
			its.push(act);
		}
        switch (q.sort){
            case "name":
                its = its.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "type":
                its = its.sort((a, b) => a.type.localeCompare(b.type));
                break;
			case "last_read":
				its = its.sort((a, b) => $history[a.id].lastread<$history[b.id].lastread);
				break;
			case "progress":
				its = its.sort((a, b) => progress[a.id]<progress[b.id]);
				break;
            default:
                break;
        }
        if (q.rev){
            its=its.reverse();
        }
		items = its;
	}
	$: parseQuery($query);
	$: filterActivity(queries);
	function updateGrid() {
		var its = [];
		for (var act of $activities) {
			its.push(act);
		}
		items=its;
	}
	function isValidQuery(q) {
		var res = splitOnce(q, ':');
		if (!res) {
			return false;
		}
		var t = res[0];
		switch (String(t)) {
			case 'type':
				if (res[1]) {
					return $types.includes(res[1]);
				}
				return false;
				break;
			case 'char':
				if (res[1]) {
					return true;
				}
				return false;
				break;
			case 'name':
				if (res[1]&&names.some(ite=>ite.includes(res[1]))) {
					return true;
				}
				return false;
				break;
			case 'sort':
				if (res[1] && (res[1] == 'name'||res[1] == 'last_read'||res[1] == 'progress'||res[1]=='type')) {
					return true;
				}
				return false;
				break;
            case 'rev':
                if (res[1]) {
                    return false;
                }
				return true;
				break;
			default:
				return false;
				break;
		}
	}
	// setContext('update', { current_type});
	// items = gridHelp.normalize(items, COLS);
	onMount(async function () {
		// parseQuery($query);
		// filterActivity(queries);
		for(var act of $activities){
			names.push(act.name);
		}
		loaded = true;
	});
</script>

<!-- <AppBar> -->

<!-- </AppBar> -->

{#if loaded == true}
<div class="flex justify-center w-full">
	<div class="md:w-1/2 w-4/5 p-4">
		<InputChip
		bind:value={$query}
		name="chips"
		placeholder="查询参数"
		validation={isValidQuery}
	/>
	<div class="p-3">
		<button on:click={()=>{drawerStore.open({position:"left",bgDrawer: 'bg-surface-700 text-white',width: 'w-3/4 md:w-1/3',});}}>点我查看查询方法</button>
	</div>
	</div>
</div>
	<div class="flex justify-center">
		<MotionConfig transition={{ duration: 0.5 }}>
			<AnimateSharedLayout type="crossfade">
				<Motion let:motion={grid} layout>
					<div
						use:grid
						class="grid gap-14 grid-cols-[repeat(auto-fill,300px)] g-rows justify-center w-3/4"
					>
						{#each items as item (item.id)}
							<ActivityCard act={item} progress={progress[item.id]}/>
						{/each}
					</div>
				</Motion>
			</AnimateSharedLayout>
		</MotionConfig>
	</div>
{:else}
	Loading
{/if}

<style>
	p {
		color: black;
	}
	.g-rows {
		grid-auto-rows: 230px;
	}
	/* .container {
		display:grid;
		grid-template-columns:auto auto auto;
	} */
</style>
