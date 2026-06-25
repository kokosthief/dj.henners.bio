import { redirect } from 'next/navigation';

export default function ContactPage() {
  redirect('/?contact=1');
}
