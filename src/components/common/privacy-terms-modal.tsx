"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

interface PrivacyTermsModalProps {
  open: boolean
  onClose: () => void
  onAgree?: () => void
}

export const PrivacyTermsModal = ({ open, onClose, onAgree }: PrivacyTermsModalProps) => {

  if (!open) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md lg:max-w-[800px] bg-white rounded-3xl border-0 px-8 pb-8" showCloseButton={false}>
        <div className="relative flex h-10 justify-center items-center  py-6 border-b border-[#F5F5F5]">
          <Button
            variant="ghost"
            onClick={onClose}
            className="absolute right-0 top-0 text-gray-400 hover:text-gray-600 transition-colors p-2"
          >
            <X size={24} />
          </Button>

          <DialogTitle className="text-black font-roboto text-xl font-normal leading-normal">
            Privacy policy & Terms and Conditions
          </DialogTitle>
        </div>
      </DialogContent>
    </Dialog >
  )
}