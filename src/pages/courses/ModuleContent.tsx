import { useParams, Link } from "react-router-dom";
import { courses } from "@/data/courses";
import PDFViewer from "@/components/onboarding/PDFViewer";
import PDFUploader from "@/components/onboarding/PDFUploader";
import OrgChart from "@/components/onboarding/OrgChart";
import CustomerResearch from "@/components/onboarding/CustomerResearch";
import PathProcess from "@/components/onboarding/PathProcess";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import VideoPlayer from "@/components/onboarding/VideoPlayer";
import VideoUploader from "@/components/onboarding/VideoUploader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

const ModuleContent = () => {
  const { id, moduleId } = useParams();
  const courseId = parseInt(id || "1");
  const moduleIndex = parseInt(moduleId || "1") - 1;
  
  const course = courses.find(c => c.id === courseId);
  const module = course?.modules?.[moduleIndex];
  
  const [productOverviewPdfUrl, setProductOverviewPdfUrl] = useState<string | null>(null);
  
  useEffect(() => {
    if (courseId === 2 && moduleId === "1") {
      const savedPdf = localStorage.getItem("product-overview-pdf");
      if (savedPdf) {
        setProductOverviewPdfUrl(savedPdf);
      }
    }
  }, [courseId, moduleId]);
  
  if (!course || !module) {
    return <div className="container mx-auto py-8">Module not found</div>;
  }

  const moduleContent = typeof module === 'string' ? { title: module, content: '' } : module;

  console.log('Course and module:', courseId, moduleId, moduleContent);

  const generateVideoPath = () => {
    return `course_${courseId}_module_${moduleId}_${Date.now()}.mp4`;
  };

  const generatePdfPath = (suffix = '') => {
    const timestamp = Date.now();
    return `pdfs/${course?.title.replace(/^\d+\.\s/, '').toLowerCase().replace(/\s+/g, '-')}/module-${moduleId}${suffix ? `-${suffix}` : ''}-${timestamp}.pdf`;
  };

  const renderContent = () => {
    if (courseId === 4 && moduleId === "1") {
      return <PathProcess />;
    }
    
    if (moduleContent.content === '[INTERACTIVE_ORG_CHART]') {
      return <OrgChart />;
    }
    if (moduleContent.content === '[CUSTOMER_RESEARCH]') {
      return <CustomerResearch />;
    }
    
    if (courseId === 2 && moduleId === "1") {
      console.log("Using Product Overview with upload option");
      const pdfUrl = productOverviewPdfUrl || moduleContent.content;
      
      return (
        <div className="space-y-4">
          <div className="w-full border p-4 rounded-lg shadow-lg">
            <PDFViewer pdfUrl={pdfUrl} />
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-4">
                Upload New Product Overview PDF
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>Upload Product Overview PDF</DialogTitle>
              </DialogHeader>
              <PDFUploader 
                targetPath={moduleContent.content.substring(1)} 
                storageKey="product-overview-pdf"
                onUploadComplete={(url: string) => {
                  console.log("Setting new product overview PDF URL:", url);
                  setProductOverviewPdfUrl(url);
                }}
              />
            </DialogContent>
          </Dialog>
        </div>
      );
    }
    
    if (courseId === 2 && moduleId === "5") {
      console.log("Using PDFUploader for module:", moduleId);
      return <PDFUploader storageKey="installation-pdf" />;
    }
    
    if (courseId === 2 && moduleId === "4") {
      console.log("Using multiple PDFUploaders for University of Arizona Studies module");
      return (
        <Tabs defaultValue="pdf1" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="pdf1">Document 1</TabsTrigger>
            <TabsTrigger value="pdf2">Document 2</TabsTrigger>
            <TabsTrigger value="pdf3">Document 3</TabsTrigger>
          </TabsList>
          <TabsContent value="pdf1">
            <Card>
              <CardContent className="p-0">
                <PDFUploader storageKey="arizona-study-doc1" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pdf2">
            <Card>
              <CardContent className="p-0">
                <PDFUploader storageKey="arizona-study-doc2" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pdf3">
            <Card>
              <CardContent className="p-0">
                <PDFUploader storageKey="arizona-study-doc3" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      );
    }
    
    if (moduleContent.content?.startsWith('/pdfs/')) {
      const pdfUrls = moduleContent.content.split(',');
      
      if (pdfUrls.length > 1) {
        return (
          <Tabs defaultValue={pdfUrls[0]} className="w-full">
            <TabsList className="mb-4">
              {pdfUrls.map((url, index) => (
                <TabsTrigger key={url} value={url}>
                  Document {index + 1}
                </TabsTrigger>
              ))}
            </TabsList>
            {pdfUrls.map((url) => (
              <TabsContent key={url} value={url}>
                <Card>
                  <CardContent className="p-0">
                    <PDFViewer pdfUrl={url} />
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        );
      }
      
      return <PDFViewer pdfUrl={pdfUrls[0]} />;
    }
    
    if (courseId === 1 && moduleId === "1") {
      return (
        <div className="space-y-6">
          <VideoPlayer videoUrl="https://drive.google.com/file/d/1Rwj6GVu7niykCCpRGp2QIw_d3ODbmJgF/view?usp=sharing" />
          <VideoPlayer videoUrl="https://drive.google.com/file/d/1Lqh7OPpZZ18hXv44ENB-vs_x6Xi820Uk/view?usp=sharing" />
        </div>
      );
    }
    if (courseId === 1 && moduleId === "2") {
      return (
        <div className="space-y-6">
          <VideoPlayer videoUrl="https://drive.google.com/file/d/1WKVu84EXGcD6Fpb04eH6LOH1kFcQuX8M/view?usp=sharing" />
        </div>
      );
    }
    if (moduleContent.content?.startsWith('[Video Placeholder')) {
      return (
        <div className="space-y-4">
          <VideoUploader 
            targetPath={generateVideoPath()}
            onUploadComplete={(url: string) => {
              console.log("Video URL:", url);
            }}
          />
          <div className="prose max-w-none">
            {moduleContent.content.split('\n').map((paragraph, i) => (
              <p key={i} className="text-muted-foreground mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className="prose max-w-none">
        {moduleContent.content.split('\n').map((paragraph, i) => (
          <p key={i} className="text-muted-foreground mb-4">{paragraph}</p>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="border-b">
        <div className="container mx-auto py-4">
          <Link to={`/courses/${courseId}`}>
            <Button variant="ghost" size="sm">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to {course.title.replace(/^\d+\.\s/, '')}
            </Button>
          </Link>
        </div>
      </div>
      <div className="container mx-auto py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ModuleContent;
