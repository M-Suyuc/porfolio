import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export function TooltipItem({
	children,
	content
}: {
	children: React.JSX.Element
	content: string
}) {
	return (
		<TooltipProvider delayDuration={100}>
			<Tooltip delayDuration={100}>
				<TooltipTrigger asChild>
					<Button variant="ghost" size="icon" className="size-12 p-2 text-white/80">
						{children}
					</Button>
				</TooltipTrigger>
				<TooltipContent side="bottom">
					<p>{content}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
