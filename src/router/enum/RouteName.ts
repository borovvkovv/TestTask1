import type { RoutePath } from '@/router/enum/RoutePath'

export type RouteNameType = keyof typeof RoutePath
export const RouteName: { [Value in RouteNameType]: Value } = {
  Task1: 'Task1',
  Task2: 'Task2',
} as const
