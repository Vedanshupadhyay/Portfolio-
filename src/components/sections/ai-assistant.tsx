
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getPortfolioReview } from '@/app/actions';
import AnimatedSection from '../animated-section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Textarea } from '../ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Bot, Loader2, Sparkles } from 'lucide-react';
import { Separator } from '../ui/separator';

const formSchema = z.object({
  portfolioDescription: z.string().min(50, {
    message: 'Please provide a description of at least 50 characters.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function AiAssistant() {
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      portfolioDescription: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setFeedback(null);
    try {
      const result = await getPortfolioReview(data);
      if (result.feedback) {
        setFeedback(result.feedback);
      } else {
        throw new Error('Failed to get feedback from the AI assistant.');
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: error instanceof Error ? error.message : 'Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatedSection id="ai-assistant" className="bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-headline flex items-center justify-center gap-3">
            <Bot className="w-10 h-10 text-primary" />
            AI Portfolio Assistant
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-12">
            Get personalized, AI-powered tips to improve your portfolio. Describe your current projects and skills, and our assistant will provide actionable feedback.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Get Your Feedback</CardTitle>
              <CardDescription>Enter a detailed description of your portfolio below.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="portfolioDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Portfolio Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., I have a portfolio with 3 projects: an e-commerce site using Java, a social media dashboard with Next.js, and..."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      'Get Tips'
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center">
            {isLoading && (
              <div className="text-center text-muted-foreground">
                <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
                <p className="mt-4">Our AI is analyzing your portfolio...</p>
              </div>
            )}
            {feedback && (
              <Card className="w-full bg-background shadow-lg shadow-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-primary" />
                    Your Personalized Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Separator className="my-4" />
                  <div className="prose prose-invert max-w-none text-muted-foreground whitespace-pre-wrap">
                    {feedback}
                  </div>
                </CardContent>
              </Card>
            )}
            {!isLoading && !feedback && (
              <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
                <Bot className="mx-auto h-12 w-12" />
                <p className="mt-4">Your feedback will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
