const Login = ({ login }) => {
  return (
    <div className='h-screen p-4 text-center'>
      <h2>Need to log in</h2>
      <input type='text' id='username' placeholder='Username' />
      <br />
      <br />
      <input type='password' id='password' placeholder='password' />
      <br />
      <button
        onClick={() =>
          login(
            document.getElementById('username').value,
            document.getElementById('password').value
          )
        }
        className='p-2 text-white bg-gray-500 rounded'
      >
        Login
      </button>
    </div>
  )
}

export default Login