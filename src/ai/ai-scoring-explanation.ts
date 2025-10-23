// This is an AI-powered explanation of the AI scoring feature in Secure 360.
'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiScoringExplanationInputSchema = z.object({
  feature: z.string().describe('The AI scoring feature in Secure 360.'),
});
export type AiScoringExplanationInput = z.infer<typeof AiScoringExplanationInputSchema>;

const AiScoringExplanationOutputSchema = z.object({
  explanation: z.string().describe('A detailed explanation of how the AI scoring feature prioritizes security alerts and why it matters.'),
});
export type AiScoringExplanationOutput = z.infer<typeof AiScoringExplanationOutputSchema>;

export async function getAiScoringExplanation(input: AiScoringExplanationInput): Promise<AiScoringExplanationOutput> {
  return aiScoringExplanationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiScoringExplanationPrompt',
  input: {schema: AiScoringExplanationInputSchema},
  output: {schema: AiScoringExplanationOutputSchema},
  prompt: `You are an AI expert explaining the AI scoring feature in Secure 360.

  Feature: {{{feature}}}

  Explain how the AI scoring feature prioritizes security alerts and why it matters to a visitor of the Secure 360 landing page.`,
});

const aiScoringExplanationFlow = ai.defineFlow(
  {
    name: 'aiScoringExplanationFlow',
    inputSchema: AiScoringExplanationInputSchema,
    outputSchema: AiScoringExplanationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
