import { Button } from '@/components/ui/button'
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer'
import clsx from 'clsx'
import { FolderCode, Mail, Menu, User } from 'lucide-react'
import { useState } from 'react'

const pages = [
	{ label: 'Projects', href: '#projects', icon: FolderCode },
	{ label: 'About', href: '#about', icon: User },
	{ label: 'Contact', href: '#contact', icon: Mail }
]

export function DrawerDemo() {
	const [open, setOpen] = useState(false)

	return (
		<>
			<Drawer
				open={open}
				onOpenChange={setOpen}
				shouldScaleBackground={false}
				noBodyStyles
				disablePreventScroll
			>
				<DrawerTrigger asChild>
					<div className="flex justify-between">
						<Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
							<Menu className="size-8 text-white/80" />
							<span className="sr-only">Open menu</span>
						</Button>
						<a href="#">
							<span className="font-mono text-xs font-extralight">M|S</span>
						</a>
					</div>
				</DrawerTrigger>

				<DrawerContent className="text-white">
					<DrawerHeader>
						<DrawerTitle></DrawerTitle>
						<DrawerDescription></DrawerDescription>
					</DrawerHeader>

					{pages.map(({ label, href, icon: Icon }) => {
						return (
							<a
								key={href}
								href={href}
								onClick={() => setOpen(false)}
								className={clsx([
									'hover:text-muted-foreground flex cursor-pointer items-center justify-center gap-[6px] border-b border-neutral-900/50 py-4 font-medium'
								])}
							>
								<Icon className="size-[18px]" />

								{label}
							</a>
						)
					})}
				</DrawerContent>
			</Drawer>
		</>
	)
}
