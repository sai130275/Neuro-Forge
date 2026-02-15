import { motion } from "framer-motion";
import { ArrowRight, Activity, Brain, Target, Github, Code2, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FEATURES = [
  {
    icon: Activity,
    title: "Automatic Activity Tracking",
    desc: "Track your development work through GitHub integration and VS Code extension",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    desc: "Detect bottlenecks, repeated errors, and workflow inefficiencies automatically",
  },
  {
    icon: Target,
    title: "Personalized Planning",
    desc: "Get daily action plans with high-impact tasks and learning goals tailored to you",
  },
];

const STATS = [
  { value: "20%", label: "Avg. debugging time reduction" },
  { value: "15%", label: "Productivity score increase" },
  { value: "70%", label: "User engagement rate" },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold text-foreground">AI Productivity Copilot</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate("/dashboard")}>
                Dashboard
              </Button>
              <Button onClick={() => navigate("/auth/login")}>Sign In</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-secondary text-sm">
              <Brain className="w-4 h-4 text-primary" />
              <span>AI-Powered Productivity for Developers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Track, Analyze, and Optimize{" "}
              <span className="text-primary">Your Development Workflow</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              An intelligent productivity assistant that collects your activity data, detects bottlenecks,
              and generates personalized daily plans to help you work smarter and learn faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={() => navigate("/auth/register")} className="gap-2">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/dashboard")}>
                View Demo
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to Boost Productivity
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to track, analyze, and improve your development workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple setup, powerful insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Code2, title: "Connect", desc: "Link GitHub and install VS Code extension" },
              { icon: Activity, title: "Track", desc: "Automatic activity collection from all sources" },
              { icon: Brain, title: "Analyze", desc: "AI detects patterns and bottlenecks" },
              { icon: Target, title: "Improve", desc: "Get personalized daily action plans" },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-sm font-semibold text-primary mb-2">Step {index + 1}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join developers who are working smarter with AI-powered insights
            </p>
            <Button size="lg" onClick={() => navigate("/auth/register")} className="gap-2">
              Start Free Today
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="font-semibold">AI Productivity Copilot</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2026 AI Productivity Copilot. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
