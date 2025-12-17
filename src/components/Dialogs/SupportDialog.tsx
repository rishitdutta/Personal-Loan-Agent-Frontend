import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SupportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SupportDialog = ({ open, onOpenChange }: SupportDialogProps) => {
  const supportNumber = "+1 (800) 555-0123";
  const supportEmail = "support@loanbuddy.com";

  const handleCall = () => {
    window.location.href = `tel:${supportNumber}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Contact Support</DialogTitle>
          <DialogDescription>
            Our support team is here to help you with your loan application.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Phone Support */}
          <div className="flex items-start gap-4 rounded-lg border border-border bg-muted/50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Call Us</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Available Mon-Fri, 9 AM - 6 PM
              </p>
              <p className="text-lg font-mono font-semibold text-primary">
                {supportNumber}
              </p>
              <Button
                onClick={handleCall}
                className="mt-3 w-full"
                size="sm"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Email Support */}
          <div className="flex items-start gap-4 rounded-lg border border-border bg-muted/50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Email Us</h3>
              <p className="text-sm text-muted-foreground mb-2">
                We'll respond within 24 hours
              </p>
              <a
                href={`mailto:${supportEmail}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                {supportEmail}
              </a>
            </div>
          </div>

          {/* Chat Alternative */}
          <div className="rounded-lg border border-border bg-muted/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-semibold text-sm">Live Chat</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              You can also continue chatting with our AI assistant. Type your question in the chat.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SupportDialog;
