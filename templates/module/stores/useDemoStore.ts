import create from 'zustand'

type State = {
  data: string | undefined
}

type Action = {
  changeData: (data: string) => Promise<void>
}

export const useDemoStore = create<State & Action>(set => ({
  data: undefined,
  changeData: async data => {
    set({ data })
  },
}))
