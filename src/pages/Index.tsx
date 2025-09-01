import { Layout } from "@/components/Layout";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { ProgressRing } from "@/components/dashboard/ProgressRing";
import { StreakTracker } from "@/components/dashboard/StreakTracker";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Target, 
  Code, 
  Linkedin, 
  TrendingUp,
  Zap,
  Calendar,
  MessageCircle,
  Brain
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-5xl font-bold gradient-text">
            Welcome back, John! 
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your holistic success dashboard is ready. Let's continue building your future today.
          </p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Today's Focus - Primary Card */}
          <div className="lg:col-span-2">
            <DashboardCard title="Today's Focus" size="lg" className="relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Maintain your 7-day study streak! 🔥
                    </h3>
                    <p className="text-muted-foreground">
                      Codeforces Round #899 starting in 3 hours
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                    <Zap className="w-4 h-4 mr-2" />
                    Start Focus Session
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                    <Calendar className="w-4 h-4 mr-2" />
                    View Schedule
                  </Button>
                </div>
              </div>
              
              {/* Floating background decoration */}
              <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-pulse-glow" />
            </DashboardCard>
          </div>

          {/* Overall Aura Progress */}
          <DashboardCard title="Overall Aura" className="text-center">
            <div className="space-y-6">
              <div className="relative">
                <ProgressRing progress={78} variant="mental" label="Mental" size={100} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">78%</div>
                    <div className="text-xs text-muted-foreground">Overall</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <ProgressRing progress={85} variant="career" size={60} />
                  <div className="text-xs mt-1 gradient-career">Career</div>
                </div>
                <div>
                  <ProgressRing progress={72} variant="mental" size={60} />
                  <div className="text-xs mt-1 gradient-mental">Mental</div>
                </div>
                <div>
                  <ProgressRing progress={68} variant="physical" size={60} />
                  <div className="text-xs mt-1 gradient-physical">Physical</div>
                </div>
              </div>
            </div>
          </DashboardCard>

        </div>

        {/* Secondary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Study Streak */}
          <DashboardCard title="Study Streak" variant="mental">
            <StreakTracker streak={7} maxStreak={21} />
          </DashboardCard>

          {/* Coding Performance */}
          <DashboardCard title="Coding Performance" variant="career">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-career" />
                  <span className="font-medium">Codeforces</span>
                </div>
                <Badge variant="secondary" className="bg-career/10 text-career">
                  Expert
                </Badge>
              </div>
              
              <div className="text-3xl font-bold gradient-career">1847</div>
              <div className="flex items-center space-x-1 text-green-400">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">+47 this month</span>
              </div>
              
              <div className="h-16 bg-gradient-career opacity-20 rounded-lg flex items-end justify-around p-2">
                {[40, 60, 45, 70, 55, 80, 47].map((height, i) => (
                  <div 
                    key={i} 
                    className="bg-career rounded-sm w-3 transition-all duration-500"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </DashboardCard>

          {/* LinkedIn Profile */}
          <DashboardCard title="LinkedIn Profile" variant="career">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Linkedin className="w-5 h-5 text-[#0077B5]" />
                <span className="font-medium">Profile Strength</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Completeness</span>
                  <span className="text-sm font-medium">87%</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div className="bg-gradient-career h-2 rounded-full w-[87%] transition-all duration-1000" />
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                Add 2 more projects to reach 95%
              </div>
              
              <Button variant="outline" size="sm" className="w-full border-career/30 hover:bg-career/10">
                Update Profile
              </Button>
            </div>
          </DashboardCard>

          {/* Wellness Quick View */}
          <DashboardCard title="Wellness Status" variant="physical">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-gradient-mental rounded-full flex items-center justify-center mb-2">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-medium">Mental</div>
                  <div className="text-xs text-green-400">Positive</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-gradient-physical rounded-full flex items-center justify-center mb-2">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-medium">Physical</div>
                  <div className="text-xs text-green-400">Active</div>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full border-physical/30 hover:bg-physical/10">
                Talk to Coach
              </Button>
            </div>
          </DashboardCard>

        </div>

        {/* Quick Actions */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground/90">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-16 flex-col space-y-1">
              <Brain className="w-5 h-5" />
              <span className="text-xs">Mental Check-in</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-1">
              <Target className="w-5 h-5" />
              <span className="text-xs">Set Goal</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-1">
              <Code className="w-5 h-5" />
              <span className="text-xs">Practice Code</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-1">
              <Calendar className="w-5 h-5" />
              <span className="text-xs">Schedule Study</span>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
