import styled from "styled-components"
import { useUser } from "../features/authentication/useUser"
import Spinner from "./Spinner"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate()
  // 1. Load authenticated user
  const { isLoading, isAuthenticated, fetchStatus } = useUser()

  // 2. If there is NO authenticated user, redirect to /login
  // (needs effect, navigate cannot be directly called at comp. level)
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading && fetchStatus !== "fetching") {
        console.log("not authenticated, navigate to /login")
        navigate("/login")
      }
    },
    [isAuthenticated, isLoading, navigate]
  )

  // 3. While loading, show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )
  //const goToLoginPage = () => navigate("login")
  //if (!isAuthenticated) goToLoginPage()

  // 4. If there IS as user, render the app
  if (isAuthenticated) return children
}
