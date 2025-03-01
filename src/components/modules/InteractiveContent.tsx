
import React from 'react';
import OrgChart from "@/components/onboarding/OrgChart";
import CustomerResearch from "@/components/onboarding/CustomerResearch";
import PathProcess from "@/components/onboarding/PathProcess";

interface InteractiveContentProps {
  contentType: string;
}

const InteractiveContent = ({ contentType }: InteractiveContentProps) => {
  if (contentType === '[INTERACTIVE_ORG_CHART]') {
    return <OrgChart />;
  }
  if (contentType === '[CUSTOMER_RESEARCH]') {
    return <CustomerResearch />;
  }
  if (contentType === '[PATH_PROCESS]') {
    return <PathProcess />;
  }
  
  return <div>Interactive content not available</div>;
};

export default InteractiveContent;
