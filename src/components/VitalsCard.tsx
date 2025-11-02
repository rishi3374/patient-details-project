import { Heart, Activity, Thermometer } from 'lucide-react';

interface VitalsCardProps {
  heartRate: { value: number; levels: string };
  respiratoryRate: { value: number; levels: string };
  temperature: { value: number; levels: string };
}

const VitalsCard = ({ heartRate, respiratoryRate, temperature }: VitalsCardProps) => {
  const getStatusColor = (level: string) => {
    if (level === "Normal") return "text-green-600";
    if (level.includes("Higher")) return "text-red-600";
    if (level.includes("Lower")) return "text-orange-600";
    return "text-muted-foreground";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-[hsl(200,100%,95%)] rounded-2xl p-5">
        <div className="w-16 h-16 rounded-full bg-[hsl(200,100%,85%)] flex items-center justify-center mb-4">
          <Activity className="w-8 h-8 text-[hsl(200,80%,40%)]" />
        </div>
        <p className="text-base font-semibold text-foreground mb-2">Respiratory Rate</p>
        <p className="text-3xl font-extrabold text-foreground mb-1">{respiratoryRate.value} bpm</p>
        <p className={`text-sm font-medium ${getStatusColor(respiratoryRate.levels)}`}>
          {respiratoryRate.levels}
        </p>
      </div>

      <div className="bg-[hsl(340,100%,95%)] rounded-2xl p-5">
        <div className="w-16 h-16 rounded-full bg-[hsl(340,100%,85%)] flex items-center justify-center mb-4">
          <Thermometer className="w-8 h-8 text-[hsl(340,82%,52%)]" />
        </div>
        <p className="text-base font-semibold text-foreground mb-2">Temperature</p>
        <p className="text-3xl font-extrabold text-foreground mb-1">{temperature.value}°F</p>
        <p className={`text-sm font-medium ${getStatusColor(temperature.levels)}`}>
          {temperature.levels}
        </p>
      </div>

      <div className="bg-[hsl(340,100%,95%)] rounded-2xl p-5">
        <div className="w-16 h-16 rounded-full bg-[hsl(340,100%,85%)] flex items-center justify-center mb-4">
          <Heart className="w-8 h-8 text-[hsl(340,82%,52%)]" />
        </div>
        <p className="text-base font-semibold text-foreground mb-2">Heart Rate</p>
        <p className="text-3xl font-extrabold text-foreground mb-1">{heartRate.value} bpm</p>
        <p className={`text-sm font-medium ${getStatusColor(heartRate.levels)}`}>
          {heartRate.levels}
        </p>
      </div>
    </div>
  );
};

export default VitalsCard;
