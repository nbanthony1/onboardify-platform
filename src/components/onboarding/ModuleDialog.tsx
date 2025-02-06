
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold leading-relaxed">
            {selectedModule?.title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6 space-y-4">
          <p className="text-base text-muted-foreground leading-relaxed">
            {selectedModule?.content}
          </p>
        </div>
        <div className="mt-8 flex justify-end">
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
