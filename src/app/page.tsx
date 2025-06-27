import { AppVersionDashboard } from "@/components/app-version-dashboard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-30 flex h-16 items-center justify-start border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6">
        <Image
          src="http://threeoitcompany.com.br/wp-content/uploads/2023/10/logo-site_threeo.png"
          alt="Threeo Aplicativos Logo"
          width={445}
          height={105}
          className="h-9 w-auto"
          priority
        />
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <AppVersionDashboard />
      </main>
    </div>
  );
}
