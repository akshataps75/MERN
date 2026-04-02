# Task manager API

## Architecture:
- **app.js**: Entry point; mounts middleware and links the main router
- **routes/**: Defines URLs and HTTP methods
- **controllers/**: Logic for what happens when a route is hit

## Route Handler:
| Method | Endpoint | Controller function | Description |
| :--- | :--- | :--- | :--- |
| GET | `/` | `getAllTasks` | Returns all tasks |
| POST | `/` | `createTask` | Adds a new task to the system |
| GET | `/:id` | `getTask` | Fetchjes a single task by ID |