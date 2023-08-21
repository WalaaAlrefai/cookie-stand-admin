import CookieStandAdmin from "@/components/CookieStandAdmin"
import { useAuth } from "@/contexts/authintication"
import LoginForm from "@/components/LoginForm"


export default function Home() {

  const { user, logout } = useAuth()
  return (
    <div>
      {user ? (
        <>
          <CookieStandAdmin />

          
        </>
      ) : (
        <>
          <LoginForm />
        </>
      )}
    </div>
  )
}