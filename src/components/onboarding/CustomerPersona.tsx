
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Trait {
  name: string;
}

interface CustomerPersonaProps {
  image: string;
  name: string;
  age: number;
  occupation: string;
  status: string;
  location: string;
  life: string;
  traits: Trait[];
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
}: CustomerPersonaProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-muted-foreground">
            {age} • {occupation}
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-semibold">Details</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-muted-foreground">Status:</span> {status}
            </div>
            <div>
              <span className="text-muted-foreground">Location:</span> {location}
            </div>
            <div>
              <span className="text-muted-foreground">Life:</span> {life}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Traits</h3>
          <div className="flex flex-wrap gap-2">
            {traits.map((trait, i) => (
              <Badge key={i} variant="secondary">
                {trait.name}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Goals</h3>
          <ul className="list-disc pl-4 space-y-1">
            {goals.map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Frustrations</h3>
          <ul className="list-disc pl-4 space-y-1">
            {frustrations.map((frustration, i) => (
              <li key={i}>{frustration}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Motivation</h3>
          <p>{motivation}</p>
        </div>

        <blockquote className="border-l-4 pl-4 italic">"{quote}"</blockquote>
      </CardContent>
    </Card>
  );
};

export default CustomerPersona;
