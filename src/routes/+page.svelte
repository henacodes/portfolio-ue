<script lang="ts">
	import { projects } from '$lib/projects';
	import ProjectCard from '../components/ProjectCard.svelte';
</script>

<img src="/motif-bg.png" class="motif fixed top-0 left-0 -z-10 w-[100vw]" alt="" />

<div class="app">
	<div class=" flex h-[60vh] items-center p-10">
		<div>
			<img src="/247.png" alt="" />
			<p class="  text-8xl font-extrabold text-[#72410D]">Shipping</p>
			<div class=" mt-5 flex gap-5">
				<img class=" h-6 w-6 grayscale" src="svelte.svg" alt="" srcset="" />
				<img class=" h-6 w-6 grayscale" src="typescript.svg" alt="" srcset="" />
				<img class=" h-6 w-6 grayscale" src="next.js.svg" alt="" srcset="" />
				<img class=" h-6 w-6 grayscale" src="react.png" alt="" srcset="" />
				<img class=" h-6 w-6 grayscale" src="node.js.svg" alt="" srcset="" />
				<img class=" h-6 w-6 grayscale" src="supabase.svg" alt="" srcset="" />
			</div>
		</div>
	</div>
	<img src="/tribal-colors.png" class="bottom-0 left-0 mt-48 w-[100vw]" alt="" />
	<div class="bg-[#72410D] py-14">
		<p class=" m-5 text-center text-2xl">Projects</p>
		<div class="  grid grid-cols-3 gap-3">
			{#each projects as project}
				<div class="  flex items-center justify-center">
					<ProjectCard {project} />
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.motif {
		-webkit-mask-image: linear-gradient(to left, black, transparent 70%);
		mask-image: linear-gradient (to left, black, transparent 70%);
	}
</style>
