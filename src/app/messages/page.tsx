
import { getContactMessages, type ContactMessage } from '@/app/actions';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';

async function MessagesPage() {
  const messages = await getContactMessages();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-28">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 font-headline">Contact Messages</h1>
        <p className="text-muted-foreground mb-8">
          Here are the messages submitted through your contact form.
        </p>

        {messages.length === 0 ? (
          <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
            <p className="mt-4 text-lg">You haven't received any messages yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((msg, index) => (
              <Card key={index} className="shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{msg.name}</CardTitle>
                      <CardDescription>
                        <a href={`mailto:${msg.email}`} className="text-primary hover:underline">
                          {msg.email}
                        </a>
                      </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {format(new Date(msg.submittedAt), "PPP p")}
                    </span>
                  </div>
                </CardHeader>
                <Separator className="my-0"/>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground whitespace-pre-wrap">{msg.message}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MessagesPage;
