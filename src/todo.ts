import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type Todo = {
  id: number
  name: string
}

const initialState: Todo[] = []

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(todos, { payload }: PayloadAction<Todo>) {
      todos.push(payload)
    },
    removeTodo(state, payload: PayloadAction<number>) {},

    editTodo(todos, { payload }: PayloadAction<Todo>) {
      const index = todos.findIndex(todo => todo.id === payload.id)
      todos[index] = payload
    },
  },
})

export const { addTodo, removeTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer
