"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/sdk/queries/auth";
import { UserIcon, Loader2Icon, LogOut, Briefcase, User } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useEffect } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useLogout } from "@/sdk/mutations/auth";
import { useTranslations } from 'next-intl';

interface CurrentUserProps {
  isScrolled: boolean;
}

const CurrentUser = ({ isScrolled }: CurrentUserProps) => {
  const t = useTranslations('Header');

  const { currentUser, setLoading, loading } = useCurrentUser();
  const { logout } = useLogout();

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      setLoading(false);
    }
  }, []);

  if (loading)
    return (
      <div className="h-9 w-9 flex items-center justify-center">
        <Loader2Icon className="h-5 w-5 animate-spin" />
      </div>
    );

  if (currentUser) {
    const { firstName, avatar, lastName } = currentUser;
    return (
      <div className="flex gap-1">
        <Menubar className="border-none shadow-none" asChild>
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer">
              <Avatar asChild>
                <div>
                  <AvatarImage src={avatar} alt={currentUser.firstName} />
                  <AvatarFallback className="text-primary-foreground">
                    {(firstName || "P")[0]}
                    {(lastName || "")[0]}
                  </AvatarFallback>
                </div>
              </Avatar>
            </MenubarTrigger>
            <MenubarContent>
              <Link href={"/profile"}>
                <MenubarItem className="gap-4">
                  <User className="w-5 h-5" /> Profile
                </MenubarItem>
              </Link>
              <Link href={"/profile/bookings"}>
                <MenubarItem className="gap-4">
                  <Briefcase className="w-5 h-5" /> Bookings
                </MenubarItem>
              </Link>

              <MenubarSeparator />

              <MenubarItem className="gap-4" onClick={() => logout()}>
                <LogOut className="w-5 h-5" /> Log out
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    );
  }

  return (
    <Button
      asChild
      variant="outline"
      className={`border-white/30 hover:bg-white/10 hover:border-white/50 bg-transparent rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${isScrolled
        ? 'text-gray-900 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
        : 'text-white border-white/30 hover:bg-white/10 hover:border-white/50'
        }`}
    >
      <Link href="/login">
        <User />
        {t("SignIn")}
      </Link>
    </Button>
  );
};

export default CurrentUser;
