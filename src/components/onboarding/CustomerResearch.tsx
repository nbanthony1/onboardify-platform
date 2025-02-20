
import React, { useState } from 'react';
import { personas } from '@/data/personas';
import CustomerPersona from './CustomerPersona';
import CustomerJourneyMap from './CustomerJourneyMap';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type PersonaKey } from '@/data/personas';

const CustomerResearch = () => {
  const [selectedPersona, setSelectedPersona] = useState<PersonaKey>('pco');
  
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Customer Research</h2>
      
      <Tabs defaultValue="personas" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="personas">Customer Personas</TabsTrigger>
          <TabsTrigger value="journey">Journey Maps</TabsTrigger>
        </TabsList>
        
        <TabsContent value="personas" className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(personas).map(([key, data]) => (
              <button
                key={key}
                className={`p-4 rounded-lg border transition-all ${
                  selectedPersona === key 
                    ? 'border-primary ring-2 ring-primary ring-opacity-50' 
                    : 'border-border hover:border-primary'
                }`}
                onClick={() => setSelectedPersona(key as PersonaKey)}
              >
                <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={data.persona.image} 
                    alt={data.persona.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold">{data.persona.name}</h3>
                <p className="text-sm text-muted-foreground">{data.persona.occupation}</p>
              </button>
            ))}
          </div>
          
          {selectedPersona && (
            <CustomerPersona 
              persona={personas[selectedPersona].persona}
            />
          )}
        </TabsContent>
        
        <TabsContent value="journey">
          {selectedPersona && (
            <CustomerJourneyMap 
              journeyMap={personas[selectedPersona].journeyMap}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomerResearch;
