import { ReactNode } from 'react';
import { Home, Users, Calendar, MessageSquare, CreditCard, Settings, MoreVertical } from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded transform rotate-45"></div>
            </div>
            <span className="text-xl font-bold text-foreground">Tech.Care</span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Home size={20} />
              <span className="text-sm font-medium">Overview</span>
            </a>
            <a href="#" className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full">
              <Users size={20} />
              <span className="text-sm font-bold">Patients</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Calendar size={20} />
              <span className="text-sm font-medium">Schedule</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <MessageSquare size={20} />
              <span className="text-sm font-medium">Message</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <CreditCard size={20} />
              <span className="text-sm font-medium">Transactions</span>
            </a>
          </nav>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <img 
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop" 
            alt="Dr. Jose Simmons"
            className="w-11 h-11 rounded-full object-cover border-2 border-border"
          />
          <div className="text-right">
            <p className="text-sm font-semibold text-foreground">Dr. Jose Simmons</p>
            <p className="text-xs text-muted-foreground">General Practitioner</p>
          </div>
          <Settings className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
          <MoreVertical className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
