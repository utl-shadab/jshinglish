import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Topic from "@/pages/topic";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { ProgressProvider } from "./context/ProgressContext";

// Import the Playground component
import Playground from './pages/playground';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/topics" component={Home} />  
      <Route path="/topic/:id" component={Topic} />
      <Route path="/playground" component={Playground} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProgressProvider>
        <LanguageProvider>
          <ThemeProvider>
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </ThemeProvider>
        </LanguageProvider>
      </ProgressProvider>
    </QueryClientProvider>
  );
}

export default App;
