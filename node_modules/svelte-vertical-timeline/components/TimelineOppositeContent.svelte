<script>import { getContext } from "svelte";
export let style = null;
const config = getContext("TimelineConfig");
const parentPosition = getContext("ParentPosition");
const itemPosition = parentPosition ? parentPosition : config.rootPosition;
</script>

<div class={`timeline-opposite-content ${itemPosition}`} {style}>
	<slot />
</div>

<style>
	.timeline-opposite-content {
		margin: 0;
		flex: 1;
		margin-right: auto;
		margin: 6px 16px;
	}

	.left {
		text-align: left;
	}

	.right {
		text-align: right;
	}
</style>
