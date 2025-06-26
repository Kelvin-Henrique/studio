"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MOCK_APPS_DATA, AppData } from "@/lib/data";
import { ChangelogSummarizer } from "./changelog-summarizer";
import {
  Apple,
  Download,
  FlaskConical,
  Rocket,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

const platformIcons: { [key: string]: React.ReactNode } = {
  android: <Smartphone className="mr-2 h-4 w-4" />,
  ios: <Apple className="mr-2 h-4 w-4" />,
};

const environmentIcons: { [key: string]: React.ReactNode } = {
  production: <Rocket className="mr-2 h-4 w-4" />,
  internal: <FlaskConical className="mr-2 h-4 w-4" />,
};

export function AppVersionDashboard() {
  const getVersionsFor = (app: AppData, platform: string, env: string) => {
    return app.versions?.[platform]?.[env] || [];
  };

  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {MOCK_APPS_DATA.map((app, index) => (
        <AccordionItem
          value={app.id}
          key={app.id}
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
        >
          <AccordionTrigger className="px-6 text-xl font-headline hover:no-underline">
            <div className="flex items-center gap-3">
              <div className={`h-8 w-8 rounded-full ${app.logoBgColor} flex items-center justify-center`}>
                <app.logo className="h-5 w-5 text-white" />
              </div>
              {app.name}
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-6 pt-0">
            <Tabs defaultValue="android" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="android">
                  {platformIcons.android} Android
                </TabsTrigger>
                <TabsTrigger value="ios">{platformIcons.ios} iOS</TabsTrigger>
              </TabsList>
              {Object.keys(app.versions).map((platform) => (
                <TabsContent key={platform} value={platform} className="pt-4">
                  <Tabs defaultValue="production">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="production">
                        {environmentIcons.production} Produção
                      </TabsTrigger>
                      <TabsTrigger value="internal">
                        {environmentIcons.internal} Teste Interno
                      </TabsTrigger>
                    </TabsList>
                    {Object.keys(app.versions[platform]).map((env) => (
                      <TabsContent key={env} value={env} className="pt-6">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                          {getVersionsFor(app, platform, env).length > 0 ? (
                            getVersionsFor(app, platform, env).map((version) => (
                              <Card key={version.id} className="flex flex-col">
                                <CardHeader>
                                  <CardTitle className="tracking-wider">{version.number}</CardTitle>
                                  <CardDescription>
                                    Lançado em {version.date}
                                  </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-4">
                                  <h4 className="font-semibold">Novidades:</h4>
                                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                                    {version.changelog}
                                  </p>
                                  <ChangelogSummarizer changelog={version.changelog} />
                                </CardContent>
                                <CardFooter>
                                  <Button asChild className="w-full">
                                    <Link href={version.downloadUrl} target="_blank">
                                      <Download className="mr-2 h-4 w-4" />
                                      Download
                                    </Link>
                                  </Button>
                                </CardFooter>
                              </Card>
                            ))
                          ) : (
                            <div className="col-span-full text-center text-muted-foreground py-10">
                              Nenhuma versão encontrada para este ambiente.
                            </div>
                          )}
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </TabsContent>
              ))}
            </Tabs>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
