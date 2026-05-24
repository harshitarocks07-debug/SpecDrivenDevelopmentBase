import { useState } from "react"

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() === "") return

    setTasks([...tasks, task])
    setTask("")
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter(
      (_, i) => i !== index
    )

    setTasks(updatedTasks)
  }

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      <h1>TaskFlow 🚀</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginRight: "10px",
        }}
      />

      <button
        onClick={addTask}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Add
      </button>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginTop: "30px",
        }}
      >
        {tasks.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: "15px",
            }}
          >
            {item}

            <button
              onClick={() => deleteTask(index)}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App