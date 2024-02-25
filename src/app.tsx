import { Header } from './components/Header'
import { PlusCircle, ClipboardText } from 'phosphor-react'

export function App() {
  return (
    <>
      <Header />
      <main className="w-full mx-auto p-6 md:max-w-screen-md md:px-0">
        <form className="flex gap-2 -mt-[3.4rem] mb-16">
          <input
            className="w-full bg-zinc-800 p-4 rounded-lg border border-zinc-950"
            placeholder="Adicione uma nova tarefa"
          />
          <button
            className="flex rounded-lg bg-sky-700 p-4 gap-2 items-center font-bold"
            type="submit"
          >
            Criar
            <PlusCircle weight="bold" />
          </button>
        </form>

        <div className="flex w-full justify-between items-center">
          <div className="flex gap-2 font-bold text-sm text-sky-500">
            Tarefas Criadas{' '}
            <span className="font-bold text-xs text-zinc-200 bg-zinc-700 rounded-full px-2 py-[2px]">
              0
            </span>
          </div>
          <div className="flex gap-2 font-bold text-sm text-violet-400">
            Concluídas{' '}
            <span className="font-bold text-xs text-zinc-200 bg-zinc-700 rounded-full px-2 py-[2px]">
              0
            </span>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex flex-col gap-4 h-60 items-center justify-center border-t border-zinc-800 rounded-t-lg text-zinc-400">
            <ClipboardText
              weight="regular"
              size={56}
              className="text-zinc-700"
            />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
