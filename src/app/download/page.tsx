import { promises as fs } from 'fs';
import path from 'path';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CopyButton } from '@/components/copy-button';

async function getProjectFiles() {
  const filePaths = [
    '.env',
    'README.md',
    'apphosting.yaml',
    'components.json',
    'next.config.ts',
    'package.json',
    'tailwind.config.ts',
    'tsconfig.json',
    'src/app/globals.css',
    'src/app/layout.tsx',
    'src/app/page.tsx',
    'src/ai/flows/suggest-release-title.ts',
    'src/ai/flows/summarize-changelog.ts',
    'src/components/app-version-dashboard.tsx',
    'src/components/changelog-summarizer.tsx',
    'src/components/three-oit-logo.tsx',
    'src/components/ui/accordion.tsx',
    'src/components/ui/alert-dialog.tsx',
    'src/components/ui/alert.tsx',
    'src/components/ui/avatar.tsx',
    'src/components/ui/badge.tsx',
    'src/components/ui/button.tsx',
    'src/components/ui/calendar.tsx',
    'src/components/ui/card.tsx',
    'src/components/ui/carousel.tsx',
    'src/components/ui/chart.tsx',
    'src/components/ui/checkbox.tsx',
    'src/components/ui/collapsible.tsx',
    'src/components/ui/dialog.tsx',
    'src/components/ui/dropdown-menu.tsx',
    'src/components/ui/form.tsx',
    'src/components/ui/input.tsx',
    'src/components/ui/label.tsx',
    'src/components/ui/menubar.tsx',
    'src/components/ui/popover.tsx',
    'src/components/ui/progress.tsx',
    'src/components/ui/radio-group.tsx',
    'src/components/ui/scroll-area.tsx',
    'src/components/ui/select.tsx',
    'src/components/ui/separator.tsx',
    'src/components/ui/sheet.tsx',
    'src/components/ui/sidebar.tsx',
    'src/components/ui/skeleton.tsx',
    'src/components/ui/slider.tsx',
    'src/components/ui/switch.tsx',
    'src/components/ui/table.tsx',
    'src/components/ui/tabs.tsx',
    'src/components/ui/textarea.tsx',
    'src/components/ui/toast.tsx',
    'src/components/ui/toaster.tsx',
    'src/components/ui/tooltip.tsx',
    'src/hooks/use-mobile.tsx',
    'src/hooks/use-toast.ts',
    'src/lib/data.ts',
    'src/lib/utils.ts',
  ];

  const files = await Promise.all(
    filePaths.map(async (filePath) => {
      try {
        const fullPath = path.join(process.cwd(), filePath);
        const content = await fs.readFile(fullPath, 'utf-8');
        return { path: filePath, content };
      } catch (error) {
        // It's possible some files were deleted, so we'll just ignore errors
        return null;
      }
    })
  );

  return files.filter(Boolean) as { path: string; content: string }[];
}

export default async function DownloadPage() {
  const files = await getProjectFiles();

  return (
    <div className="container mx-auto max-w-4xl py-10">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold font-headline">Arquivos do Projeto</h1>
        <p className="text-muted-foreground">
          Copie o conteúdo de cada arquivo abaixo para recriar o projeto em sua máquina local. 
          Lembre-se de manter a mesma estrutura de pastas.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-2">
        {files.map(({ path, content }) => (
          <AccordionItem value={path} key={path} className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <AccordionTrigger className="px-4 text-left font-mono text-sm hover:no-underline">
              {path}
            </AccordionTrigger>
            <AccordionContent className="p-4 pt-0">
              <div className="relative">
                <CopyButton textToCopy={content} />
                <pre className="mt-2 w-full overflow-auto rounded-md bg-secondary p-4 text-sm">
                  <code>{content}</code>
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
