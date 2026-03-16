# Task Manager (React + Vite)

A simple and efficient **Task Manager application** built with **React and Vite**.
This app allows users to create, manage, search, and store tasks locally in the browser.

---

##  Features

* Add new tasks
* Delete tasks
* Mark tasks as completed
* Search tasks
* Categorize tasks (Work / Personal)
* Data persistence using **localStorage**
* Responsive and simple UI

---

## 🛠 Tech Stack

* **React** – Frontend library
* **Vite** – Fast development build tool
* **JavaScript (ES6+)**
* **CSS**

---

##  Project Structure

```
task-manager
│
├── src
│   ├── components
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
│
├── public
├── package.json
└── README.md
```

---

##  Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/task-manager.git
```

### 2️⃣ Navigate into the project folder

```
cd task-manager
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Run the development server

```
npm run dev
```

The app will start at:

```
http://localhost:5173
```

---

##  How It Works

* **useState** manages tasks and search state.
* **useEffect** loads and saves tasks to localStorage.
* Tasks are filtered based on the search input.
* Components are structured for clean separation of logic.

---

##  Future Improvements

Planned enhancements:

* Edit existing tasks
* Filter (All / Completed / Pending)
* Drag and drop task ordering
* Dark mode
* Task due dates
* Improved UI with Tailwind or Bootstrap

---

##  License

This project is open-source and available under the MIT License.

---
