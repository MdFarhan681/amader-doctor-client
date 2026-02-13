import AuthForm from "@/components/auth/AuthFrom";


export const metadata = {
  title: 'Doctor Login - MediCare+',
  description: 'Healthcare provider sign in to MediCare+ platform. Manage your practice and consultations.',
};


export default function DoctorLoginPage() {
  return  <AuthForm type='login' userRole='doctor'/>
}