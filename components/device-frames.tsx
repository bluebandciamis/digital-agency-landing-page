import { cn } from '@/lib/utils'
import { ImageIcon } from 'lucide-react'

type FrameProps = {
  className?: string
  children?: React.ReactNode
  label?: string
}

function Placeholder({ label = 'Konten preview akan muncul di sini' }: { label?: string }) {
  return (
    <div className="halftone flex h-full w-full flex-col items-center justify-center gap-2 bg-muted px-4 text-center text-ink">
      <div className="flex size-10 items-center justify-center border-[3px] border-ink bg-paper">
        <ImageIcon className="size-5" aria-hidden="true" />
      </div>
      <span className="px-3 text-xs font-bold tracking-wide uppercase">{label}</span>
      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink/70">
        Preview produk
      </span>
    </div>
  )
}

export function PhoneFrame({ className, children, label }: FrameProps) {
  return (
    <div
      role="img"
      aria-label={label ?? 'Mockup smartphone untuk preview produk'}
      className={cn(
        'relative aspect-[9/19] w-full overflow-hidden rounded-[2rem] border-[4px] border-ink bg-ink p-2 shadow-hard',
        className,
      )}
    >
      <div className="absolute top-3 left-1/2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-ink" />
      <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] border-[3px] border-ink bg-paper">
        {children ?? <Placeholder label={label} />}
      </div>
    </div>
  )
}

export function LaptopFrame({ className, children, label }: FrameProps) {
  return (
    <div
      role="img"
      aria-label={label ?? 'Mockup laptop untuk preview produk'}
      className={cn('relative w-full', className)}
    >
      <div className="aspect-[16/10] w-full overflow-hidden rounded-[1rem] border-[4px] border-ink bg-ink p-2 shadow-hard">
        <div className="relative h-full w-full overflow-hidden rounded-[0.75rem] border-[3px] border-ink bg-paper">
          <div className="absolute inset-x-0 top-0 z-10 flex h-6 items-center gap-1.5 border-b-[3px] border-ink bg-paper px-2">
            <span className="size-2.5 rounded-full border-2 border-ink bg-crimson" />
            <span className="size-2.5 rounded-full border-2 border-ink bg-gold" />
            <span className="size-2.5 rounded-full border-2 border-ink bg-magenta" />
          </div>
          <div className="h-full pt-6">{children ?? <Placeholder label={label} />}</div>
        </div>
      </div>
      <div className="mx-auto h-3 w-[108%] -translate-x-[4%] rounded-b-lg border-[4px] border-t-0 border-ink bg-ink" />
    </div>
  )
}
