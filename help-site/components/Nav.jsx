"use client"
import Image from "next/image"
import Link from "next/link"
import { signIn,signOut,useSession,getProviders} from 'next-auth/react'
import { useEffect, useState } from "react";
function Nav() {
    const isUserLoggedIn=false;
    const [providers,setProviders]=useState(null)
useEffect(()=>{
  const setProvider=async()=>{
    const response=await getProviders();
    setProviders(response);
    console.log(providers)
  }
 setProvider()
},[])

  return (
    <nav className="w-full flex-between ">
        <Link href="/" className="flex gap-2 flex-center">
         <Image
     src="/assets/images/logo.svg"
     width={37}
     height={37}
     alt="promtopia logo"
     className="object-contain"
     />
      <p className="logo_text">Promptopia</p>
        </Link>
   <div className="md:flex hidden"> 
        {isUserLoggedIn ?
        <div className=" flex gap-2 md:gap-5  btn_aligne">
            <Link href="/components" className="black_btn ">
                    create post
            </Link>
            <button href='/signout' className="outline_btn">
                 signOut
            </button>
            <Link href="/profile">
            <Image
            src="/assets/images/logo.svg"
            width={37}
            height={37}
            alt="profile pic"
            className="md:mt-1"
            />
            </Link>
        </div>
    :<>
    {providers &&
    Object.values(providers).map((provider)=>{
      return(
        <button

        className="signin_btn"
        type="button"
        key={provider.name}
        onClick={()=> signIn(provider.id)}
        >
           Sign In
        </button>
      )
    })
    }
    </>}</div>
    
    </nav>
  )
}
export default Nav
