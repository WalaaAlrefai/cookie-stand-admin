import CookieStandAdmin from "@/components/CookieStandAdmin"
import { useAuth } from "@/contexts/authintication"
import Login from "@/components/LogIn"


export default function Home() {

  const { user, login } = useAuth()
  return (
    <>
      {user ? (
        <CookieStandAdmin
          
        />
      ) : (
        <>
          <Login login={login} />
        </>
      )}
    </>
  )
      }