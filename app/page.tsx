import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Hero from '@/components/shared/Hero';
import { MissionVision } from '@/components/shared/MissionVission';
import { Services } from '@/components/shared/Services';
import { Approach } from '@/components/shared/Approach';
import { CTA } from '@/components/shared/CTA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MissionVision />
        <Services />
        <Approach />
        <CTA />
      </main>
      <Footer />
    </>
  );
}