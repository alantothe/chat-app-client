"use client";

import { useEffect, useState } from "react";
import { useLoginUserMutation } from "../../redux/features/user/userApi";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { isLoading, isSuccess, data, error }] =
    useLoginUserMutation();
  const token = useAppSelector((state) => state.tokenReducer);
  const router = useRouter()
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    loginUser({ email, password })
  };
  useEffect(() => {
    if(token.token)
    {
      router.push('/dashboard')
    }
  }, [token]);
  
  return (
    <main>
      <div className="bg-black min-h-screen flex items-center justify-center">
        <section className="bg-[#0C162D] opacity-95 p-4 rounded-lg w-96">
          <header className="justify-start">
            <h1 className="font-mono text-sm text-white opacity-50 justify-start">
              Login Page
            </h1>
            <h3 className="mb-4 font-mono text-sm text-white opacity-50 justify-start">
              Welcome Back to Chattothe!
            </h3>
          </header>
          <form className="flex flex-col item-center">
            <label className="text-[#00CFC8] font-mono font-bold text-sm">
              Enter your email*
            </label>
            <input
              className="text-white mb-5 font-mono text-sm p-1 outline-none bg-inherit border-2 border-[#0E2E70] rounded-md"
              id="email"
              name="email"
              type="email"
              onChange={handleEmailChange}
            />
            <label className="text-[#00CFC8] font-mono font-bold text-sm">
              Enter your password*
            </label>
            <input
              className="text-white mb-5 font-mono text-sm p-1 outline-none bg-inherit border-2 border-[#0E2E70] rounded-md"
              type="password"
              id="password"
              name="password"
              onChange={handlePasswordChange}
            />
            <button
              type="submit"
              className="border-2 border-white cursor-pointer hover:border-green-500 hover:text-green-500 mt-2 text-white opacity-50 rounded px-5
                          py-2 w-full font-bold"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
          <footer>
            <h1 className="font-mono text-sm text-white opacity-50 text-center pt-5">
              New to Chattothe?{" "}
              <span className="text-white opacity-100 hover:underline cursor-pointer">
                Register Here
              </span>
            </h1>
          </footer>
        </section>
      </div>
    </main>
  );
}
