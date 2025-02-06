// REACT-ROUTER-DOM
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import { AuthProvider } from "./context/AuthContext.js";
//import AdminRoute from "./components/AdminRoute.jsx";
import { useAuthenticator, Authenticator } from '@aws-amplify/ui-react';


import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import TestPage from "./pages/testPage.tsx"


import CssBaseline from "@mui/material/CssBaseline";
import darkScrollbar from "@mui/material/darkScrollbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar(),
          color: "darkred",
          backgroundColor: "grey",
          "& h1": {
            color: "black"
          }
        }
      }
    }
  }
});

const Layout: React.FC = () => {
  console.log('Layout rendering'); // Check if this logs
  return (
    <>
      <Navbar />
      {/*<Chatbox/>  Save for another time */}
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout page for every part of the site
    errorElement: <ErrorPage />, // error page
    children: [
      {
        index: true, // if it's the "/"" page
        element: <LandingPage />, // page to load
      },
      {
        path: "/ad",
        element: <TestPage />, 
      },
    ]    
  }])

  const App: React.FC = () => {
    return (
      
      <Authenticator>
      {/* {({ signOut, user }) => ( */}
        <div>
          <RouterProvider router={router} />
        {/*   <button onClick={signOut}>Sign out</button> */}
        </div>
       {/*  )} */}
    </Authenticator>
    );
  };
  
  export default App;

  {/* <ThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}
         {/* </ThemeProvider> */}


/*
IMPLEMENT AUTH ENFORCER AND GET USER INFO: https://chatgpt.com/c/679bc8ae-2d84-8008-81b4-297c84c8932f

import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const { user, signOut } = useAuthenticator();
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }

  return (
    <main>
      
      <h1>{user?.signInDetails?.loginId}'s todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li onClick={() => deleteTodo(todo.id)} key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
*/