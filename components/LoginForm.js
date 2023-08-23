import { useAuth } from "@/contexts/authintication"
const LoginForm = ({}) => {
  const {login}=useAuth()
  function loginHandler(e){
    e.preventDefault()
    const username= e.target.username.value
    const password=e.target.password.value
    login(username,password)
  }
  return (
    <div className='flex h-screen bg-green-100'>
      <div className='w-full max-w-xs p-5 m-auto bg-green-500 rounded'>
        <header>
          <img
            alt={'logo'}
            className='w-20 mx-auto mb-5'
            src='https://i.ibb.co/xYbY1s4/Press-Cookie-Logo-Icon-Bitten-Left-300x284.png'
          />
        </header>

        <div>
          <label className='block mb-2 ' htmlFor={'username'}>
            Username
          </label>
          <input
            className='w-full p-2 mb-6 border-b-2 border-green-300 outline-none focus:bg-gray-300'
            type='text'
            id='username'
            placeholder='Username'
          />
        </div>
        <div>
          <label className='block mb-2 ' htmlFor={'password'}>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='w-full p-2 mb-6 border-b-2 border-green-300 outline-none focus:bg-gray-300'
            placeholder='password'
          />
        </div>
        <div>
          <button
            onClick={() =>
              login(
                document.getElementById('username').value,
                document.getElementById('password').value
              )
            }
            className='w-full px-4 py-2 mb-6 font-bold text-white bg-green-200 rounded hover:bg-green-700'
          >
            Login
          </button>
        </div>

        <footer className='flex'>
          <a
            className='float-right text-sm text-white hover:text-green-700'
            href='https://cookie-stand-rest.herokuapp.com/admin'
          >
            Create Account
          </a>
        </footer>
      </div>
    </div>
  )
}

export default LoginForm