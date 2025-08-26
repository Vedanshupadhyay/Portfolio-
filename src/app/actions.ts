
'use server';

import { portfolioReview, type PortfolioReviewInput, type PortfolioReviewOutput } from '@/ai/flows/portfolio-review';
import { promises as fs } from 'fs';
import path from 'path';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the path to the JSON file where messages will be stored
const messagesFilePath = path.join(process.cwd(), 'messages.json');

// Define the shape of a contact message
export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  submittedAt: string;
}

// Function to read messages from the JSON file
async function getMessages(): Promise<ContactMessage[]> {
  try {
    await fs.access(messagesFilePath);
    const data = await fs.readFile(messagesFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If the file doesn't exist, return an empty array
    return [];
  }
}

// Server action to save a new contact message and send an email
export async function saveContactMessage(message: Omit<ContactMessage, 'submittedAt'>): Promise<{ success: boolean; error?: string }> {
  try {
    // Save the message to the local JSON file
    const messages = await getMessages();
    const newMessage: ContactMessage = {
      ...message,
      submittedAt: new Date().toISOString(),
    };
    messages.unshift(newMessage); // Add new message to the beginning
    await fs.writeFile(messagesFilePath, JSON.stringify(messages, null, 2));

    // Send an email notification using Resend
    await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // Resend's default 'from' address
      to: 'ru20567@gmail.com',
      subject: `New Portfolio Message from ${message.name}`,
      html: `
        <p>You received a new message from your portfolio contact form.</p>
        <p><strong>Name:</strong> ${message.name}</p>
        <p><strong>Email:</strong> ${message.email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Error saving message or sending email:', error);
    // Provide a more generic error to the client
    return { success: false, error: 'Failed to send your message. Please try again later.' };
  }
}

// Server action to get all messages
export async function getContactMessages(): Promise<ContactMessage[]> {
    return getMessages();
}

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
