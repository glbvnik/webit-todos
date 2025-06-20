export interface Todo {
    id: string
    name: string
    description: string
    comment?: string
    createdTimestamp: number
    updatedTimestamp?: number
    estimatedTimestamp: number
    successTimestamp?: number
}
