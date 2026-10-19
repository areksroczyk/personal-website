import type { FC } from 'react'

interface Props {}

const Footer: FC<Props> = () => {
	return (
		<footer className='px-4 py-6 mt-24 sm:px-6'>
			<p className='text-white/50 text-center text-sm whitespace-nowrap'>
				© 2026 Arek Sroczyk. All rights reserved.
			</p>
		</footer>
	)
}

export default Footer
