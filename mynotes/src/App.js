import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import NotesPage from "./pages/NotesPage";
import NotePage from "./pages/NotePage";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NotesPage />,
  },
  {
    path: "/note/:id",
    element: <NotePage />,
  },
]);

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <Header />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
