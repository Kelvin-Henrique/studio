'use server';

/**
 * @fileOverview This file contains the Genkit flow for suggesting release titles based on changelog content.
 *
 * - suggestReleaseTitle - A function that takes changelog content and returns a suggested release title.
 * - SuggestReleaseTitleInput - The input type for the suggestReleaseTitle function.
 * - SuggestReleaseTitleOutput - The return type for the suggestReleaseTitle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestReleaseTitleInputSchema = z.object({
  changelog: z
    .string()
    .describe('The changelog content for the release.'),
});
export type SuggestReleaseTitleInput = z.infer<typeof SuggestReleaseTitleInputSchema>;

const SuggestReleaseTitleOutputSchema = z.object({
  title: z.string().describe('The suggested release title.'),
});
export type SuggestReleaseTitleOutput = z.infer<typeof SuggestReleaseTitleOutputSchema>;

export async function suggestReleaseTitle(input: SuggestReleaseTitleInput): Promise<SuggestReleaseTitleOutput> {
  return suggestReleaseTitleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestReleaseTitlePrompt',
  input: {schema: SuggestReleaseTitleInputSchema},
  output: {schema: SuggestReleaseTitleOutputSchema},
  prompt: `You are an AI assistant that suggests release titles based on changelog content.

  Given the following changelog, suggest an appropriate and concise release title.

  Changelog:
  {{changelog}}

  Please provide only the title without any additional context or explanations.`,
});

const suggestReleaseTitleFlow = ai.defineFlow(
  {
    name: 'suggestReleaseTitleFlow',
    inputSchema: SuggestReleaseTitleInputSchema,
    outputSchema: SuggestReleaseTitleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
