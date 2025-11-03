import type { Project } from './types/Project';

export const projects: Project[] = [
	{
		id: 'ketav',
		title: 'Ketav',
		description:
			'A local-first cross-platform ebook reader concerned with helping people keep read consistently',
		imageUrl: 'Ketav.png',
		imageUrls: ['Ketav.png', 'Ketav1.png', 'Ketav3.png', 'Ketav4.png', 'Ketav5.png', 'Ketav2.png'],
		techStack: ['Tauri', 'React', 'Drizzle'],
		repoUrl: 'https://github.com/henacodes/ketav'
	},
	{
		id: 'epubix',
		title: 'Epubix',
		description: 'a typescript utility library that parses EPUB files.',
		imageUrl: 'Epubix.png',
		imageUrls: ['Epubix.png'],
		techStack: ['Typescript'],
		repoUrl: 'https://github.com/henacodes/epubix'
	},
	{
		id: 'reut',
		title: 'Reut',
		description: 'A platform that connects AASTU dormmates before they move to campus',
		imageUrl: 'Reut.jpg',
		imageUrls: ['Reut.jpg', 'Reut1.jpg', 'Reut2.jpg'],
		techStack: ['Svelte', 'Drizzle', 'Typescript'],
		repoUrl: 'https://github.com/henacodes/reut',
		liveUrl: 'https://aastu-reut.vercel.app/'
	},
	{
		id: 'bereans',
		title: 'Bereans',
		description:
			'A community-centered bible QnA platform wth focus on trustworhyness and credibility.',
		imageUrl: 'Bereans.png',
		imageUrls: [
			'Bereans.png',
			'Bereans1.png',
			'Bereans2.png',
			'Bereans3.png',
			'Bereans4.png',
			'Bereans5.png'
		],
		techStack: ['NextJs', 'React', 'tRPC', 'Drizzle'],
		repoUrl: 'http://github.com/henacodes/bereans'
	},
	{
		id: 'andimta',
		title: 'Andimta',
		description:
			"A bible study companion tailored to give you Greek/Hebrew manuscripts and Church Fathers' writings.",
		imageUrl: 'Andimta.png',
		imageUrls: ['Andimta.png', 'Andimta1.png', 'Andimta2.png', 'Andimta3.png'],
		techStack: ['Svelte'],
		repoUrl: 'http://github.com/henacodes/andimta-public',
		liveUrl: 'https://andimta.netlify.app'
	},
	{
		id: 'jotter',
		title: 'Jotter',
		description: 'A browser-based rich text editor with syntax highlighting.',
		imageUrl: 'Jotter.png',
		imageUrls: ['Jotter.png', 'Jotter1.png', 'Jotter2.png'],
		techStack: ['Svelte'],
		repoUrl: 'https://github.com/henacodes/jotter',
		liveUrl: 'https://code-jotter.netlify.app/'
	},
	{
		id: 'osmerkato',
		title: 'Osmerkato',
		description: ' A multi-lingual supermarket site  I built for a client',
		imageUrl: 'Osmerkato.png',
		imageUrls: [
			'Osmerkato.png',
			'Osmerkato1.jpg',
			'Osmerkato2.jpg',
			'Osmerkato3.jpg',
			'Osmerkato4.jpg'
		],
		techStack: ['Svelte', 'ExpressJs', 'NodeJs'],
		liveUrl: 'https://osmerkato.com'
	},
	{
		id: 'chakka',
		title: 'Chakka Ecommerce Store',
		description:
			'An online ecommerce store for a company to sell their products with integrated payment methods.',
		imageUrl: 'Chakka.jpg',
		imageUrls: ['Chakka.jpg', 'Chakka1.png', 'Chakka2.png'],
		techStack: ['Svelte', 'Firebase', 'Chappa']
	}
];
