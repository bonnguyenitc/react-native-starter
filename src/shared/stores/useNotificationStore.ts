import { create } from 'zustand'

export type Notification = {
  id: string
  type: 'info' | 'warning' | 'success' | 'error'
  title: string
  message?: string
}

type State = {
  notifications: Notification[]
}

type Action = {
  addNotification: (notification: Omit<Notification, 'id'>) => void
  dismissNotification: (id: string) => void
}

export const useNotificationStore = create<State & Action>(set => ({
  notifications: [],
  addNotification: notification =>
    set(state => ({
      notifications: [...state.notifications, { id: Math.random().toString(), ...notification }],
    })),
  dismissNotification: id =>
    set(state => ({
      notifications: state.notifications.filter(notification => notification.id !== id),
    })),
}))
