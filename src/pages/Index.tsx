import { Layout } from "@/components/Layout";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { StreakReminder } from "@/components/dashboard/StreakReminder";
import { SessionCard } from "@/components/dashboard/SessionCard";
import { ContributionTracker } from "@/components/dashboard/ContributionTracker";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Target, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 animate-fade-in mb-4">
          <h1 className="text-4xl font-bold gradient-text">Your personal dashboard</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open a section to see details. Explore full pages when you're ready.
          </p>
        </div>

        {/* Core sections - simple and expandable */}
        <Accordion type="multiple" className="space-y-4">
          <AccordionItem value="streak">
            <AccordionTrigger>Streak reminder</AccordionTrigger>
            <AccordionContent>
              <StreakReminder />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="contributions">
            <AccordionTrigger>Coding contributions</AccordionTrigger>
            <AccordionContent>
              <ContributionTracker />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="session">
            <AccordionTrigger>Current learning session</AccordionTrigger>
            <AccordionContent>
              <SessionCard />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Clear navigation to full experiences */}
        <DashboardCard title="Explore sections" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass p-4 rounded-xl flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-mental flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Mental Coach</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Chat with an AI coach that considers your streaks and progress to guide your mindset.
                </p>
              </div>
              <Link to="/mental-coach">
                <Button size="sm" variant="outline" className="border-mental/30 hover:bg-mental/10">Open</Button>
              </Link>
            </div>

            <div className="glass p-4 rounded-xl flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-physical flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Physical Coach</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Track height, weight, BMI and use diet planner, workout scheduler, and food analysis.
                </p>
              </div>
              <Link to="/physical-coach">
                <Button size="sm" variant="outline" className="border-physical/30 hover:bg-physical/10">Open</Button>
              </Link>
            </div>

            <div className="glass p-4 rounded-xl flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-career flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Roadmaps</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Follow your learning paths and track module completion over time.
                </p>
              </div>
              <Link to="/roadmaps">
                <Button size="sm" variant="outline" className="border-career/30 hover:bg-career/10">Open</Button>
              </Link>
            </div>

            <div className="glass p-4 rounded-xl flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Day Tracker</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Review your daily activities and keep an eye on habits and time.
                </p>
              </div>
              <Link to="/day-tracker">
                <Button size="sm" variant="outline">Open</Button>
              </Link>
            </div>
          </div>
        </DashboardCard>
      </div>
    </Layout>
  );
};

export default Index;