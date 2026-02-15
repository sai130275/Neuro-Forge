import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, TrendingUp } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <TrendingUp className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button onClick={() => navigate("/")} className="gap-2">
          <Home className="w-4 h-4" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
