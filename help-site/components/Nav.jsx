
import Image from "next/image"
import Link from "next/link"
import { signIn,signOut,useSession,getProviders} from 'next-auth/react'
function Nav() {
  return (
    <nav className="w-full flex-start ">
     <Image
     src="/assets/images/logo.svg"
     width={30}
     height={30}
     alt="promtopia logo"
     className="object-contain"
     />
     <p className="logo_text">Promptopia</p>
    </nav>
  )
}

export default Nav
