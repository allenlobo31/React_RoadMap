import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}))

export default function Counter() {
  const { count, inc, dec } = useStore()
  return (
    <div class="p-4 text-center text-2xl font-bold">
      <button onClick={dec} class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">-</button>   
      <span class="mx-4">{count}</span>
      <button onClick={inc} class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">+</button>
    </div>
  )
}