// User Management Types
export interface User {
  user_id: string;
  email: string;
  created_at: string;
  github_connected: boolean;
}

export interface RegisterRequest {
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  user_id: string;
  email: string;
  token: string;
}

// Activity Tracking Types
export type ActivitySource = "manual" | "github" | "vscode";
export type ActivityType = "coding" | "debugging" | "learning" | "meeting" | "planning";

export interface Activity {
  activity_id: string;
  user_id: string;
  task: string;
  duration_min: number;
  errors: number;
  context?: Record<string, any>;
  source: ActivitySource;
  timestamp: string;
  activity_type?: ActivityType;
}

export interface LogActivityRequest {
  task: string;
  duration_min: number;
  errors?: number;
  context?: Record<string, any>;
  activity_type: ActivityType;
}

// AI Analysis Types
export interface Bottleneck {
  type: string;
  description: string;
  frequency: number;
  impact: "high" | "medium" | "low";
}

export interface Insight {
  category: string;
  observation: string;
  recommendation: string;
  priority: "high" | "medium" | "low";
}

export interface ToolSuggestion {
  tool: string;
  reason: string;
  priority: "high" | "medium" | "low";
}

export interface AIInsights {
  insight_id: string;
  user_id: string;
  bottlenecks: Bottleneck[];
  insights: Insight[];
  tool_suggestions: ToolSuggestion[];
  date: string;
  created_at: string;
}

// Daily Plan Types
export interface DailyTask {
  task: string;
  priority: "high" | "medium" | "low";
  estimated_duration: number;
  completed?: boolean;
}

export interface DailyPlan {
  plan_id: string;
  user_id: string;
  tomorrow_tasks: DailyTask[];
  learning_task: string;
  reflection_question: string;
  date: string;
  completed: boolean;
  created_at: string;
}

// Dashboard Types
export interface ProductivityScore {
  score: number;
  trend: number;
  breakdown: {
    coding: number;
    learning: number;
    collaboration: number;
  };
}

export interface ActivityBreakdown {
  type: ActivityType;
  duration: number;
  percentage: number;
}

export interface DashboardData {
  user: User;
  activities: Activity[];
  productivity_score: ProductivityScore;
  latest_insights: AIInsights | null;
  today_plan: DailyPlan | null;
  activity_breakdown: ActivityBreakdown[];
}

// GitHub Integration Types
export interface GitHubSyncRequest {
  since?: string;
}

export interface GitHubSyncResponse {
  status: string;
  activities_synced: number;
  commits: number;
  pull_requests: number;
  issues: number;
}

// VS Code Telemetry Types
export interface TelemetryActivity {
  task: string;
  duration_min: number;
  errors: number;
  context: {
    file_path?: string;
    language?: string;
    error_messages?: string[];
  };
  timestamp: string;
}

export interface TelemetryRequest {
  activities: TelemetryActivity[];
}
