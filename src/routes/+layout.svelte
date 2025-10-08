<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	import { uiState } from '../state/uiState.svelte';
	let { children } = $props();

	$effect(() => {
		setTimeout(() => {
			uiState['notif-1'] = true;
			setTimeout(() => {
				uiState['notif-1'] = false;
			}, 3500);
		}, 2000);
	});
</script>

<!-- <div
	class=" fixed top-2 right-2 flex h-[5rem] w-[20rem] flex-col items-center justify-center rounded-lg bg-amber-500"
	style={`${uiState['notif-1'] ? 'transform:translateY(0%)' : 'transform:translateY(-150%);'};` +
		'transition: linear 0.3s;'}
>
	<p class=" text-amber-900">This page is an archaological finding</p>
	<small class="  text-white">Source: Trust me bro</small>
</div> -->
{@render children()}
