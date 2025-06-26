'use server';

/**
 * @fileOverview This file contains a Genkit flow for summarizing changelogs using AI.
 *
 * - summarizeChangelog - A function that takes changelog text as input and returns a summarized title.
 * - SummarizeChangelogInput - The input type for the summarizeChangelog function.
 * - SummarizeChangelogOutput - The return type for the summarizeChangelog function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeChangelogInputSchema = z.object({
  changelog: z.string().describe('The changelog text to summarize.'),
});
export type SummarizeChangelogInput = z.infer<typeof SummarizeChangelogInputSchema>;

const SummarizeChangelogOutputSchema = z.object({
  title: z.string().describe('A summarized title for the changelog.'),
});
export type SummarizeChangelogOutput = z.infer<typeof SummarizeChangelogOutputSchema>;

export async function summarizeChangelog(input: SummarizeChangelogInput): Promise<SummarizeChangelogOutput> {
  return summarizeChangelogFlow(input);
}

const summarizeChangelogPrompt = ai.definePrompt({
  name: 'summarizeChangelogPrompt',
  input: {schema: SummarizeChangelogInputSchema},
  output: {schema: SummarizeChangelogOutputSchema},
  prompt: `You are an AI assistant that summarizes changelogs and generates an appropriate title.

  Summarize the following changelog text and create a concise title that captures the main changes:

  Changelog:
  {{changelog}}
  `,
});

const summarizeChangelogFlow = ai.defineFlow(
  {
    name: 'summarizeChangelogFlow',
    inputSchema: SummarizeChangelogInputSchema,
    outputSchema: SummarizeChangelogOutputSchema,
  },
  async input => {
    const {output} = await summarizeChangelogPrompt(input);
    return output!;
  }
);
