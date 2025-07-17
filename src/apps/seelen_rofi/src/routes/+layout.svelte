<script lang="ts">
	import { onMount } from "svelte";
	import { window as TauriWindow } from "@seelen-ui/lib/tauri";
	import "../app.css";

	let { children } = $props();

	function handleMouseMove(event: MouseEvent) {
		// const currentWindow = TauriWindow.getCurrentWindow();
		// // Get all elements under the mouse cursor (from top to bottom)
		// const elementsUnderCursor = document.elementsFromPoint(
		// 	event.clientX,
		// 	event.clientY,
		// );
		// if (elementsUnderCursor.length > 0) {
		// 	// Check if all elements in the stack are transparent
		// 	const allTransparent = elementsUnderCursor.every((element) => {
		// 		const computedStyle = window.getComputedStyle(element);
		// 		const backgroundColor = computedStyle.backgroundColor;
		// 		const opacity = computedStyle.opacity;
		// 		return (
		// 			backgroundColor === "rgba(0, 0, 0, 0)" ||
		// 			backgroundColor === "transparent" ||
		// 			opacity === "0"
		// 		);
		// 	});
		// 	currentWindow.setIgnoreCursorEvents(allTransparent);
		// } else {
		// 	// If no element found, consider it transparent
		// 	currentWindow.setIgnoreCursorEvents(true);
		// }
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="w-full h-full overflow-hidden relative"
	onmousemove={handleMouseMove}
>
	{@render children()}
</div>
