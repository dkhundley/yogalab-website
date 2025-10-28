import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Your Class - Yoga Lab',
  description: 'Book your yoga class at Yoga Lab in Bloomington, IL. Join our community for regulated movement and mindful connection.',
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}