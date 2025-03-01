
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import PDFViewer from "@/components/onboarding/PDFViewer";
import PDFUploader from "@/components/onboarding/PDFUploader";

interface MultipleDocumentContentProps {
  type: 'viewer' | 'uploader';
  items: {
    id: string;
    label: string;
    content: string;
  }[];
}

const MultipleDocumentContent = ({ type, items }: MultipleDocumentContentProps) => {
  return (
    <Tabs defaultValue={items[0].id} className="w-full">
      <TabsList className="mb-4">
        {items.map((item) => (
          <TabsTrigger key={item.id} value={item.id}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent key={item.id} value={item.id}>
          <Card>
            <CardContent className="p-0">
              {type === 'viewer' ? (
                <PDFViewer pdfUrl={item.content} />
              ) : (
                <PDFUploader storageKey={item.content} />
              )}
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default MultipleDocumentContent;
