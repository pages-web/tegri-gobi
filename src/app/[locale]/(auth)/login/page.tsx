import LoginForm from "@/containers/auth/login-form"
import { Link } from "@/i18n/navigation"
import Image from "next/image"

const Login = () => {
  return (
    <div className="min-h-screen flex w-full">
      <div className="bg-white flex w-1/2 min-h-screen items-center justify-center px-8 lg:px-28 py-8">
        <div className="flex w-full max-w-md flex-col items-center gap-20">
          <Link href="/">
            <Image src="/images/logo-login.png" alt="logo" width={200} height={127} />
          </Link>

          <LoginForm />
        </div>
      </div>

      <div className="w-1/2 min-h-screen relative">
        <Image
          src="/images/4.png"
          alt="login background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

export default Login
