import { Navigate } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Toaster } from "react-hot-toast"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"

import GlobalStyles from "./styles/GlobalStyles"

import { DarkModeProvider } from "./context/DarkModeContext"
import ErrorFallback from "./ui/ErrorFallback"
import ProtectedRoute from "./ui/ProtectedRoute"
import AppLayout from "./ui/AppLayout"
import Dashboard from "./pages/Dashboard"
import Bookings from "./pages/Bookings"
import Booking from "./pages/Booking"
import Checkin from "./pages/Checkin"
import Cabins from "./pages/Cabins"
import Users from "./pages/Users"
import Account from "./pages/Account"
import Settings from "./pages/Settings"
import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"

export const router = createBrowserRouter([
  { path: "login", element: <Login /> },
  { path: "*", element: <PageNotFound /> },
  {
    // Note: the ErrorBoundary has to be placed here to catch errors in the entire app
    // It will not work when placed inside the App component for some reason...
    element: (
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace("/")}>
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      </ErrorBoundary>
    ),
    children: [
      { index: true, element: <Navigate replace to="dashboard" /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "bookings", element: <Bookings /> },
      { path: "bookings/:bookingId", element: <Booking /> },
      { path: "checkin/:bookingId", element: <Checkin /> },
      { path: "cabins", element: <Cabins /> },
      { path: "users", element: <Users /> },
      { path: "account", element: <Account /> },
      { path: "settings", element: <Settings /> },
    ],
  },
])

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      // staleTime: 0,
    },
  },
})

export default function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        {import.meta.env.DEV && <ReactQueryDevtools />}
        <GlobalStyles />
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "1rem",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-800)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  )
}
