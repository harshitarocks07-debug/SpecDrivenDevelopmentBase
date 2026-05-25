import { useState } from "react"

function App() {
  const [task, setTask] = useState("")
  const [priority, setPriority] = useState("Medium")
  const [dueDate, setDueDate] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() === "") return

    const newTask = {
      text: task,
      priority,
      dueDate,
      completed: false,
    }

    setTasks([...tasks, newTask])

    setTask("")
    setPriority("Medium")
    setDueDate("")
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter(
      (_, i) => i !== index
    )

    setTasks(updatedTasks)
  }

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks]

    updatedTasks[index].completed =
      !updatedTasks[index].completed

    setTasks(updatedTasks)
  }

  const getPriorityColor = (priority) => {
    if (priority === "High") return "#ff4d6d"
    if (priority === "Medium") return "#ff9f1c"
    return "#2ec4b6"
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #ff9ecf, #ffe0f0)",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "55px",
          marginBottom: "35px",
          color: "#ffffff",
          textShadow: "2px 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        TaskFlow 🚀
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "35px",
        }}
      >
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            padding: "14px",
            width: "260px",
            borderRadius: "14px",
            border: "none",
            outline: "none",
            background: "#fff0f6",
            color: "#333",
            fontSize: "15px",
          }}
        />

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
          style={{
            padding: "14px",
            borderRadius: "14px",
            border: "none",
            outline: "none",
            background: "#fff0f6",
            color: "#333",
            fontSize: "15px",
          }}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) =>
            setDueDate(e.target.value)
          }
          style={{
            padding: "14px",
            borderRadius: "14px",
            border: "none",
            outline: "none",
            background: "#fff0f6",
            color: "#333",
            fontSize: "15px",
          }}
        />

        <button
          onClick={addTask}
          style={{
            padding: "14px 22px",
            borderRadius: "14px",
            border: "none",
            backgroundColor: "#ff4d8d",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "15px",
            boxShadow:
              "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          Add Task
        </button>
      </div>

      <div
        style={{
          maxWidth: "750px",
          margin: "auto",
        }}
      >
        {tasks.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#ffffffcc",
              padding: "25px",
              borderRadius: "20px",
              marginBottom: "25px",
              boxShadow:
                "0 6px 15px rgba(0,0,0,0.15)",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                textDecoration: item.completed
                  ? "line-through"
                  : "none",
                color: "#333",
                marginBottom: "10px",
              }}
            >
              {item.text}
            </h2>

            <p
              style={{
                color: "#333",
                fontSize: "18px",
              }}
            >
              Priority:
              <span
                style={{
                  color: getPriorityColor(
                    item.priority
                  ),
                  fontWeight: "bold",
                  marginLeft: "6px",
                }}
              >
                {item.priority}
              </span>
            </p>

            <p
              style={{
                color: "#333",
                marginBottom: "15px",
              }}
            >
              Due Date:{" "}
              {item.dueDate || "Not set"}
            </p>

            <button
              onClick={() =>
                toggleComplete(index)
              }
              style={{
                marginRight: "10px",
                padding: "10px 16px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#2ec4b6",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {item.completed
                ? "Undo"
                : "Complete"}
            </button>

            <button
              onClick={() => deleteTask(index)}
              style={{
                padding: "10px 16px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#ff4d6d",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App