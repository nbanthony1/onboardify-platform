
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PersonaTrait {
  name: string;
}

interface PersonaProps {
  image: string;
  name: string;
  age: number;
  occupation: string;
  status: string;
  location: string;
  life: string;
  traits: PersonaTrait[];
  goals: string[];
  frustrations: string[];
  motivation: string;
  quote: string;
}

const CustomerPersona = ({
  image,
  name,
  age,
  occupation,
  status,
  location,
  life,
  traits,
  goals,
  frustrations,
  motivation,
  quote,
}: PersonaProps) => {
  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column - Basic Info */}
        <div className="space-y-6">
          <div className="aspect-square relative rounded-full overflow-hidden w-48 mx-auto">
            <img src={image} alt={name} className="object-cover" />
          </div>
          <div className="space-y-2">
            <p><span className="font-semibold">Name:</span> {name}</p>
            <p><span className="font-semibold">Age:</span> {age}</p>
            <p><span className="font-semibold">Occupation:</span> {occupation}</p>
            <p><span className="font-semibold">Status:</span> {status}</p>
            <p><span className="font-semibold">Location:</span> {location}</p>
            <p><span className="font-semibold">Life:</span> {life}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {traits.map((trait, index) => (
              <Badge key={index} variant="secondary">
                {trait.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Middle Column - Quote and Motivation */}
        <div className="md:col-span-2 space-y-6">
          <blockquote className="text-2xl font-serif italic border-l-4 border-primary pl-4">
            "{quote}"
          </blockquote>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Motivation</h3>
            <p className="text-muted-foreground">{motivation}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Goals */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Goals</h3>
              <ul className="list-disc list-inside space-y-2">
                {goals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </div>

            {/* Frustrations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Frustrations</h3>
              <ul className="list-disc list-inside space-y-2">
                {frustrations.map((frustration, index) => (
                  <li key={index}>{frustration}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CustomerPersona;
