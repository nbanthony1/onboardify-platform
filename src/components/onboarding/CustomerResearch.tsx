import CustomerPersona from "@/components/onboarding/CustomerPersona";
import CustomerJourneyMap from "@/components/onboarding/CustomerJourneyMap";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { personas } from "@/data/personas";

const CustomerResearch = () => {
  return (
    <div className="container mx-auto py-8 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Customer Research</h1>
        <p className="text-muted-foreground">
          Understanding Symterra's target market through personas and journey mapping
        </p>
      </div>

      <Tabs defaultValue="pco" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-4">
          <TabsTrigger value="pco">PCO</TabsTrigger>
          <TabsTrigger value="commercial">Commercial</TabsTrigger>
          <TabsTrigger value="municipality">Municipality</TabsTrigger>
          <TabsTrigger value="corporate">Corporate</TabsTrigger>
          <TabsTrigger value="distributor">Distributor</TabsTrigger>
        </TabsList>

        <TabsContent value="pco" className="space-y-8">
          <CustomerPersona {...personas.pco.persona} />
          <CustomerJourneyMap {...personas.pco.journeyMap} />
        </TabsContent>

        <TabsContent value="commercial" className="space-y-8">
          <CustomerPersona {...personas.commercial.persona} />
          <CustomerJourneyMap {...personas.commercial.journeyMap} />
        </TabsContent>

        <TabsContent value="municipality" className="space-y-8">
          <CustomerPersona {...personas.municipality.persona} />
          <CustomerJourneyMap {...personas.municipality.journeyMap} />
        </TabsContent>

        <TabsContent value="corporate" className="space-y-8">
          <CustomerPersona {...personas.corporate.persona} />
          <CustomerJourneyMap {...personas.corporate.journeyMap} />
        </TabsContent>

        <TabsContent value="distributor" className="space-y-8">
          <CustomerPersona {...personas.distributor.persona} />
          <CustomerJourneyMap {...personas.distributor.journeyMap} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomerResearch;
