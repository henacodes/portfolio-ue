<script lang="ts">
  import type { Project } from '$lib/types/Project';

  // Svelte 5 style props
  let { project }: { project: Project } = $props();
const images = $derived<string[]>(
  project.imageUrls?.length
    ? project.imageUrls
    : project.imageUrl
      ? [project.imageUrl]
      : []
);

const hasImages = $derived(images.length > 0);
 

  let showGallery = $state(false);
  let currentIndex = $state(0);

  const openGallery = (start = 0) => {
    if (!project.imageUrls.length) return;
    currentIndex = start;
    showGallery = true;
  };

  const closeGallery = () => {
    showGallery = false;
  };

  const prev = () => {
    if (!hasImages) return;
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  };

  const next = () => {
    if (!hasImages) return;
    currentIndex = (currentIndex + 1) % images.length;
  };

  const onKeydown = (e: KeyboardEvent) => {
    if (!showGallery) return;
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };
</script>

<svelte:window on:keydown={onKeydown} />

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
    {#if hasImages}
      <button
        type="button"
        class="w-full focus:outline-none"
        on:click={() => openGallery(0)}
        aria-label="Open image gallery"
      >
        <img
          src={`/projects/${images[0]}`}
          class="rounded-md w-full object-cover"
          alt={`${project.title} preview image 1 of ${images.length}`}
          loading="lazy"
          decoding="async"
        />
      </button>
    {/if}
    <h2 class="my-2 text-2xl font-bold text-amber-900">{project.title}</h2>
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

      {#if hasImages}
        <button
          type="button"
          on:click={() => openGallery(0)}
          class="flex items-center justify-center rounded border border-amber-600 bg-transparent px-4 py-2 text-sm text-amber-700 hover:bg-amber-50"
        >
          View Gallery
        </button>
      {/if}
    </div>
  </div>

  {#if showGallery}
   
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} image gallery`}
      on:click={closeGallery}
    >
      <!-- Modal content -->
      <div
        class="relative max-w-5xl w-full bg-white rounded-lg shadow-xl overflow-hidden"
        on:click|stopPropagation
      >
        <!-- Close button -->
        <button
          type="button"
          class="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow hover:bg-white"
          aria-label="Close gallery"
          on:click={closeGallery}
        >
          ✕
        </button>

        <!-- Image area -->
        <div class="relative flex items-center justify-center bg-neutral-900">
          <img
            src={`/projects/${images[currentIndex]}`}
            alt={`${project.title} image ${currentIndex + 1} of ${images.length}`}
            class="max-h-[80vh] w-auto object-contain select-none"
            draggable="false"
          />

          <!-- Prev / Next controls -->
          {#if images.length > 1}
            <button
              type="button"
              class="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
              aria-label="Previous image"
              on:click={prev}
            >
              ‹
            </button>
            <button
              type="button"
              class="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
              aria-label="Next image"
              on:click={next}
            >
              ›
            </button>
          {/if}
        </div>

        <!-- Dots / Thumbnails -->
        {#if images.length > 1}
          <div class="flex items-center justify-between gap-2 p-3">
            <div class="text-sm text-amber-900">
              {currentIndex + 1} / {images.length}
            </div>
            <div class="flex flex-wrap gap-2 justify-end">
              {#each images as img, i}
                <button
                  type="button"
                  class="h-12 w-16 overflow-hidden rounded border transition
                    {i === currentIndex ? 'border-amber-600 ring-2 ring-amber-300' : 'border-transparent hover:border-amber-300'}"
                  aria-label={`Go to image ${i + 1}`}
                  on:click={() => (currentIndex = i)}
                >
                  <img
                    src={`/projects/${img}`}
                    alt={`${project.title} thumbnail ${i + 1}`}
                    class="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>