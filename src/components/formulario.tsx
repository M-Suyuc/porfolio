import { useState } from 'react'
import emailjs from '@emailjs/browser'

const publicKey = 'CWrNt2uatCXv1rhMI'
const serviceID = 'service_lvw2p1q'
const templateID = 'template_q7ixd4q'

const Formulario = () => {
	const [formData, setFormData] = useState({
		from_name: '',
		user_email: '',
		message: ''
	})

	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}
	function sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms))
	}
	const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
		e.preventDefault()
		setError('No está permitido pegar en este campo')
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		emailjs.init(publicKey)

		setLoading(true)
		try {
			await sleep(1000)

			emailjs.send(serviceID, templateID, formData)
			setSuccess(true)
			setFormData({ from_name: '', user_email: '', message: '' })
		} catch (error) {
			console.error('Error al enviar email:', error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<form onSubmit={handleSubmit} className="max-w-lg md:mx-auto">
			<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
				<div className="col-span-2">
					<label htmlFor="name" className="text-foreground block text-sm/6 font-semibold">
						Name
					</label>
					<div className="mt-2.5">
						<input
							onChange={handleChange}
							value={formData.from_name}
							type="text"
							name="from_name"
							onPaste={handlePaste}
							autoComplete="give name"
							required
							placeholder="Alexander Hamilton"
							className="block w-full rounded-md border bg-white/90 px-3.5 py-2 text-black/80 outline-hidden sm:text-sm"
						/>
						{error && <div style={{ color: 'red' }}>{error}</div>}
					</div>
				</div>

				<div className="col-span-2">
					<label htmlFor="email" className="text-foreground block text-sm/6 font-semibold">
						Email
					</label>
					<div className="mt-2.5">
						<input
							onChange={handleChange}
							onPaste={handlePaste}
							type="email"
							name="user_email"
							value={formData.user_email}
							required
							autoComplete="email"
							placeholder="alexander@gmail.com"
							className="block w-full rounded-md border bg-white/90 px-3.5 py-2 text-black/80 outline-1 sm:text-sm"
						/>
						{error && <div style={{ color: 'red' }}>{error}</div>}
					</div>
				</div>

				<div className="col-span-2">
					<label htmlFor="message" className="text-foreground block text-sm/6 font-semibold">
						Message
					</label>
					<div className="mt-2.5">
						<textarea
							onChange={handleChange}
							name="message"
							value={formData.message}
							rows={4}
							required
							placeholder="I have a question about..."
							className="block w-full rounded-md border bg-white/90 px-3.5 py-2 text-black/80 outline-1 sm:text-sm"
						/>
					</div>
				</div>
			</div>
			<div className="mt-5 md:mt-10">
				<button
					disabled={loading}
					type="submit"
					className="m-4 cursor-pointer rounded-md bg-linear-to-r from-indigo-400 to-purple-500 p-0.5"
				>
					<span className="block rounded-md bg-black px-4 py-2 font-semibold text-white/80 hover:text-white hover:opacity-90">
						{loading ? 'Sending...' : 'Send message'}
					</span>
				</button>
			</div>
			{success && <p className="text-green-500">Sent successfully!</p>}
		</form>
	)
}
export default Formulario
