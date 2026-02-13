import AuthForm from "@/components/auth/AuthFrom";

export const metadata = {
  title: 'Create Patient Account - MediCare+',
  description: 'Join MediCare+ to access quality healthcare consultations from certified doctors.',
};

export default function PatientSignUpPage() {
  return  <AuthForm type='signup' userRole='patient'/>
}