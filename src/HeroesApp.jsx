import { AuthProvider } from "./context/AuthProvider"
import { AppRouter } from "./router/AppRouter"

export const HeroesApp = () => {
  return (
    <AuthProvider>
        <AppRouter/>
    </AuthProvider>
  )
}
