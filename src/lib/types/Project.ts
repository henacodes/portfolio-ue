export interface Project {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
	techStack: string[];
	repoUrl?: string;
	liveUrl?: string;
}
