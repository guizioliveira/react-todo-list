import * as Checkbox from '@radix-ui/react-checkbox'
import { Trash, Check } from 'phosphor-react'

export type TaskType = {
  id: string
  description: string
  isCompleted: boolean
  createdAt: Date
}

interface TaskProps {
  task: TaskType
  changeStatus: (id: string) => void
  deleteTask: (id: string) => void
}

export function Task({ task, changeStatus, deleteTask }: TaskProps) {
  return (
    <div className="w-full flex p-4 bg-zinc-800 border border-zinc-700 rounded-lg justify-between gap-3 items-start">
      <div className="flex gap-3">
        <Checkbox.Root
          className={`w-6 h-6 focus:outline-none rounded-full ${task.isCompleted ? 'border-none' : 'border-2 border-sky-500'}`}
          checked={task.isCompleted}
          onCheckedChange={() => changeStatus(task.id)}
          id={`checkout-${task.id}`}
        >
          <Checkbox.Indicator className="bg-violet-500 w-6 h-6 rounded-full flex items-center justify-center">
            <Check />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label
          htmlFor={`checkout-${task.id}`}
          className={`flex-1 cursor-pointer ${task.isCompleted ? 'text-zinc-600 line-through' : 'text-zinc-200 '}`}
        >
          {task.description}
        </label>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-zinc-500 hover:text-red-400"
        title="Delete"
      >
        <Trash size={24} />
      </button>
    </div>
  )
}
