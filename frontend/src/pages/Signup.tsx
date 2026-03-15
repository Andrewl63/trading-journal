import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-200 px-4">
      <div className="w-full max-w-sm rounded-md bg-white px-8 py-10 shadow-lg">
        <h1 className="mb-8 text-center text-4xl font-bold text-black">
          Signup Form
        </h1>

        <div className="mb-6 grid grid-cols-2 overflow-hidden rounded border border-zinc-300">
          <Link
            to="/login"
            className="bg-white py-2 text-center text-sm font-medium text-black"
          >
            Login
          </Link>

          <button
            type="button"
            className="bg-sky-300 py-2 text-sm font-medium text-white"
          >
            Signup
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-black">Email</label>
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

          <div>
            <label className="mb-1 block text-sm text-black">Repeat Password</label>
            <input
              type="password"
              className="w-full rounded border border-zinc-300 px-3 py-2 outline-none focus:border-sky-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-sky-300 py-2.5 text-sm font-medium text-white transition hover:bg-sky-400"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}