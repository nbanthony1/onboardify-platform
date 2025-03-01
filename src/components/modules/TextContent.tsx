
import React from 'react';

interface TextContentProps {
  content: string;
}

const TextContent = ({ content }: TextContentProps) => {
  return (
    <div className="prose max-w-none">
      {content.split('\n').map((paragraph, i) => (
        <p key={i} className="text-muted-foreground mb-4">{paragraph}</p>
      ))}
    </div>
  );
};

export default TextContent;
