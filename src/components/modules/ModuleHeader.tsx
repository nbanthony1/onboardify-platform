
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface ModuleHeaderProps {
  courseId: number;
  courseTitle: string;
}

const ModuleHeader = ({ courseId, courseTitle }: ModuleHeaderProps) => {
  return (
    <div className="border-b">
      <div className="container mx-auto py-4">
        <Link to={`/courses/${courseId}`}>
          <Button variant="ghost" size="sm">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to {courseTitle.replace(/^\d+\.\s/, '')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ModuleHeader;
