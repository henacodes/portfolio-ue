<script lang="ts">
	import type { Project } from '$lib/types/Project';

	let props: { project: Project } = $props();
	let { project } = props;
</script>

<div
	class="relative max-w-md overflow-hidden rounded-lg border border-amber-300 bg-gradient-to-br from-orange-100 to-amber-100 p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
>
	<div class="pointer-events-none absolute inset-0 z-0 opacity-20">
		<div
			class="h-full w-full"
			style="
          background-image: radial-gradient(circle at 25% 25%, #92400e 2px, transparent 2px),
                            radial-gradient(circle at 75% 75%, #d97706 2px, transparent 2px);
          background-size: 30px 30px;
        "
		></div>
	</div>

	<div class="relative z-10 mb-4">
		<img src={`/projects/${project.imageUrl}`} class=" rounded-md" alt="" />
		<h2 class="text-2xl font-bold text-amber-900">{project.title}</h2>
	</div>

	<div class="relative z-10">
		<p class="mb-4 text-amber-800">
			{project.description}
		</p>

		<div class="mb-5 flex flex-wrap gap-2">
			{#each project.techStack as tech}
				<span class="rounded bg-amber-200 px-2 py-1 text-xs font-medium text-amber-900">
					{tech}
				</span>
			{/each}
		</div>

		<div class="flex gap-2">
			{#if project.liveUrl}
				<a
					href={project.liveUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="flex flex-1 items-center justify-center rounded bg-amber-600 px-4 py-2 text-sm text-white hover:bg-amber-700"
				>
					<img src="external.svg" alt="Live Preview" class="mr-2" />
					See Live
				</a>
			{/if}

			{#if project.repoUrl}
				<a
					href={project.repoUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center justify-center rounded border border-amber-600 bg-transparent px-4 py-2 text-sm text-amber-700"
				>
					<img src="/github.svg" alt="GitHub" />
				</a>
			{/if}
		</div>
	</div>
</div>
