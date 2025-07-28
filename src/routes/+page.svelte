<script lang="ts">
	import { projects } from '$lib/projects';
	import ProjectCard from '../components/ProjectCard.svelte';
	import { me } from '$lib/about';
</script>

<img
	src="/motif-bg.png"
	class="motif fixed top-0 left-0 -z-10 h-[100vh] w-[100vw] scale-200 rotate-45 object-cover"
	alt=""
/>

<div class="app">
	<div class="  h-[] flex h-[80vh] items-center justify-center p-10">
		<div class=" ">
			<img src="/247.png" alt="" />
			<p
				class="text-4xl font-extrabold text-[#72410D] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
			>
				Shipping
			</p>

			<div class=" mt-5 flex gap-5">
				<img class=" h-6 w-6 grayscale" src="svelte.svg" alt="" srcset="" />
				<img class=" h-6 w-6 grayscale" src="typescript.svg" alt="" srcset="" />
				<img class=" h-6 w-6 grayscale" src="next.js.svg" alt="" srcset="" />
				<img class=" h-6 w-6 grayscale" src="react.png" alt="" srcset="" />
				<img class=" h-6 w-6 grayscale" src="node.js.svg" alt="" srcset="" />
				<img class=" h-6 w-6 grayscale" src="supabase.svg" alt="" srcset="" />
			</div>
		</div>

		<div class=" bio-div relative z-10 flex h-full flex-col items-center justify-center">
			<p class=" text-4xl font-semibold text-[#72410D]">{me.name}</p>
			<p>{me.education}</p>

			<p class=" mt-5 font-bold">Tools</p>
			<ul class="flex list-disc">
				{#each me.tools as tool}
					<li class=" mx-4">{tool}</li>
				{/each}
			</ul>
		</div>
	</div>
	<img src="/tribal-colors.png" class=" mt-20 w-[100vw]" alt="" />
	<div class="bg-[#72410D] py-14">
		<p class=" m-5 text-center text-2xl text-[#fff3d2]">Projects</p>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<div class="mx-2 flex items-center justify-center">
					<ProjectCard {project} />
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.motif {
		mask-image: linear-gradient(to left, black, transparent 60%);
		-webkit-mask-image: linear-gradient(to left, black, transparent 60%);
	}

	@media (max-width: 768px) {
		.motif {
			mask-image: linear-gradient(to bottom, black, transparent 30%);
			-webkit-mask-image: linear-gradient(to bottom, black, transparent 30%);
		}
	}

	.bio-div {
		width: 700px;
		background-image: url('/papyrus.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
</style>
