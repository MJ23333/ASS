<script>
	// @ts-nocheck
	import { onMount } from "svelte";
	import {activities,types,activity,history} from "$lib/stores";
	import { AppShell,AppBar } from '@skeletonlabs/skeleton';
	import { findCover, getLinkMap, parseActivities ,parseContent} from "$lib/helper";
	import ActivityCards from "$lib/ActivityCards.svelte";
	import { goto } from '$app/navigation';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import DialogueContent from "$lib/DialogueContent.svelte";
	import { afterUpdate } from "svelte";
	var res={};
	var svg=null;
	var loaded=false;
	var svgclass="";
	var covers;
	onMount(async function () {
		loaded=true;
		// console.log(json);
		// console.log(categories);
	});
	// afterUpdate( ()=> {
		
	// 	if(document){
	// 		console.log("asd");
	// 		if(document.getElementById("图层_1")){
				
	// 			document.getElementById("图层_1").classList.add("active");
	// 		}
	// 	}
	// 	// console.log(json);
	// 	// console.log(categories);
	// })
</script>
{#if loaded}
	<AppShell>
		<svelte:fragment slot="header">
			<AppBar gridColumns="grid-cols-2" slotDefault="place-self-left" slotTrail="place-content-end">
					<ol class="breadcrumb">
						<li class="crumb">主页</li>
					</ol>
					<svelte:fragment slot="trail">
						进入：<a class="text-primary-700 font-bold" href="/activities">活动选择</a>
					</svelte:fragment>
					
			</AppBar>
		</svelte:fragment>
		<main class="">
			<div class="w-full">
				{#if loaded}
				<!-- <ActivityCards/> -->
				<div class="w-full md:w-3/5 m-auto p-6"> 
				<svg class="md:w-100 w-3/4 m-auto" id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.47 485.03" width="438.4700012207031" height="485.0299987792969"><defs><style>.cls-1{fill:#dcdcdc;stroke:#dcdcdc;stroke-width:5px;}.cls-1,.cls-2{stroke-miterlimit:10;}.cls-2{fill:#f5d01f;stroke:#ebc92b;stroke-width:3px;}</style></defs><path class="cls-1 svg-elem-1" d="M363.44,424.81c0-29.47-28.74-58.21-62.52-75.46-41.17-21.05-96.79-47.93-130.07-91.26-17.1-22.28-22.27-50.23-22.27-77.61,0-76.18,74-124.32,155.22-124.32,87.67,0,146.59,32.33,146.59,32.33l1.44,2.16c-6.47,21.56-11.5,60.36-14.37,86.23l-21.56.72c-18.68-35.21-61.08-86.23-104.2-86.23-39.16,0-65.39,33.77-65.39,69.7,0,52.54,34.49,70.43,73.3,88.39,58.13,27,142.28,67.55,142.28,145.88,0,73.3-66.11,140.85-171.75,140.85-87.67,0-154.5-32.34-154.5-32.34l-1.43-2.15C140,480.14,145.7,439.9,148.58,414l18.68-.72c25.15,38.08,85.52,85.51,129.35,85.51C339.87,498.82,363.44,475.83,363.44,424.81Z" transform="translate(-70.64 -53.66)"></path><path class="cls-2 svg-elem-2" d="M111.71,415.59c-4.57-1.15-12.93-1.15-17.12-1.15s-16.73,0-21.29,1.15c38.41-84,75.68-167,112.19-251.39h34.23c32.7,83.29,85.19,213,104.2,251.39-6.46-1.15-28.14-1.15-34.61-1.15s-24.34,0-30.8,1.15c-2.51-9.06-7.23-23.47-13.24-40.7-16.58-31.83-69.4-49.82-102.87-46.36C130,358.73,118.86,388.85,111.71,415.59Zm74.58-189c-11.87,27.73-26.4,59.82-39.9,92.23,36.59-7.34,55.11-4.72,83.48,13.23-14.11-38.22-30.16-79.48-41.34-105.46Z" transform="translate(-70.64 -53.66)"></path><path class="cls-2 svg-elem-3" d="M455.5,360.44c0-15.59-15.21-30.81-33.08-39.93-21.79-11.15-51.23-25.37-68.84-48.3-9.05-11.79-11.79-26.59-11.79-41.08,0-40.31,39.17-65.79,82.15-65.79,46.4,0,77.58,17.11,77.58,17.11l.76,1.14c-3.42,11.41-6.08,31.95-7.6,45.64l-11.41.38C473.38,211,450.94,184,428.12,184c-20.72,0-34.61,17.88-34.61,36.89,0,27.81,18.26,37.28,38.8,46.78,30.76,14.26,75.3,35.75,75.3,77.21,0,38.79-35,74.54-90.9,74.54-46.39,0-81.76-17.12-81.76-17.12l-.76-1.14c3-11.41,6.08-32.7,7.6-46.4l9.89-.38c13.31,20.16,45.26,45.26,68.46,45.26C443,399.61,455.5,387.44,455.5,360.44Z" transform="translate(-70.64 -53.66)"></path></svg>
			</div>
			<div class="m-auto p-3 text-center font-normal md:text-6xl text-3xl"><span class="text-[#ffd700] font-black">A</span>rknights<span class="text-[#ffd700] font-black">S</span>tory<span class="text-[#ffd700] font-black">S</span>ite</div>
			<div class="m-auto p-3 text-center font-black text-3xl">明日方舟剧情站</div>
			<div class="m-auto p-3 text-center font-black text-2xl text-primary-700"><a href="/activities">请选择一个活动</a></div>
			<div class="m-auto p-3 text-center w-4/5 md:w-2/3">网站内使用的游戏图片、游戏音乐和文本原文，仅用于更好地表现游戏资料，其版权属于上海鹰角网络科技有限公司。<br/>
				The images and text used in the website are only for better representation of the game data, and their copyright belongs to Shanghai Hypergryph Network Technology Co., Ltd. </div>
			<div class="text-center text-3xl">
				致谢
			</div>
			<div class=" md:w-2/5 m-auto">
				
				<ul class="list-disc py-4">
					<li><a class="font-black text-primary-700" href="https://github.com/Kengxxiao/ArknightsGameData/" target="_blank">Kengxxiao/ArknightsGameData</a>：游戏数据</li>
					<li><a class="font-black text-primary-700" href="https://prts.wiki/" target="_blank">PRTS.wiki</a>：图片、音频数据，相关数据内容解析逻辑</li>
					<li><a class="font-black text-primary-700" href="https://svelte.dev/" target="_blank">SvelteKit</a>：框架</li>
					
					<li><a class="font-black text-primary-700" href="https://github.com/DIYgod/APlayer/" target="_blank">DIYgod/APlayer</a>：音乐播放器</li>
					<li><a class="font-black text-primary-700" href="https://fontawesome.com/" target="_blank">Font Awesome</a>：图标</li>
					<!-- ... -->
				</ul>		
			</div>
			
				<!-- <DialogueContent content={res}></DialogueContent> -->
			{:else}
				<div class="w-full flex justify-center p-5">
					<ProgressRadial ... stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" />
				</div>
			{/if}
			</div>
		<!-- <DialogueContent content={res}></DialogueContent> -->
	
</main>
	</AppShell>
	{:else}
		<div class="w-full flex justify-center p-5">
			<ProgressRadial ... stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" />
		</div>
	{/if}
	<!-- <Content page="WD-1_赤角小镇之围/BEG"></Content> -->
<style global>
	/***************************************************
 * Generated by SVG Artista on 8/20/2023, 11:05:34 AM
 * MIT license (https://opensource.org/licenses/MIT)
 * W. https://svgartista.net
 **************************************************/
/***************************************************
 * Generated by SVG Artista on 8/21/2023, 11:43:23 PM
 * MIT license (https://opensource.org/licenses/MIT)
 * W. https://svgartista.net
 **************************************************/

 @-webkit-keyframes animate-svg-stroke-1 {
  0% {
    stroke-dashoffset: 2208.420654296875px;
    stroke-dasharray: 2208.420654296875px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 2208.420654296875px;
  }
}

@keyframes animate-svg-stroke-1 {
  0% {
    stroke-dashoffset: 2208.420654296875px;
    stroke-dasharray: 2208.420654296875px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 2208.420654296875px;
  }
}

@-webkit-keyframes animate-svg-fill-1 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(220, 220, 220);
  }
}

