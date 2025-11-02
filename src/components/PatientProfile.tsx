import { Calendar, Phone, Shield, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PatientProfileProps {
  patient: {
    name: string;
    profile_picture: string;
    date_of_birth: string;
    gender: string;
    phone_number: string;
    emergency_contact: string;
    insurance_type: string;
  };
}

const PatientProfile = ({ patient }: PatientProfileProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-card rounded-2xl p-6">
      <div className="flex flex-col items-center mb-8">
        <img
          src={patient.profile_picture}
          alt={patient.name}
          className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-border"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop';
          }}
        />
        <h2 className="text-2xl font-extrabold text-foreground text-center">{patient.name}</h2>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
            <Calendar className="w-5 h-5 text-foreground" />
          </div>
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-1">Date Of Birth</p>
            <p className="text-sm font-bold text-foreground">{formatDate(patient.date_of_birth)}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
            <div className="w-5 h-5 flex items-center justify-center">
              {patient.gender === 'Female' ? (
                <span className="text-lg">♀</span>
              ) : (
                <span className="text-lg">♂</span>
              )}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-1">Gender</p>
            <p className="text-sm font-bold text-foreground">{patient.gender}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-foreground" />
          </div>
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-1">Contact Info</p>
            <p className="text-sm font-bold text-foreground">{patient.phone_number}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-foreground" />
          </div>
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-1">Emergency Contacts</p>
            <p className="text-sm font-bold text-foreground">{patient.emergency_contact}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-foreground" />
          </div>
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-1">Insurance Provider</p>
            <p className="text-sm font-bold text-foreground">{patient.insurance_type}</p>
          </div>
        </div>
      </div>

      <Button className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-full">
        Show All Information
      </Button>
    </div>
  );
};

export default PatientProfile;
