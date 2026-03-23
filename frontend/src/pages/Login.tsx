import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem('isLoggedIn', 'true')
    navigate('/dashboard')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-200 px-4">
      <div className="w-full max-w-sm rounded-md bg-white px-8 py-10 shadow-lg">
        <h1 className="mb-8 text-center text-4xl font-bold text-black">
          Login Form
        </h1>

        <div className="mb-6 grid grid-cols-2 overflow-hidden rounded border border-zinc-300">
          <button
            type="button"
            className="bg-sky-300 py-2 text-sm font-medium text-white"
          >
            Login
          </button>

          <Link
            to="/signup"
            className="bg-white py-2 text-center text-sm font-medium text-black"
          >
            Signup
          </Link>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-black">Username</label>
            <input
              type="email"
              className="w-full rounded border border-zinc-300 px-3 py-2 outline-none focus:border-sky-400"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-black">Password</label>
            <input
              type="password"
              className="w-full rounded border border-zinc-300 px-3 py-2 outline-none focus:border-sky-400"
            />
          </div>

          <p className="text-sm text-pink-400">Forgot password?</p>

          <button
            type="submit"
            className="w-full rounded bg-sky-300 py-2.5 text-sm font-medium text-white transition hover:bg-sky-400"
          >
            Login
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-black">
          Not a member?{' '}
          <Link to="/signup" className="text-pink-400 hover:underline">
            Signup now
          </Link>
        </p>
      </div>
    </div>
  )
}