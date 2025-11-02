import { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import PatientList from '@/components/PatientList';
import DiagnosisChart from '@/components/DiagnosisChart';
import DiagnosticList from '@/components/DiagnosticList';
import PatientProfile from '@/components/PatientProfile';
import LabResults from '@/components/LabResults';
import VitalsCard from '@/components/VitalsCard';
import { useToast } from '@/hooks/use-toast';

interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: any[];
  diagnostic_list: any[];
  lab_results: string[];
}

const Index = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      // Encode credentials for Basic Auth
      const username = 'coalition';
      const password = 'skills-test';
      const encodedCredentials = btoa(`${username}:${password}`);

      const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${encodedCredentials}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch patient data');
      }

      const data = await response.json();
      setPatients(data);
      
      // Find and select Jessica Taylor
      const jessicaTaylor = data.find((p: Patient) => p.name === 'Jessica Taylor');
      if (jessicaTaylor) {
        setSelectedPatient(jessicaTaylor);
      }
    } catch (error) {
      console.error('Error fetching patients:', error);
      toast({
        title: 'Error',
        description: 'Failed to load patient data. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-[calc(100vh-200px)]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-lg font-semibold text-muted-foreground">Loading patient data...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="grid grid-cols-12 gap-6">
        {/* Patient List - Left Sidebar */}
        <div className="col-span-12 lg:col-span-3">
          <PatientList
            patients={patients}
            selectedPatient={selectedPatient}
            onSelectPatient={setSelectedPatient}
          />
        </div>

        {/* Main Content Area */}
        <div className="col-span-12 lg:col-span-6 space-y-6">
          {selectedPatient && (
            <>
              <DiagnosisChart diagnosisHistory={selectedPatient.diagnosis_history} />
              
              <VitalsCard
                heartRate={selectedPatient.diagnosis_history[0].heart_rate}
                respiratoryRate={selectedPatient.diagnosis_history[0].respiratory_rate}
                temperature={selectedPatient.diagnosis_history[0].temperature}
              />
              
              <DiagnosticList diagnostics={selectedPatient.diagnostic_list} />
            </>
          )}
        </div>

        {/* Right Sidebar - Patient Profile */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
          {selectedPatient && (
            <>
              <PatientProfile patient={selectedPatient} />
              <LabResults labResults={selectedPatient.lab_results} />
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
