
import MainLayout from '@/components/layout/MainLayout';
import LoginForm from '@/components/auth/LoginForm';

const Login = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Sign In to Athenas</h1>
          <LoginForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
