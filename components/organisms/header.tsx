import Link from "next/link";
import { Plus } from "lucide-react";
import { APP_NAME } from "@/lib/constants/index";
import MenuClient from "../molecules/menu-client";
import SigninOrAvatar from "../molecules/signin-avatar";

const Header = () => {
  return (
    <header className="bg-background-2 w-full sticky top-0 z-50">
      <div className="max-w-360 h-16.25 mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Left Section: Logo and Brand Name */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">
            {/* <Image
              priority={true}
              src="/images/Logo.svg"
              width={32}
              height={32}
              alt={`${APP_NAME}logo`}
            /> */}
            <div className="bg-blue-100 p-1.5 rounded">
              <Plus className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="hidden lg:block">{APP_NAME}</h3>
          </Link>
        </div>
        {/* Right Section: Navigation Links */}
        <div>
          <MenuClient desktopAvatar={<SigninOrAvatar />} />
        </div>
      </div>
    </header>
  );
};

export default Header;
