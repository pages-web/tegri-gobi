"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Mail, Lock, Eye, EyeOff, Ghost } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Link } from "@/i18n/navigation"
import { useLogin } from "@/sdk/mutations/auth"
import { LoadingIcon } from "@/components/ui/loading"
import { useTranslations } from "next-intl"



const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const t = useTranslations("Login")

  const formSchema = z.object({
    login: z
      .string()
      .min(1, { message: t("NameRequired") })
      .regex(
        /^[^\s@]+@[^\s@]+\.[^\s@]+|[0-9]{6,}$/,
        t("WrongPhoneOrMail")
      ),
    password: z.string().min(1, { message: t("PasswordRequired") }),
    rememberMe: z.boolean().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  })

  const { login, loading, clientPortalId } = useLogin()

  function onSubmit(values: z.infer<typeof formSchema>) {
    login({
      variables: { ...values, clientPortalId },
    })
  }

  return (
    <div className="flex flex-col items-center gap-6 self-stretch">
      <div className="flex flex-col items-center gap-2.5 self-stretch">
        <h2 className="text-black text-center font-roboto text-3xl font-medium leading-normal self-stretch">{t("Welcome back")}</h2>
        <p className="text-[#4D4D4D] text-center font-roboto text-[18px] font-normal leading-normal self-stretch">
          {t("Glad to see you")}
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 self-stretch max-w-md w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
            <FormField
              control={form.control}
              name="login"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5" />
                      <Input
                        placeholder={t("Email")}
                        {...field}
                        autoComplete="off"
                        className="pl-12 h-12 border border-[#DBDBDB] rounded-full focus:border-[#DBDBDB] transition-all duration-200 text-base"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder={t("Password")}
                        {...field}
                        autoComplete="off"
                        className="pl-12 h-12 border border-[#DBDBDB] rounded-full focus:border-[#DBDBDB] transition-all duration-200 text-base"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between py-2 px-3.5">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal text-[#000000B2]">
                      {t("Remember me")}
                    </FormLabel>
                  </FormItem>
                )}
              />

              <Button
                asChild
                variant="link"
                className="py-0 h-auto font-normal px-0 text-sm text-[#000000B2] hover:text-black"
                tabIndex={-1}
              >
                <Link href="/forgot">{t("Forgot password")}</Link>
              </Button>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-primary hover:bg-primary text-white font-medium rounded-full text-base transition-all duration-200"
              disabled={loading}
            >
              {loading && <LoadingIcon className="mr-2 h-5 w-5" />}
              {loading ? t("SigningIn") : t("SignIn")}
            </Button>

            <Button
              type="button"
              variant="secondary"
              className="w-full h-12 font-medium rounded-full text-base transition-all duration-200"
            >
              {t("Continue with Google")}
            </Button>
          </form>
        </Form>

        <div className="text-center text-[#4D4D4D] font-roboto text-sm mt-6">
          {t("dont")}{" "}
          <Link href="/signup" className="text-primary hover:text-primary font-medium">
            {t("Sign up")}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
