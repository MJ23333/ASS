<script>
	//@ts-nocheck
	export let content;
	import { popup } from '@skeletonlabs/skeleton';
	import { afterUpdate, onDestroy } from 'svelte';
	import { imagemap, charmap, linkmap, musicmap } from '$lib/stores';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	const source_url = 'https://static.prts.wiki/';
	let y;
	function fun_get_audio_url(key) {
		if (!key) return '';
		let p = key.toLowerCase();
		console.log(p);
		return key.startsWith('$')
			? $musicmap[p.substr(1)]
			: key.startsWith('@')
			? source_url + p.substr(1)
			: source_url + p.replace('sound_beta_2', 'music') + '.mp3';
	}
	function fun_char_link(key_data) {
		let n,
			i,
			links = $linkmap;
		let m = key_data.match(/^([^@#$]+)(?:([@#$])([a-z\d]+)|#(\d+)\$(\d+))?$/);
		if (m == null) {
			return [-1, -1];
		}
		(n = m[1]), (i = m[3]);
		if (links[n] == undefined) {
			return [-1, -1];
		}
		if (m[2] == '$' || (m[4] && m[5])) {
			let g = '$' + (m[5] || i); //group
			i = m[4] || i;
			let ps = links[n].array.findIndex((v) => v.name.endsWith(g)),
				pe = links[n].array.findIndex((v, vi) => !v.name.endsWith(g) && vi > ps);
			if (ps == -1) {
				fun_msg(
					-1,
					false,
					'The analyze key [' + n + ':' + i + '] not exist,use the default char to instead.'
				);
				return [n, 0];
			}
			pe = pe == -1 ? links[n].array.length - 1 : pe - 1;
			if (m[2]) return [n, ps];
			try {
				i--;
			} catch (err) {
				i = ps;
			}
			if (i > pe - ps) {
				i = ps;
			}
			return [n, i + ps];
		} else if (m[2] == '#') {
			try {
				i--;
			} catch (err) {
				i = 0;
			}
			if (i >= links[n].array.length) {
				i = 0;
			}
			return [n, i];
		} else if (m[2] == '@') {
			for (let idx = 0; idx < links[n].array.length; idx++)
				if (links[n].array[idx].alias == i) return [n, idx];
			return [n, 0];
		}
		return [n, 0];
	}
	function fun_char_format(keys) {
		var key = keys[0],
			idx = keys[1];
		if (!$linkmap[key]) {
			return key;
		}
		return $linkmap[key].array[idx].name;
	}
	var le = [];
	// export let y;
	var box;
	var ap;
	var audios = [];
	$: console.log(y);
	afterUpdate(() => {
		audios=[];
		for (var line of content.lines) {
			if (line.type == 'playMusic' && line.key) {
				audios.push({ name: line.key, artist: '塞壬唱片', url: fun_get_audio_url(line.key) });
			}
		}
		console.log(audios);
		ap = new APlayer({
			container: document.getElementById('aplayer'),
			mini: true,
			fixed: true,
			autoplay: false,
			theme: '#FADFA3',
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
	});
	onDestroy(()=>{ap.destroy()});
	$:console.log(y);
	// afterUpdate(()=>{
	// 	for (var l of le) {
	// 		l.remove();
	// 	}
	// 	le=[];
	// 	for(var line of content.lines){
	// 		if(line.type=="Decision"){
	// 			let i=0;
	// 			for(var option of line.options){
	// 				// console.log(document.querySelector("#line"+line.id+"opt"+i));
	// 				// console.log('#'+option.id);
	// 				le.push(new LeaderLine(
	//             LeaderLine.mouseHoverAnchor({ element: document.querySelector("#line"+line.id+"opt"+i+" .dec"), style: { backgroundColor: null, backgroundImage: null }, hoverStyle: { backgroundColor: null }, showEffectName: 'draw', animOptions: { duration: 200, timing: [0.58, 0, 0.42, 1] } }),
	//             document.querySelector('#line'+option.id+" .opt"),
	//             {
	//                 color: 'rgb(176, 15, 1)',
	//                 size: 3,
	//                 dash: true,
	//                 hide: true,
	//                 dropShadow: true
	//             }));
	// 			i++;
	// 			}
	// 		}
	// 	}
	// })
	// var nae=true;
	// while nae==true{

	// }
	// var { current_type } = getContext('update');
	// import { SkeletonImage } from "skeleton-elements/svelte";
</script>
<!-- <svelte:window bind:scrollY={y} /> -->
<div id="aplayer" />
<div class="block" bind:this={box} on:scroll={console.log(box)}>
	<div class="text-lg w-3/4 block m-auto">
		{#each content.lines as line}
			{#if line.type == 'dialogue'}
				<div class="md:flex py-1 margin:auto" id={line.id}>
					<div class="md:basis-1/6 md:text-right pr-3 text-primary-600 font-bold inline text-left">
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
					</div>
					<div class="basis-5/6 text-primary-50 md:flex inline">{line.text}</div>
					<div
						class="card border-4 border-primary-800 flex justify-center"
						data-popup={'popupHover' + line.id.toString()}
					>
						{#if line.figure}
							<img
								class="w-52 flex aspect-[21/9] object-cover object-top"
								src={$charmap[fun_char_format(fun_char_link(line.figure))]}
								alt={line.name}
							/>
						{/if}
						<a
							class="text-center flex justify-center"
							target="_blank"
							href="https://prts.wiki/index.php?search={line.name}&profile=advanced&fulltext=1&ns0=1&ns3000=1"
							>在PRTS上搜索<span class="font-bold">{line.name}</span></a
						>
					</div>
				</div>
				<!-- {#if line.end}
         </span> 
            {/if} -->
			{:else if line.type == 'Text'}
				<div class="flex py-2 justify-center" id={'line' + line.id}>
					<div class="text-primary-50 md:w-5/8">{line.text}</div>
				</div>
			{:else if line.type == 'Decision'}
				<div class="py-3">
					{#each line.options as opt, i}
						<div
							class="text-primary-50 text-center p-2 font-bold"
							id={'line' + line.id + 'opt' + i}
						>
							<span class="dec">{opt.text}</span>
						</div>
					{/each}
				</div>
			{:else if line.type == 'Predicate'}
				<!-- <span class="predicate"> -->
				<div class="md:flex pt-4 pb-2" id={'line' + line.id}>
					<div class="basis-1/6 text-right pr-3 text-primary-600 font-bold text-sm inline">
						<span class="opt">Option {line.references.join(',')}</span>
					</div>
					<div class="basis-5/6 text-primary-50 inline" />
				</div>
			{:else if line.type == 'Image' && line.image}
				<div class="md:flex pt-4 pb-2 justify-center" id={'line' + line.id}>
					<img
						class="md:w-3/5 aspect-[21/9] object-cover"
						src={$imagemap[line.image]}
						alt={line.image}
					/>
				</div>
			{:else if line.type == 'Background' && line.image}
				<div class="md:flex pt-4 pb-2 justify-center" id={'line' + line.id}>
					<img
						class="md:w-3/5 aspect-[21/9] object-cover"
						src={$imagemap['bg_' + line.image]}
						alt={line.image}
					/>
				</div>
			{:else if line.type == 'playMusic' && line.key}
				<div class="md:flex pt-1 pb-1 justify-center text-primary-800" id={'line' + line.id}>
					<button on:click={()=>{ap.list.switch(line.id);ap.play()}}>
						{line.key}
					</button>
				</div>
			{/if}
		{/each}
	</div>
</div>
