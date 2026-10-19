import Image from 'next/image'
import { ArrowUpRight, Check } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { ExperienceItem } from '@/utils/types'
import { FC } from 'react'

type Props = {
	item: ExperienceItem
	className?: string
	live?: boolean
	showExternalIcon?: boolean
}

const ExperienceCard: FC<Props> = ({ item, className, live = false, showExternalIcon = false }) => {
	const { title, logo, url, roles, description, achievements, period } = item

	const baseClassName = 'rounded-3xl bg-primary p-4 gap-4 sm:p-5 md:p-6'

	const content = (
		<>
			<div className='flex items-center gap-3 mb-5'>
				<Image
					src={logo}
					alt={`${title} - ${roles.join(', ')} - Arkadiusz Sroczyk`}
					className='rounded-2xl size-14 md:size-16 shrink-0'
				/>
				<div className='min-w-0'>
					<h3 className='text-lg font-semibold text-balance tracking-[-0.04em] flex flex-wrap items-center gap-2 mb-2 leading-tight md:text-xl'>
						{title}
						{live && (
							<span className='inline-flex items-center gap-1.5 rounded-full bg-green/10 px-2 py-0.5 text-xs font-medium tracking-normal text-green'>
								<span className='relative inline-flex size-1.5' aria-hidden='true'>
									<span className='absolute inset-0 rounded-full bg-green/50 motion-safe:animate-ping motion-safe:[animation-duration:2s]' />
									<span className='relative size-1.5 rounded-full bg-green' />
								</span>
								Live
							</span>
						)}
					</h3>

					<div className='flex flex-wrap gap-1'>
						{roles.map((role, index) => (
							<span
								key={index}
								className='bg-primary-800 font-normal text-xs rounded-full px-2 py-0.5 text-white/75 md:text-[13px]'
							>
								{role}
							</span>
						))}
					</div>
				</div>
				{showExternalIcon && <ArrowUpRight className='size-5 text-white/75 shrink-0 ml-auto' aria-hidden='true' />}
			</div>

			{description && (
				<p
					className='text-white/75 text-sm mb-4 text-pretty md:text-15'
					dangerouslySetInnerHTML={{ __html: description }}
				/>
			)}

			{achievements && achievements.length > 0 && (
				<ul className='text-white/75 text-sm mb-7 text-pretty space-y-2 md:text-15'>
					{achievements.map((achievement, index) => (
						<li key={index} className='flex items-start gap-2'>
							<div className='bg-primary-800 rounded-full p-1'>
								<Check className='size-3' />
							</div>
							<p dangerouslySetInnerHTML={{ __html: achievement }} />
						</li>
					))}
				</ul>
			)}

			<p className='font-mono text-white/40 text-[11px] md:text-xs tracking-wider uppercase'>
				{period}
			</p>
		</>
	)

	if (url) {
		return (
			<a
				href={url}
				target='_blank'
				rel='noreferrer noopener nofollow'
				className={twMerge(
					'block outline-2 outline-primary hover:outline-primary-800 focus-visible:outline-white/75 transition-[outline-color_transform] active:outline-primary-800 active:scale-[0.98]',
					baseClassName,
					className
				)}
			>
				{content}
			</a>
		)
	}

	return <div className={twMerge(baseClassName, className)}>{content}</div>
}

export default ExperienceCard
