import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: LayoutProps) {
  return (
    <>
      <Nav />

      <main>{children}</main>

      <Footer />
    </>
  );
}
