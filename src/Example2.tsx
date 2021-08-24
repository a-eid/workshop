import * as React from "react"
import { decrement, increment } from "./counter"
import { useAppDispatch, useAppSelector } from "./store"
import { addTodo } from "./todo"

export function Example2() {
  const counter = useAppSelector(state => state.counter.value)
  const todos = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()
  const [todoName, setTodoName] = React.useState("")

  function handleAddTodo() {
    dispatch(
      addTodo({
        name: todoName,
        id: Date.now(),
      }),
    )
    setTodoName("")
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          dispatch(increment())
        }}
      >
        increment
      </button>

      <button
        onClick={() => {
          dispatch(decrement())
        }}
      >
        decrement
      </button>

      <div>
        <h2>Todos</h2>
        <input
          type="text"
          value={todoName}
          onChange={e => {
            setTodoName(e.target.value)
          }}
        />
        <button onClick={handleAddTodo}>Add Todo</button>

        {todos.map(todo => (
          <div key={todo.id.toString()}>
            <h2>{todo.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
