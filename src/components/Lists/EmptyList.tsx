import { ClipboardText } from 'phosphor-react'

export function EmptyList() {
  return (
    <div className="flex flex-col gap-4 h-60 items-center justify-center border-t border-zinc-800 rounded-t-lg text-zinc-400">
      <ClipboardText weight="regular" size={56} className="text-zinc-700" />
      <p className="text-center">
        <strong>You don&apos;t have tasks registered yet</strong>
        <br />
        Add new tasks and organize your to-do items
      </p>
    </div>
  )
}
