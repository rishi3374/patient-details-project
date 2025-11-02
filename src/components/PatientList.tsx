import { Search, MoreHorizontal } from 'lucide-react';

interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
}

interface PatientListProps {
  patients: Patient[];
  selectedPatient: Patient | null;
  onSelectPatient: (patient: Patient) => void;
}

const PatientList = ({ patients, selectedPatient, onSelectPatient }: PatientListProps) => {
  return (
    <div className="bg-card rounded-2xl p-5 h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold text-foreground">Patients</h2>
        <Search className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
      </div>

      <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-200px)]">
        {patients.map((patient) => (
          <div
            key={patient.name}
            onClick={() => onSelectPatient(patient)}
            className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all ${
              selectedPatient?.name === patient.name
                ? 'bg-primary/10 border border-primary'
                : 'hover:bg-secondary'
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src={patient.profile_picture}
                alt={patient.name}
                className="w-12 h-12 rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop';
                }}
              />
              <div>
                <p className="font-bold text-sm text-foreground">{patient.name}</p>
                <p className="text-xs text-muted-foreground">
                  {patient.gender}, {patient.age}
                </p>
              </div>
            </div>
            <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
