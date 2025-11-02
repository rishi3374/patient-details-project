import { Download } from 'lucide-react';

interface LabResultsProps {
  labResults: string[];
}

const LabResults = ({ labResults }: LabResultsProps) => {
  return (
    <div className="bg-card rounded-2xl p-6">
      <h2 className="text-2xl font-extrabold text-foreground mb-6">Lab Results</h2>
      
      <div className="space-y-3 max-h-[300px] overflow-y-auto">
        {labResults.map((result, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 hover:bg-secondary rounded-lg transition-colors cursor-pointer"
          >
            <span className="text-sm text-foreground font-medium">{result}</span>
            <Download className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResults;
