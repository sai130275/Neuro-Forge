import { useState } from "react";
import { TrendingUp, Activity, Brain, Target, Plus, Github, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Mock data for demonstration
const MOCK_PRODUCTIVITY_SCORE = 85;
const MOCK_TREND = 12;

const MOCK_ACTIVITY_DATA = [
  { day: "Mon", coding: 4, debugging: 2, learning: 1, meetings: 1 },
  { day: "Tue", coding: 5, debugging: 1, learning: 2, meetings: 1 },
  { day: "Wed", coding: 3, debugging: 3, learning: 1, meetings: 2 },
  { day: "Thu", coding: 6, debugging: 1, learning: 1, meetings: 1 },
  { day: "Fri", coding: 4, debugging: 2, learning: 2, meetings: 1 },
];

const MOCK_BREAKDOWN = [
  { name: "Coding", value: 55, color: "#10b981" },
  { name: "Debugging", value: 20, color: "#f59e0b" },
  { name: "Learning", value: 15, color: "#3b82f6" },
  { name: "Meetings", value: 10, color: "#8b5cf6" },
];

const MOCK_INSIGHTS = [
  {
    type: "bottleneck",
    priority: "high",
    title: "Excessive Debugging Time",
    description: "Spending 40% of time on async/await errors",
    recommendation: "Review async patterns documentation",
  },
  {
    type: "pattern",
    priority: "medium",
    title: "Peak Productivity Hours",
    description: "Most productive between 9 AM - 12 PM",
    recommendation: "Schedule complex tasks during morning hours",
  },
  {
    type: "skill_gap",
    priority: "high",
    title: "TypeScript Type Errors",
    description: "Repeated type-related compilation errors",
    recommendation: "Complete TypeScript advanced types course",
  },
];

const MOCK_DAILY_PLAN = {
  tasks: [
    { task: "Refactor authentication module", priority: "high", duration: 90, completed: false },
    { task: "Review pull requests", priority: "medium", duration: 45, completed: true },
    { task: "Update API documentation", priority: "medium", duration: 60, completed: false },
  ],
  learning: "Study TypeScript utility types and generics",
  reflection: "What was the biggest challenge you faced today, and how did you overcome it?",
};

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      case "low":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold text-foreground">AI Productivity Copilot</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Github className="w-4 h-4 mr-2" />
                Connect GitHub
              </Button>
              <Button variant="ghost" size="sm">
                <Code2 className="w-4 h-4 mr-2" />
                VS Code Extension
              </Button>
              <Button variant="outline" size="sm">
                Settings
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Track your productivity and get AI-powered insights</p>
        </div>

        {/* Productivity Score Card */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Productivity Score</CardTitle>
                <CardDescription>Your overall productivity metric</CardDescription>
              </div>
              <div className="text-right">
                <div className="text-5xl font-bold text-primary">{MOCK_PRODUCTIVITY_SCORE}</div>
                <div className="text-sm text-green-600 flex items-center justify-end gap-1">
                  <TrendingUp className="w-4 h-4" />
                  +{MOCK_TREND}% this week
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Coding Efficiency</span>
                  <span className="font-medium">90%</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Learning Progress</span>
                  <span className="font-medium">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Collaboration</span>
                  <span className="font-medium">80%</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
            <TabsTrigger value="plan">Daily Plan</TabsTrigger>
            <TabsTrigger value="activity">Activity Log</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Activity Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Activity</CardTitle>
                  <CardDescription>Hours spent by activity type</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={MOCK_ACTIVITY_DATA}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="coding" stackId="a" fill="#10b981" />
                      <Bar dataKey="debugging" stackId="a" fill="#f59e0b" />
                      <Bar dataKey="learning" stackId="a" fill="#3b82f6" />
                      <Bar dataKey="meetings" stackId="a" fill="#8b5cf6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Activity Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Activity Breakdown</CardTitle>
                  <CardDescription>Time distribution this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={MOCK_BREAKDOWN}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {MOCK_BREAKDOWN.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Insights Tab */}
          <TabsContent value="insights" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold">AI-Generated Insights</h2>
                <p className="text-muted-foreground">Bottlenecks, patterns, and recommendations</p>
              </div>
              <Button>
                <Brain className="w-4 h-4 mr-2" />
                Refresh Insights
              </Button>
            </div>

            <div className="grid gap-4">
              {MOCK_INSIGHTS.map((insight, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={getPriorityColor(insight.priority)}>
                            {insight.priority}
                          </Badge>
                          <Badge variant="outline">{insight.type}</Badge>
                        </div>
                        <CardTitle className="text-lg">{insight.title}</CardTitle>
                        <CardDescription className="mt-2">{insight.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg">
                      <Target className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium text-sm mb-1">Recommendation</div>
                        <div className="text-sm text-muted-foreground">{insight.recommendation}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Daily Plan Tab */}
          <TabsContent value="plan" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold">Today's Plan</h2>
                <p className="text-muted-foreground">AI-generated action plan for maximum productivity</p>
              </div>
              <Button>
                <Target className="w-4 h-4 mr-2" />
                Generate New Plan
              </Button>
            </div>

            {/* Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>High-Impact Tasks</CardTitle>
                <CardDescription>Prioritized tasks for today</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {MOCK_DAILY_PLAN.tasks.map((task, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={task.completed}
                      className="w-5 h-5 rounded border-border"
                      readOnly
                    />
                    <div className="flex-1">
                      <div className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                        {task.task}
                      </div>
                      <div className="text-sm text-muted-foreground">{task.duration} minutes</div>
                    </div>
                    <Badge variant={getPriorityColor(task.priority)}>{task.priority}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Learning Goal */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Goal</CardTitle>
                <CardDescription>Skill development for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <Brain className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div className="text-sm">{MOCK_DAILY_PLAN.learning}</div>
                </div>
              </CardContent>
            </Card>

            {/* Reflection */}
            <Card>
              <CardHeader>
                <CardTitle>Reflection Prompt</CardTitle>
                <CardDescription>End-of-day reflection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <div className="text-sm italic">{MOCK_DAILY_PLAN.reflection}</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activity Log Tab */}
          <TabsContent value="activity" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold">Activity Log</h2>
                <p className="text-muted-foreground">Recent development activities</p>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Log Activity
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {[
                    { task: "Implemented user authentication", duration: 120, source: "manual", time: "2 hours ago" },
                    { task: "Fixed TypeScript compilation errors", duration: 45, source: "vscode", time: "4 hours ago" },
                    { task: "Merged PR #234", duration: 30, source: "github", time: "5 hours ago" },
                    { task: "Code review session", duration: 60, source: "manual", time: "Yesterday" },
                  ].map((activity, index) => (
                    <div key={index} className="p-4 hover:bg-secondary/50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-medium mb-1">{activity.task}</div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Activity className="w-4 h-4" />
                            <span>{activity.duration} minutes</span>
                            <span>•</span>
                            <Badge variant="outline" className="text-xs">
                              {activity.source}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
