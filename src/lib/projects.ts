import type { Project } from './types/Project';

export const projects: Project[] = [
	{
		id: 'epubix',
		title: 'Epubix',
		description: 'a typescript utility library that parses EPUB files.',
		imageUrl: 'Epubix.png',
		techStack: ['Typescript'],
		repoUrl: 'https://github.com/henacodes/epubix'
	},
	{
		id: 'bereans',
		title: 'Bereans',
		description:
			'A community-centered bible QnA platform wth focus on trustworhyness and credibility.',
		imageUrl: 'Bereans.png',
		techStack: ['NextJs', 'React', 'tRPC', 'Drizzle'],
		repoUrl: 'http://github.com/henacodes/bereans'
	},
	{
		id: 'andimta',
		title: 'Andimta',
		description:
			"A bible study companion tailored to give you Greek/Hebrew manuscripts and Church Fathers' writings.",
		imageUrl: 'Andimta.png',
		techStack: ['Svelte'],
		repoUrl: 'http://github.com/henacodes/andimta-public',
		liveUrl: 'https://andimta.netlify.app'
	},
	{
		id: 'jotter',
		title: 'Jotter',
		description: 'A browser-based rich text editor with syntax highlighting.',
		imageUrl: 'Jotter.png',
		techStack: ['Svelte'],
		repoUrl: 'https://github.com/henacodes/jotter',
		liveUrl: 'https://code-jotter.netlify.app/'
	},
	{
		id: 'e-kushina',
		title: 'E-Kushina',
		description: 'A recipe web app with dozens of recipes and video tutorials for each.',
		imageUrl: 'E-Kushina.png',
		techStack: ['Firebase', 'Svelte'],
		repoUrl: 'https://github.com/henacodes/habeshan-recipe',
		liveUrl: 'https://madbet-recipe.vercel.app/'
	},
	{
		id: 'osmerkato',
		title: 'Osmerkato',
		description: 'An ecommerce site for a client.',
		imageUrl: 'Osmerkato.png',
		techStack: ['Svelte', 'ExpressJs', 'NodeJs'],
		liveUrl: 'https://osmerkato.com'
	},
	{
		id: 'chakka',
		title: 'Chakka Ecommerce Store',
		description:
			'An online ecommerce store for a company to sell their products with integrated payment methods.',
		imageUrl: 'Chakka.jpg',
		techStack: ['Svelte', 'Firebase', 'Chappa']
	},
	{
		id: 'restaurant-management',
		title: 'Restaurant Management',
		description: 'A restaurant management system made for a client.',
		imageUrl: 'Restaurant.jpg',
		techStack: ['ReactJs', 'ExpressJs', 'MongoDB']
	}
];
