<script>import { getContext } from "svelte";
export let style = null;
const config = getContext("TimelineConfig");
const parentPosition = getContext("ParentPosition");
const itemPosition = parentPosition ? parentPosition : config.rootPosition;
</script>

<div class={`timeline-content ${itemPosition}`} {style}>
	<slot />
</div>

<style>
	.timeline-content {
		margin: 0;
		flex: 1;
		margin: 6px 16px;
	}

	.left {
		text-align: right;
	}

	.right {
		text-align: left;
	}
</style>
