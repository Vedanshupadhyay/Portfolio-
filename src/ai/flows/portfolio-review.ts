// This file implements the Genkit flow for providing personalized portfolio tips.
'use server';

/**
 * @fileOverview An AI-powered tool that analyzes a portfolio and provides personalized tips to improve it.
 *
 * - portfolioReview - A function that handles the portfolio review process.
 * - PortfolioReviewInput - The input type for the portfolioReview function.
 * - PortfolioReviewOutput - The return type for the portfolioReview function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioReviewInputSchema = z.object({
  portfolioDescription: z
    .string()
    .describe('A detailed description of the portfolio, including projects, skills, and experience.'),
});
export type PortfolioReviewInput = z.infer<typeof PortfolioReviewInputSchema>;

const PortfolioReviewOutputSchema = z.object({
  feedback: z.string().describe('Personalized feedback and tips on how to improve the portfolio.'),
});
export type PortfolioReviewOutput = z.infer<typeof PortfolioReviewOutputSchema>;

export async function portfolioReview(input: PortfolioReviewInput): Promise<PortfolioReviewOutput> {
  return portfolioReviewFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioReviewPrompt',
  input: {schema: PortfolioReviewInputSchema},
  output: {schema: PortfolioReviewOutputSchema},
  prompt: `You are a portfolio review expert providing feedback to developers.

  Analyze the following portfolio description and provide personalized tips on how to improve it to make it more appealing to potential employers.

  Portfolio Description: {{{portfolioDescription}}}
  `,
});

const portfolioReviewFlow = ai.defineFlow(
  {
    name: 'portfolioReviewFlow',
    inputSchema: PortfolioReviewInputSchema,
    outputSchema: PortfolioReviewOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
