# To-Do App

A sleek, responsive, and persistent To-Do list application built with React. This app includes tab-based filtering, local storage support, a dynamic list interface, and intuitive UX interactions.

## 🚀 Live Demo

🔗 [Live Site URL](https://to-do-app-sand-three-30.vercel.app/)  


## 📌 Features

- ✅ **Add Tasks Dynamically** – Create tasks with a simple input form
- ✅ **Mark as Complete** – Mark tasks as complete with one click  
- ✅ **Delete Tasks** – Remove completed or unwanted tasks
- ✅ **Tab Filtering** – Switch between Open, Completed, and All tasks
- ✅ **Local Storage** – Saves tasks between sessions
- ✅ **Responsive Design** – Mobile-friendly layout

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS (optional if used)
- **Icons/Styling:** Custom or library-based
- **Persistence:** Browser Local Storage

## 📂 Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/iamarshalrejith/To-do-App.git
   cd To-do-App
   ```


3. **Install dependencies:**
     ```sh
     npm install
   ```
   

4. **Start the development server:**
    ```sh
    npm run dev
   ```
  

5. **Open your browser:**
     ```sh
     Navigate to `http://localhost:5173/`
   ```
  

## 📂 Project Structure
```
To-do App/
│── public/               # Static files
│── src/
│   ├── components/       
│   │   ├── Header.jsx           # App title and task summary
│   │   ├── Tabs.jsx             # Open / Completed / All filter tabs
│   │   ├── TodoInput.jsx        # Input form for new todos
│   │   ├── TodoList.jsx         # Renders the list based on selected tab
│   │   └── TodoCard.jsx         # Individual todo card
│   ├── App.jsx                 # Main component with app logic
│   ├── index.js                # React DOM entry
│── .gitignore
│── package.json
│── README.md
```

## 🔧 Core Logic Overview

- **State Management:** Uses `useState` for tasks and tabs
- **Persistence:** `localStorage` used in `useEffect` for load/save
- **Component Flow:** `App.jsx` manages global state and passes props to components

## 🚀 Deployment

You can deploy this project using any of the following platforms:

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/) (via gh-pages branch)

## 📜 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
