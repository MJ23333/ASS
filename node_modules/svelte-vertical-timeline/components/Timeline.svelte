<script>import { setContext } from "svelte";
export let position = "right";
export let style = null;
setContext("TimelineConfig", { rootPosition: position });
</script>

<ul class="timeline" {style}>
	<slot />
</ul>

<style>
	.timeline {
		display: flex;
		flex-direction: column;
		padding: 6px 16px;
		flex-grow: 1;
	}
</style>
