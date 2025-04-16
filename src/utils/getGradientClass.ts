export const getGradientClasses = (index: number) => {
	const gradients = [
		'bg-gradient-to-r from-yellow-300/80 to-rose-600/80 shadow-[0_4px_6px_-1px_rgba(244,63,94,0.2)]',
		'bg-gradient-to-r from-pink-300/80 to-violet-500/40 shadow-[0_4px_6px_-1px_rgba(139,92,246,0.2)]',
		'bg-gradient-to-r from-cyan-400/80 to-indigo-700/50 shadow-[0_4px_6px_-1px_rgba(79,70,229,0.2)]',
		'bg-gradient-to-r from-orange-500/50 to-yellow-500/80 shadow-[0_4px_6px_-1px_rgba(234,179,8,0.2)]',
		'bg-gradient-to-r from-green-400/70 to-cyan-600/80 shadow-[0_4px_6px_-1px_rgba(6,182,212,0.2)]',
		'bg-gradient-to-r from-green-400/70 to-cyan-600/80 shadow-[0_4px_6px_-1px_rgba(6,182,212,0.2)]',
		'bg-gradient-to-r from-gray-200/40 to-rose-500/80 shadow-[0_4px_6px_-1px_rgba(244,63,94,0.2)]',
		'bg-gradient-to-r from-pink-300/80 to-violet-500/40 shadow-[0_4px_6px_-1px_rgba(139,92,246,0.2)]'
	]
	return gradients[index] || ''
}
