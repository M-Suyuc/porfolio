import { type Skills } from '@/types/skills'

import AstroIcon from '@/assets/svg/astro.svg'
import CSS from '@/assets/svg/css.svg'
import Tailwind from '@/assets/svg/tailwind.svg'
import Nextjs from '@/assets/svg/nextjs.svg'
import Github from '@/assets/svg/github.svg'
import Git from '@/assets/svg/git.svg'
import HTML from '@/assets/svg/html.svg'
import JavaScript from '@/assets/svg/javascript.svg'
import TypeScript from '@/assets/svg/typescript.svg'
import Prisma from '@/assets/svg/prisma.svg'
import React from '@/assets/svg/react.svg'

export const SKILLS: Skills[] = [
	{
		name: 'Astro',
		image: {
			logo: AstroIcon
		}
	},
	{
		name: 'CSS',
		image: {
			logo: CSS
		}
	},
	{
		name: 'Tailwind',
		image: {
			logo: Tailwind
		}
	},
	{
		name: 'Nextjs',
		image: {
			logo: Nextjs
		}
	},
	{
		name: 'React',
		image: {
			logo: React
		}
	},
	{
		name: 'JavaScript',
		image: {
			logo: JavaScript
		}
	},
	{
		name: 'TypeScript',
		image: {
			logo: TypeScript
		}
	},
	{
		name: 'HTML',
		image: {
			logo: HTML
		}
	},
	{
		name: 'Git',
		image: {
			logo: Git
		}
	},
	{
		name: 'Github',
		image: {
			logo: Github
		}
	},
	{
		name: 'Prisma',
		image: {
			logo: Prisma
		}
	}
]
