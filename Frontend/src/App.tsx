import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "contexts/UserProvider";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ToastContainer />
        <Router />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
