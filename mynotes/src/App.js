import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import NotesPage from "./pages/NotesPage";
import NotePage from "./pages/NotePage";

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
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
