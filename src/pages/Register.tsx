
import MainLayout from '@/components/layout/MainLayout';
import RegisterForm from '@/components/auth/RegisterForm';

const Register = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Join Athenas</h1>
          <RegisterForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
