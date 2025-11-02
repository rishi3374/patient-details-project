import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface DiagnosisHistoryItem {
  month: string;
  year: number;
  blood_pressure: {
    systolic: { value: number; levels: string };
    diastolic: { value: number; levels: string };
  };
  heart_rate: { value: number; levels: string };
  respiratory_rate: { value: number; levels: string };
  temperature: { value: number; levels: string };
}

interface DiagnosisChartProps {
  diagnosisHistory: DiagnosisHistoryItem[];
}

const DiagnosisChart = ({ diagnosisHistory }: DiagnosisChartProps) => {
  // Get last 6 months and reverse to show chronologically
  const last6Months = diagnosisHistory.slice(0, 6).reverse();

  const data = {
    labels: last6Months.map((item) => `${item.month.substring(0, 3)}, ${item.year}`),
    datasets: [
      {
        label: 'Systolic',
        data: last6Months.map((item) => item.blood_pressure.systolic.value),
        borderColor: 'hsl(340, 82%, 52%)',
        backgroundColor: 'hsl(340, 82%, 52%, 0.1)',
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: 'hsl(340, 82%, 52%)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 8,
      },
      {
        label: 'Diastolic',
        data: last6Months.map((item) => item.blood_pressure.diastolic.value),
        borderColor: 'hsl(250, 70%, 60%)',
        backgroundColor: 'hsl(250, 70%, 60%, 0.1)',
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: 'hsl(250, 70%, 60%)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'hsl(0, 0%, 100%)',
        titleColor: 'hsl(210, 11%, 15%)',
        bodyColor: 'hsl(210, 11%, 15%)',
        borderColor: 'hsl(220, 13%, 91%)',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.y} mmHg`;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 60,
        max: 180,
        grid: {
          color: 'hsl(220, 13%, 91%)',
        },
        ticks: {
          color: 'hsl(210, 9%, 45%)',
          font: {
            size: 12,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'hsl(210, 9%, 45%)',
          font: {
            size: 12,
          },
        },
      },
    },
  };

  // Get latest values
  const latestData = diagnosisHistory[0];

  return (
    <div className="bg-card rounded-2xl p-6">
      <h2 className="text-2xl font-extrabold text-foreground mb-6">Diagnosis History</h2>
      
      <div className="bg-secondary/50 rounded-xl p-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-foreground">Blood Pressure</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[hsl(340,82%,52%)]"></div>
              <span className="font-semibold text-foreground">Systolic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[hsl(250,70%,60%)]"></div>
              <span className="font-semibold text-foreground">Diastolic</span>
            </div>
          </div>
        </div>
        
        <div className="h-[240px]">
          <Line data={data} options={options} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[hsl(340,82%,52%)]"></div>
            <span className="text-sm font-semibold text-foreground">Systolic</span>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">
            {latestData.blood_pressure.systolic.value}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {latestData.blood_pressure.systolic.levels === "Higher than Average" ? (
              <span className="text-red-500">▲</span>
            ) : latestData.blood_pressure.systolic.levels === "Lower than Average" ? (
              <span className="text-green-500">▼</span>
            ) : null}
            {latestData.blood_pressure.systolic.levels}
          </p>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[hsl(250,70%,60%)]"></div>
            <span className="text-sm font-semibold text-foreground">Diastolic</span>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">
            {latestData.blood_pressure.diastolic.value}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {latestData.blood_pressure.diastolic.levels === "Higher than Average" ? (
              <span className="text-red-500">▲</span>
            ) : latestData.blood_pressure.diastolic.levels === "Lower than Average" ? (
              <span className="text-green-500">▼</span>
            ) : null}
            {latestData.blood_pressure.diastolic.levels}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisChart;
