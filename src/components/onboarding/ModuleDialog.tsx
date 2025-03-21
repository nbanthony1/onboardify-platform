
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import OrgChart from "./OrgChart";
import PDFViewer from "./PDFViewer";

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

      // Check if content is a PDF path
      if (part.endsWith('.pdf')) {
        return <PDFViewer key={index} pdfUrl={part} />;
      }
      
      // Skip the "Note: Please upload..." message if we're showing a PDF
      if (parts[0].endsWith('.pdf') && part.startsWith('Note: Please upload')) {
        return null;
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
      <DialogContent className="max-w-[90vw] w-[1200px] h-[90vh] max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold leading-relaxed">
            {selectedModule?.title}
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto pr-6">
          <div className="space-y-6">
            <div className="text-base text-muted-foreground leading-relaxed">
              {selectedModule?.content && formatContent(selectedModule.content)}
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-6 border-t">
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