@keyframes animate-svg-fill-1 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(220, 220, 220);
  }
}

.svg-elem-1 {
  -webkit-animation: animate-svg-stroke-1 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s both,
                       animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
          animation: animate-svg-stroke-1 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s both,
               animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
}

@-webkit-keyframes animate-svg-stroke-2 {
  0% {
    stroke-dashoffset: 1244.536865234375px;
    stroke-dasharray: 1244.536865234375px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 1244.536865234375px;
  }
}

@keyframes animate-svg-stroke-2 {
  0% {
    stroke-dashoffset: 1244.536865234375px;
    stroke-dasharray: 1244.536865234375px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 1244.536865234375px;
  }
}

@-webkit-keyframes animate-svg-fill-2 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(245, 208, 31);
  }
}

@keyframes animate-svg-fill-2 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(245, 208, 31);
  }
}

.svg-elem-2 {
  -webkit-animation: animate-svg-stroke-2 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s both,
                       animate-svg-fill-2 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
          animation: animate-svg-stroke-2 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s both,
               animate-svg-fill-2 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
}

@-webkit-keyframes animate-svg-stroke-3 {
  0% {
    stroke-dashoffset: 1169.6995849609375px;
    stroke-dasharray: 1169.6995849609375px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 1169.6995849609375px;
  }
}

@keyframes animate-svg-stroke-3 {
  0% {
    stroke-dashoffset: 1169.6995849609375px;
    stroke-dasharray: 1169.6995849609375px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 1169.6995849609375px;
  }
}

@-webkit-keyframes animate-svg-fill-3 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(245, 208, 31);
  }
}

@keyframes animate-svg-fill-3 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(245, 208, 31);
  }
}

.svg-elem-3 {
  -webkit-animation: animate-svg-stroke-3 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s both,
                       animate-svg-fill-3 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
          animation: animate-svg-stroke-3 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s both,
               animate-svg-fill-3 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
}


</style>
