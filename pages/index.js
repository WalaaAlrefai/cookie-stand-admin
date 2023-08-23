import CookieStandAdmin from "@/components/CookieStandAdmin"
import { useAuth } from "@/contexts/authintication"
import LoginForm from "@/components/LoginForm"
import useResource from "@/hooks/useResource"

export default function Home() {

  const { user, login, logout } = useAuth()
  const { resources, loading, createResource, deleteResource } = useResource()
  return (
    <div>
      {user ? (
        <>
          <CookieStandAdmin
          stands={resources}
          loading={loading}
          onDelete={deleteResource}
          onCreate={createResource}
          logout={logout} />
        </>
      ) : (
        <>
          <LoginForm />
        </>
      )}
    </div>
  )
}