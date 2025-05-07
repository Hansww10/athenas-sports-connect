
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";

const NotFound = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
        <p className="text-gray-500 max-w-md text-center mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="bg-primary text-white">
            Return to Home
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFound;
