export const getGradientClasses = (index: number) => {
	const gradients = [
		'bg-[linear-gradient(120deg,var(--tw-gradient-stops))] from-yellow-300/80 to-rose-600/80 shadow-rose-600/20',
		'bg-[linear-gradient(40deg,var(--tw-gradient-stops))] from-pink-300/80 to-violet-500/40 shadow-violet-500/20',
		'bg-[linear-gradient(140deg,var(--tw-gradient-stops))] from-cyan-400/80 to-indigo-700/50 shadow-indigo-700/20',
		'bg-[linear-gradient(140deg,var(--tw-gradient-stops))] from-orange-500/50 to-yellow-500/80 shadow-yellow-500/20',
		'bg-[linear-gradient(120deg,var(--tw-gradient-stops))] from-green-400/70 to-cyan-600/80 shadow-cyan-600/20',
		'bg-[linear-gradient(120deg,var(--tw-gradient-stops))] from-green-400/70 to-cyan-600/80 shadow-cyan-600/20',
		'bg-[linear-gradient(180deg,var(--tw-gradient-stops))] from-gray-200/40 to-rose-500/80 shadow-rose-500/20',
		'bg-[linear-gradient(40deg,var(--tw-gradient-stops))] from-pink-300/80 to-violet-500/40 shadow-violet-500/20'
	]
	return gradients[index] || ''
}
