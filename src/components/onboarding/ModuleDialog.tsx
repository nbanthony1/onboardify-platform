
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import OrgChart from "./OrgChart";

interface ModuleDialogProps {
  selectedModule: { title: string; content: string } | null;
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
  isCompleted: boolean;
}

const ModuleDialog = ({
  selectedModule,
  isOpen,
  onClose,
  onComplete,
  isCompleted,
}: ModuleDialogProps) => {
  const formatContent = (content: string) => {
    const parts = content.split('\n\n');
    return parts.map((part, index) => {
      // Check for interactive org chart placeholder
      if (part === '[INTERACTIVE_ORG_CHART]') {
        return <OrgChart key={index} />;
      }
      
      return (
        <div key={index} className="mb-6 last:mb-0">
          {part.split('\n').map((line, lineIndex) => {
            // Check if the line is a bullet point
            if (line.startsWith('•')) {
              return (
                <li key={lineIndex} className="ml-6 mb-2 list-disc">
                  {line.substring(1).trim()}
                </li>
              );
            }
            return (
              <p key={lineIndex} className={lineIndex === 0 ? "font-medium mb-3" : "mb-2"}>
                {line}
              </p>
            );
          })}
        </div>
      );
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold leading-relaxed">
            {selectedModule?.title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-8 space-y-6">
          <div className="text-base text-muted-foreground leading-relaxed">
            {selectedModule?.content && formatContent(selectedModule.content)}
          </div>
        </div>
        <div className="mt-8 flex justify-end pt-6 border-t">
          <Button 
            onClick={onComplete} 
            disabled={isCompleted}
            size="lg"
            className="px-6"
          >
            {isCompleted ? "Completed" : "Mark as Complete"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModuleDialog;
