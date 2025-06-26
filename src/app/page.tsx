import { AppVersionDashboard } from "@/components/app-version-dashboard";
import { ThreeOitLogo } from "@/components/three-oit-logo";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6">
        <div className="flex items-center gap-2">
          <ThreeOitLogo className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold font-headline tracking-tight">
            Three OIT
          </h1>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <AppVersionDashboard />
      </main>
    </div>
  );
}
