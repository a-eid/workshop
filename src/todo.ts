import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Todo = {
  id: number
  name: string
}

const initialState: Todo[] = []

const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTodo(state, payload: PayloadAction<Todo>) {
      state.push(payload.payload)
    },
    removeTodo(state, payload: PayloadAction<number>) {},
  },
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
