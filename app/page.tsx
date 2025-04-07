import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Testimonial } from "@/components/testimonial";
import { Faq } from "@/components/faq";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Testimonial />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
