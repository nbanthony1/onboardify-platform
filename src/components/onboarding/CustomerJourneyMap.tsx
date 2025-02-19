
import { Card } from "@/components/ui/card";

interface JourneyPhase {
  name: string;
  doing: string[];
  thinking: string[];
  saying: string[];
}

interface JourneyMapProps {
  persona: string;
  scenario: string;
  expectations: string[];
  phases: JourneyPhase[];
  opportunities: string[];
  internalOwnership: string[];
}

const CustomerJourneyMap = ({
  persona,
  scenario,
  expectations,
  phases,
  opportunities,
  internalOwnership,
}: JourneyMapProps) => {
  return (
    <Card className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{persona}</h3>
          <p className="text-muted-foreground">{scenario}</p>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-semibold mb-2">Expectations</h4>
          <ul className="list-disc list-inside">
            {expectations.map((expectation, index) => (
              <li key={index}>{expectation}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Journey Phases */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {phases.map((phase, index) => (
          <div key={index} className="space-y-4">
            <div className="bg-primary/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{phase.name}</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium mb-1">Doing</h5>
                  <ul className="text-sm space-y-1">
                    {phase.doing.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-1">Thinking</h5>
                  <ul className="text-sm space-y-1">
                    {phase.thinking.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-1">Saying</h5>
                  <ul className="text-sm space-y-1">
                    {phase.saying.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-2">Opportunities</h4>
          <ul className="list-disc list-inside">
            {opportunities.map((opportunity, index) => (
              <li key={index}>{opportunity}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Internal Ownership</h4>
          <ul className="list-disc list-inside">
            {internalOwnership.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default CustomerJourneyMap;
