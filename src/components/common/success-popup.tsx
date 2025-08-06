"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Mail, X } from "lucide-react"
import { useTranslations } from "next-intl"

interface SuccessPopupProps {
  open: boolean
  onClose: () => void
}

export const SuccessPopup = ({
  open,
  onClose
}: SuccessPopupProps) => {
  const t = useTranslations("SignUp")

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md lg:max-w-[600px] bg-white rounded-3xl border-0 px-8 pb-8" showCloseButton={false}>

        <div className="relative flex h-10 justify-center items-center border-b border-[#F5F5F5]">
          <Button
            variant="ghost"
            onClick={onClose}
            className="absolute right-0 top-0 text-gray-400 hover:text-gray-600 transition-colors p-2"
          >
            <X size={24} />
          </Button>

          <DialogTitle className="text-black font-roboto text-xl font-normal leading-normal">
            {t("Confirmation")}
          </DialogTitle>
        </div>

        <div className="flex flex-col text-center gap-4 p-6 border border-dashed border-[#E5E5E5] rounded-2xl justify-center items-center self-stretch max-h-48">
          <div className="flex flex-col items-center gap-1">
            <Mail size={50} className="text-black" />
          </div>

          <h3 className="text-black font-roboto text-xl font-medium leading-normal">
            {t("Your account created")}
          </h3>

          <p className="text-[#000000B2] text-center font-roboto text-[14px] font-normal leading-normal self-stretch">
            {t("ConfirmDesc")}
          </p>
        </div>

        <Button
          variant="default"
          onClick={() => window.open('https://mail.google.com', '_blank')}
          className="w-full h-10 text-white font-medium rounded-full text-base transition-all duration-200"
        >
          {t("Continue")}
        </Button>
      </DialogContent>
    </Dialog >
  )
}