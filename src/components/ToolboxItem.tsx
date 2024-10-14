export const ToolboxItem = ({
	items
}: {
	items: {
		title: string
		icon: string
	}[]
}) => {
	return (
		<div className="[animation-duration:30s]">
			{items.map((item) => (
				<div className="inline-flex items-center gap-2 rounded-lg px-3 py-2 outline outline-2 outline-white/10">
					{/* <item.icon className='size-10 object-cover' /> */}
					{item.icon}
					<span className="font-semibold">{item.title}</span>
				</div>
			))}
		</div>
	)
}
