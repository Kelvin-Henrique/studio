"use client";

import { useState } from 'react';
import { Button } from './ui/button';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  textToCopy: string;
  className?: string;
};

export function CopyButton({ textToCopy, className }: Props) {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(textToCopy);
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <Button
      size="sm"
      variant="ghost"
      className={cn("absolute right-2 top-2 h-7 w-7 px-2", className)}
      onClick={copyToClipboard}
    >
      {hasCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
      <span className="sr-only">Copiar</span>
    </Button>
  );
}
