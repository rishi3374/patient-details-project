interface Diagnostic {
  name: string;
  description: string;
  status: string;
}

interface DiagnosticListProps {
  diagnostics: Diagnostic[];
}

const DiagnosticList = ({ diagnostics }: DiagnosticListProps) => {
  return (
    <div className="bg-card rounded-2xl p-6">
      <h2 className="text-2xl font-extrabold text-foreground mb-6">Diagnostic List</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-sm font-bold text-foreground pb-3">Problem/Diagnosis</th>
              <th className="text-left text-sm font-bold text-foreground pb-3">Description</th>
              <th className="text-left text-sm font-bold text-foreground pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnostics.map((diagnostic, index) => (
              <tr key={index} className="border-b border-border last:border-0">
                <td className="py-4 text-sm text-foreground">{diagnostic.name}</td>
                <td className="py-4 text-sm text-muted-foreground">{diagnostic.description}</td>
                <td className="py-4">
                  <span className="text-sm text-foreground">{diagnostic.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
