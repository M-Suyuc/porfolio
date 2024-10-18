import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { Menu } from 'lucide-react'

export function DrawerDemo({ children }: { children: React.JSX.Element }) {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="ghost" size="icon" className="size-12 text-primary">
					<Menu className="size-8" />
				</Button>
			</DrawerTrigger>
			<DrawerContent>{children}</DrawerContent>
		</Drawer>
	)
}
