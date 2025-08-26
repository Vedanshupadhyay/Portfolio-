
'use server';

import { portfolioReview, type PortfolioReviewInput, type PortfolioReviewOutput } from '@/ai/flows/portfolio-review';

export async function getPortfolioReview(input: PortfolioReviewInput): Promise<PortfolioReviewOutput> {
  try {
    const result = await portfolioReview(input);
    return result;
  } catch (error) {
    console.error('Error in getPortfolioReview server action:', error);
    // In a real app, you might want to handle different types of errors more gracefully
    throw new Error('Failed to get feedback from AI assistant.');
  }
}
