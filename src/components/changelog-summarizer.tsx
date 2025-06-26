"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { summarizeChangelog } from "@/ai/flows/summarize-changelog";
import { Loader2, Wand2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

type Props = {
  changelog: string;
};

export function ChangelogSummarizer({ changelog }: Props) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    setIsLoading(true);
    setSummary(null);
    try {
      const result = await summarizeChangelog({ changelog });
      setSummary(result.title);
    } catch (e) {
      toast({
        variant: "destructive",
        title: "Erro de IA",
        description: "Não foi possível sumarizar o changelog.",
      });
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4 pt-2">
      <Button
        onClick={handleSummarize}
        disabled={isLoading}
        variant="outline"
        size="sm"
        className="w-full sm:w-auto"
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Wand2 className="mr-2 h-4 w-4" />
        )}
        Sumarizar com IA
      </Button>
      {summary && (
        <Alert>
          <Wand2 className="h-4 w-4" />
          <AlertTitle className="font-semibold">Sumário da IA</AlertTitle>
          <AlertDescription>{summary}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
