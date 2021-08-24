import * as React from "react"
import { useDispatch } from "react-redux"
import { decrement, increment } from "./counter"
import { useAppDispatch, useAppSelector } from "./store"
import { addTodo, editTodo, Todo } from "./todo"

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
          <TodoItem key={todo.id.toString()} todo={todo} />
        ))}
      </div>
    </div>
  )
}

function TodoItem({ todo }: { todo: Todo }) {
  const [editing, setEditing] = React.useState(false)
  const [todoName, setTodoName] = React.useState(todo.name)
  const dispatch = useDispatch()

  function handleSave() {
    setEditing(false)
    dispatch(
      editTodo({
        name: todoName,
        id: todo.id,
      }),
    )
  }

  return (
    <div style={{ display: "flex" }}>
      {editing ? (
        <>
          <input type="text" value={todoName} onChange={e => setTodoName(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h2>{todo.name}</h2>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </div>
  )
}
