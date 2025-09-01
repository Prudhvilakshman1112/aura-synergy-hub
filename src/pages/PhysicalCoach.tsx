import { Layout } from "@/components/Layout";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Apple, 
  Dumbbell, 
  Droplets,
  Zap,
  Clock,
  Target
} from "lucide-react";

const PhysicalCoach = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-physical flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold gradient-physical">Physical Wellness Coach</h1>
              <p className="text-muted-foreground">Optimize your body for peak performance</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Focus */}
            <DashboardCard title="Today's Health Focus" variant="physical" size="lg">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-physical flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Pre-Contest Energy Boost
                    </h3>
                    <p className="text-muted-foreground">
                      Optimize your nutrition and hydration for peak mental performance
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="glass p-4 rounded-xl text-center">
                    <Apple className="w-8 h-8 mx-auto mb-2 text-physical" />
                    <div className="font-medium">Brain Food</div>
                    <div className="text-sm text-muted-foreground">Blueberries & nuts</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <Droplets className="w-8 h-8 mx-auto mb-2 text-physical" />
                    <div className="font-medium">Hydration</div>
                    <div className="text-sm text-muted-foreground">2.5L target</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2 text-physical" />
                    <div className="font-medium">Quick Walk</div>
                    <div className="text-sm text-muted-foreground">10 min break</div>
                  </div>
                </div>
              </div>
            </DashboardCard>

            {/* Workout Plan */}
            <DashboardCard title="Study Break Workouts" variant="physical">
              <div className="space-y-4">
                {[
                  { name: "Desk Stretches", duration: "5 min", completed: true },
                  { name: "Eye Exercises", duration: "2 min", completed: true },
                  { name: "Neck & Shoulder Relief", duration: "3 min", completed: false },
                  { name: "Quick Cardio Burst", duration: "7 min", completed: false }
                ].map((workout, i) => (
                  <div key={i} className="flex items-center justify-between p-4 glass rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        workout.completed ? 'bg-gradient-physical' : 'bg-muted/30'
                      }`}>
                        <Dumbbell className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">{workout.name}</div>
                        <div className="text-sm text-muted-foreground">{workout.duration}</div>
                      </div>
                    </div>
                    <Button 
                      variant={workout.completed ? "secondary" : "outline"} 
                      size="sm"
                      className={workout.completed ? "bg-physical/20 text-physical" : "border-physical/30"}
                    >
                      {workout.completed ? "Done" : "Start"}
                    </Button>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Daily Goals */}
            <DashboardCard title="Daily Goals" variant="physical">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Water Intake</span>
                    <span className="text-sm font-medium">1.8L / 2.5L</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Steps</span>
                    <span className="text-sm font-medium">6,240 / 8,000</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Active Minutes</span>
                    <span className="text-sm font-medium">18 / 30</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
              </div>
            </DashboardCard>

            {/* Nutrition */}
            <DashboardCard title="Smart Nutrition" variant="physical">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-physical">1,847</div>
                  <div className="text-sm text-muted-foreground">Calories today</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Breakfast</span>
                    <Badge variant="secondary" className="bg-physical/10 text-physical">
                      Brain-boosting
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Oatmeal with berries - High in antioxidants for focus
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full border-physical/30">
                  Log Meal
                </Button>
              </div>
            </DashboardCard>

            {/* Health Metrics */}
            <DashboardCard title="Health Metrics" variant="physical">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-physical">72</div>
                    <div className="text-xs text-muted-foreground">BPM</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-physical">7.2h</div>
                    <div className="text-xs text-muted-foreground">Sleep</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-physical" />
                  <span className="text-sm">All systems optimal for studying!</span>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PhysicalCoach;