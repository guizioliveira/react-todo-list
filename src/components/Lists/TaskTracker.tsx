interface TaskTrackerProps {
  tasksCounter: number
  completedTaskes: number
}

export function TaskTracker({
  tasksCounter,
  completedTaskes,
}: TaskTrackerProps) {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex gap-2 font-bold text-sm text-sky-500">
        Tasks Created{' '}
        <span className="font-bold text-xs text-zinc-200 bg-zinc-700 rounded-full px-2 py-[2px]">
          {tasksCounter}
        </span>
      </div>
      <div className="flex gap-2 font-bold text-sm text-violet-400">
        Completed{' '}
        <span className="font-bold text-xs text-zinc-200 bg-zinc-700 rounded-full px-2 py-[2px]">
          {completedTaskes} of {tasksCounter}
        </span>
      </div>
    </div>
  )
}
