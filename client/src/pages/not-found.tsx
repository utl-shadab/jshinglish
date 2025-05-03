import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, BookOpen } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md mx-4 border-2 border-gray-200 dark:border-gray-700 shadow-lg">
        <CardContent className="pt-8 pb-8">
          <div className="flex flex-col items-center mb-6 text-center">
            <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">404 - Page Not Found</h1>
            <div className="h-1 w-20 bg-primary rounded my-4"></div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-sm">
              The page you're looking for doesn't exist or has been moved to another location.
            </p>
          </div>
          
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 justify-center">
            <Button asChild className="flex items-center justify-center gap-2">
              <Link href="/">
                <Home className="h-4 w-4" />
                Return Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex items-center justify-center gap-2">
              <Link href="/topics">
                <BookOpen className="h-4 w-4" />
                Browse Topics
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
