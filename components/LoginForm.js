import { useAuth } from "@/contexts/authintication"

const LoginForm = () => {
  const {login}=useAuth()
  function loginHandler(e){
    e.preventDefault()
    const username= e.target.username.value
    const password=e.target.password.value
    login(username,password)
  }
  return (
    <form className='h-screen p-4 text-center' onSubmit={loginHandler}>
      <h2> Need to log in </h2>
      <input type='text' id='username' placeholder='Username' />
      <br />
      <br />
      <input type='password' id='password' placeholder='password' />
      <br />
      <button type='submit'  
        className='p-2 text-white bg-gray-500 rounded'
      >
        Login
      </button>
    </form>
  )
}

export default LoginForm