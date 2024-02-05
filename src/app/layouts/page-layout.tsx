import Nav from '@/components/nav';
import Footer from '@/components/footer';

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
