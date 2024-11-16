import MobileNavBar from "@/components/MobileNavBar";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userInfo = { firstName: "Abdullateef", lastName: "Ali" };
  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={userInfo} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" alt="logo" width={30} height={30} />
          <div>
            <MobileNavBar user={userInfo} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
