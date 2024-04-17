"use client"
import Link from "next/link";
import { signIn } from "next-auth/react";
import { register } from "@/utils/action";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

function Register() {
  const handleLogin = async (provider) => {
    await signIn(provider, { callbackUrl: '/' });
  };

  return (
      <div className="h-[90vh] sm:h-screen flex justify-center items-center">
          <div className="bg-white m-auto items-center rounded-lg p-4 w-96 mx-2" style={{boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
            <div>
              <form className="flex flex-col gap-3" action={register}>
              <input type="text" placeholder="username" name="username" className="border border-slate-300 p-2.5 outline-none rounded-lg"/>
              <input type="email" placeholder="email" name="email" className="border border-slate-300 p-2.5 outline-none rounded-lg"/>
              <input type="password" placeholder="password" name="password" className="border border-slate-300 p-2.5 outline-none rounded-lg"/>
              <input type="password" placeholder="password again" name="passwordRepeat" className="border border-slate-300 p-2.5 outline-none rounded-lg"/>
              <button className="bg-red-500 text-white p-2.5 text-sm rounded-lg font-semibold">Register</button>
              </form>
            </div> 
            <div className="mt-3  flex justify-around items-center">
              <div className="w-[40%] border-t border-slate-400"><hr/></div>
              <div className="text-slate-400">or</div>
              <div className="w-[40%] border-t border-slate-400"><hr/></div>
            </div>
            <div className="border border-slate-300 my-3 p-3 text-sm rounded-lg font-semibold ">
              <button onClick={()=>handleLogin("google")} className="flex items-center w-full justify-center"><FcGoogle className="h-6 w-6 mr-5"/>Create account with Google</button>
            </div>
            <div className="bg-black text-white my-3 p-3.5 text-sm rounded-lg font-semibold">
              <button onClick={()=>handleLogin("github")} className="flex items-center w-full justify-center"><BsGithub className="h-5 w-5 mr-5"/>Create account with GitHub</button>
            </div>
            <div className="text-center text-sm font-semibold">
              Already have an account? <Link href="/login" className="text-blue-500">Login</Link>
            </div>
          </div>
      </div>
  );
}

export default Register;
