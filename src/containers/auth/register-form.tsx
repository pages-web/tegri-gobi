"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Link, useRouter } from "@/i18n/navigation"
import { useRegister } from "@/sdk/mutations/auth"
import { Eye, EyeOff } from "lucide-react"
import { passwordZod } from "@/lib/zod"
import { LoadingIcon } from "@/components/ui/loading"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { SuccessPopup } from "@/components/ui/success-popup"
import { PrivacyTermsModal } from "@/components/ui/privacy-terms-modal"



const RegisterForm = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  const t = useTranslations("SignUp")

  const formSchema = z.object({
    firstName: z.string().min(1, { message: t("First name is required") }),
    lastName: z.string().min(1, { message: t("Last name is required") }),
    email: z.string().email({ message: t("Please enter a valid email") }),
    password: passwordZod,
    confirmPassword: z.string().min(1, { message: t("Please confirm your password") }),
    agreeToTerms: z.boolean().refine(val => val === true, {
      message: t("You must agree to the terms and conditions")
    })
  }).refine((data) => data.password === data.confirmPassword, {
    message: t("Passwords dont match"),
    path: ["confirmPassword"],
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  })
  const { register, loading, clientPortalId } = useRegister()

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { confirmPassword, agreeToTerms, ...registerData } = values
    register({
      variables: { ...registerData, clientPortalId },
      onCompleted() {
        setShowSuccessPopup(true)
      },
    })
  }

  const handleSuccessPopupClose = () => {
    setShowSuccessPopup(false)
    router.push("/login")
  }

  return (
    <>
      <SuccessPopup
        open={showSuccessPopup}
        onClose={handleSuccessPopupClose}
      />
      <PrivacyTermsModal
        open={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        onAgree={() => {
          form.setValue("agreeToTerms", true)
        }}
      />
      <div className="flex flex-col items-center gap-6 self-stretch">
        <div className="flex flex-col items-center gap-2.5 self-stretch">
          <h2 className="text-black text-center font-roboto text-3xl font-medium leading-normal self-stretch">{t("Create an account")}</h2>
          <p className="text-[#4D4D4D] text-center font-roboto text-[18px] font-normal leading-normal self-stretch">
            {t("Lets get started with your journey")}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 self-stretch max-w-md w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={t("First Name")}
                          {...field}
                          className="h-12 border-[#DBDBDB] backdrop-blur-sm rounded-full px-4 text-black focus:border-gray-300 transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={t("Last Name")}
                          {...field}
                          className="h-12 border-[#DBDBDB] backdrop-blur-sm rounded-full px-4 text-black focus:border-gray-300 transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={t("Email")}
                        {...field}
                        className="h-12 border-[#DBDBDB] backdrop-blur-sm rounded-full px-4 text-black focus:border-gray-300 transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
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
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder={t("Password")}
                          {...field}
                          className="h-12 border-[#DBDBDB] backdrop-blur-sm rounded-full px-4 text-black focus:border-gray-300 transition-colors"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder={t("Confirm Password")}
                          {...field}
                          className="h-12 border-[#DBDBDB] backdrop-blur-sm rounded-full px-4 text-black focus:border-gray-300 transition-colors"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="agreeToTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2">
                    <div className="flex flex-row items-start space-x-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <p className="text-sm text-gray-600">
                          {t("I agree with")}{" "}
                          <button
                            type="button"
                            onClick={() => setShowPrivacyModal(true)}
                            className="text-primary hover:underline"
                          >
                            {t("Privacy Policy")}
                          </button>{" "}
                          and{" "}
                          <button
                            type="button"
                            onClick={() => setShowPrivacyModal(true)}
                            className="text-primary hover:underline"
                          >
                            {t("Terms of Conditions")}
                          </button>
                        </p>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-primary hover:bg-primary text-white font-medium rounded-full text-base transition-all duration-200"
              >
                {loading && <LoadingIcon className="mr-2 h-4 w-4" />}
                {t("Create Account")}
              </Button>

              <Button
                type="button"
                variant="secondary"
                className="w-full h-12 font-medium rounded-full text-base transition-all duration-200"
              >
                {t("Sign up with Google")}
              </Button>

              <div className="text-center mt-6">
                <p className="text-gray-600">
                  {t("Already have an account")}{" "}
                  <Link href="/login" className="text-primary font-medium hover:underline">
                    {t("Sign in")}
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  )
}

export default RegisterForm
