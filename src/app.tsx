import { FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { PlusCircle } from 'phosphor-react'
import { Header } from './components/Header'
import { EmptyList } from './components/Lists/EmptyList'
import { Task, TaskType } from './components/Lists/Task'
import { TaskTracker } from './components/Lists/TaskTracker'

const mockedTasks = [
  {
    id: uuidv4(),
    description:
      '1 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: false,
    createdAt: new Date('2024-02-21T03:00:00.000Z'),
  },
  {
    id: uuidv4(),
    description:
      '2 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: true,
    createdAt: new Date('2024-02-22T03:00:00.000Z'),
  },
  {
    id: uuidv4(),
    description:
      '3 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: false,
    createdAt: new Date('2024-02-23T03:00:00.000Z'),
  },
  {
    id: uuidv4(),
    description:
      '4 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: true,
    createdAt: new Date('2024-02-18T03:00:00.000Z'),
  },
]

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>(mockedTasks)
  const [newTask, setNewTask] = useState<string>('')

  const [animateRef] = useAutoAnimate()

  const completedTasks = tasks.filter(
    (task) => task.isCompleted === true,
  ).length

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    if (newTask.trim().length !== 0) {
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          description: newTask,
          isCompleted: false,
          createdAt: new Date(),
        },
      ])
    }
    setNewTask('')
  }

  function handleUpdateNewTaskValue(event: FormEvent<HTMLInputElement>) {
    const currentTask = event.currentTarget.value
    setNewTask(currentTask)
  }

  function handleUpdateTaskStatus(taskId: string) {
    const tasksFilteredById = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task
    })

    setTasks(tasksFilteredById)
  }

  function handleDeleteTask(taskId: string) {
    const tasksWithoutDeleteId = tasks.filter((task) => task.id !== taskId)

    if (!confirm('Are you sure you want to delete this task?')) {
      return
    }
    setTasks(tasksWithoutDeleteId)
  }

  return (
    <>
      <Header />
      <main className="w-full mx-auto p-6 md:max-w-screen-md md:px-0">
        <form
          onSubmit={handleCreateNewTask}
          className="flex gap-2 -mt-[3.4rem] mb-16"
        >
          <input
            className="w-full bg-zinc-800 p-4 rounded-lg border border-zinc-950"
            placeholder="Add a new task..."
            value={newTask}
            onChange={handleUpdateNewTaskValue}
          />
          <button
            className="flex rounded-lg bg-sky-700 p-4 gap-2 items-center font-bold disabled:opacity-70"
            type="submit"
            disabled={!newTask.trim().length}
          >
            Add
            <PlusCircle weight="bold" />
          </button>
        </form>

        <TaskTracker
          tasksCounter={tasks.length}
          completedTaskes={completedTasks}
        />

        <div className="mt-6">
          {tasks.length > 0 ? (
            <div ref={animateRef} className="space-y-3">
              {tasks
                .sort((a, b) => {
                  if (a.isCompleted !== b.isCompleted) {
                    return b.isCompleted ? -1 : 1
                  }
                  return (
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                  )
                })
                .map((task) => {
                  return (
                    <Task
                      key={task.id}
                      task={task}
                      changeStatus={handleUpdateTaskStatus}
                      deleteTask={handleDeleteTask}
                    />
                  )
                })}
            </div>
          ) : (
            <EmptyList />
          )}
        </div>
      </main>
    </>
  )
}
