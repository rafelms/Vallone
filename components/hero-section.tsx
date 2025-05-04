import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#F8F9FA] py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#004AAD]">
            Bem-vindo a Vallone!
          </h1>
          <p className="text-lg text-[#333333]">
            Oferecemos serviços de alta qualidade para impulsionar o seu
            negócio. Entre em contato agora mesmo e descubra como podemos
            ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="btn-primary px-6 py-3 rounded-md font-medium text-center"
            >
              Fale Conosco
            </Link>
            <Link
              href="#services"
              className="px-6 py-3 rounded-md font-medium text-center border border-[#004AAD] text-[#004AAD] hover:bg-[#E6F0FF] transition-colors"
            >
              Nossos Serviços
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="img\img3.jpg"
              alt="Vallone Brasil"
              width={600}
              height={1200}
              className="rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
