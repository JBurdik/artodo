import { adminNav } from "@/lib/adminNav";
import { cn } from "@/lib/utils";
import { LogOut, ShieldQuestion } from "lucide-react";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const AdminSidebar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  return (
    <>
      {/* MOBILE NAVIGATION */}
      <div className=" fixed bottom-4 inset-x-3 md:hidden bg-primary text-secondary rounded-md shadow-primary shadow-md py-2">
        <nav className="flex flex-row justify-center gap-4 h-full">
          {adminNav.map((link) => (
            <Link
              key={`adminNav_${link.name}`}
              href={link.link}
              className={cn(
                pathname === link.link && "text-primary bg-secondary",
                "flex flex-col gap-1 items-center justify-center p-2 rounded-md hover:bg-secondary hover:text-primary transition-colors"
              )}
            >
              {link.icon ? <link.icon /> : <ShieldQuestion />}
              <span className="text-[.6rem] tracking-wider uppercase font-thin">
                {link.name}
              </span>
            </Link>
          ))}
          {session !== null && !!session?.user !== null && (
            <div className="absolute bottom-0 flex flex-row justify-between items-center w-full border-t border-secondary p-5">
              <span className="flex flex-row gap-5 items-center justify-center">
                {session?.user.image && (
                  <Image
                    className="rounded-full aspect-square"
                    src={session.user.image}
                    alt={session.user.name ?? ""}
                    height={50}
                    width={50}
                  />
                )}
                {/* <p className="text-xs text-gray-400">{session.user.email}</p> */}
              </span>
              <Link href={"/api/auth/signout"}>
                <LogOut />
              </Link>
            </div>
          )}
        </nav>
      </div>

      {/* DESKTOP NAVIGATION */}
      <div className="hidden md:block bg-secondary-muted h-screen w-60 fixed top-0 bottom-0 left-0">
        <div className="flex flex-row items-center justify-center gap-3 py-5 border-b border-muted-foreground mb-4">
          <Image src={"/logo_white.svg"} alt="logo" width={100} height={200} />
          <span className="uppercase text-xl font-bold tracking-widest">
            Admin
          </span>
        </div>
        <nav className="flex flex-col gap-4 h-full">
          {adminNav.map((link) => (
            <Link
              key={`adminNav_${link.name}`}
              href={link.link}
              className={cn(
                pathname === link.link && "text-secondary bg-primary",
                "flex flex-row items-center justify-start gap-5 mx-3 p-2 rounded-md hover:bg-primary hover:text-secondary transition-colors"
              )}
            >
              {link.icon ? <link.icon /> : <ShieldQuestion />}
              {link.name}
            </Link>
          ))}
          {session !== null && !!session?.user !== null && (
            <div className="absolute bottom-0 flex flex-row justify-between items-center w-full border-t border-secondary p-5">
              <span className="flex flex-row gap-5 items-center justify-center">
                {session?.user.image && (
                  <Image
                    className="rounded-full aspect-square"
                    src={session.user.image}
                    alt={session.user.name ?? ""}
                    height={50}
                    width={50}
                  />
                )}
                {/* <p className="text-xs text-gray-400">{session.user.email}</p> */}
              </span>
              <Link href={"/api/auth/signout"}>
                <LogOut />
              </Link>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};
