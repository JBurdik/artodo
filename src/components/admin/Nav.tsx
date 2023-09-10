import { adminNav } from "@/lib/adminNav";
import { cn } from "@/lib/utils";
import { ShieldQuestion } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const AdminSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-primary h-screen text-secondary w-60 fixed top-0 bottom-0 left-0">
      <div className="flex flex-row items-center justify-center gap-3 py-5 border-b border-secondary mb-4">
        <Image src={"/logo_white.svg"} alt="logo" width={100} height={200} />
        <span className="uppercase text-xl font-bold tracking-widest">
          Admin
        </span>
      </div>
      <nav className="flex flex-col gap-4">
        {adminNav.map((link) => (
          <Link
            key={`adminNav_${link.name}`}
            href={link.link}
            className={cn(
              pathname === link.link && "text-primary bg-secondary",
              "flex flex-row items-center justify-start gap-5 mx-3 p-2 rounded-md hover:bg-secondary hover:text-primary transition-colors"
            )}
          >
            {link.icon ? <link.icon /> : <ShieldQuestion />}
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};
