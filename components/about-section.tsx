import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-[#E6F0FF]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative w-full h-80 md:h-96">
              <Image
                src="img\img2b.jpg"
                alt="Sobre Vallone"
                width={600}
                height={400}
                className="rounded"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004AAD]">
              Sobre Nós
            </h2>
            <p className="text-lg text-[#333333]">
              Somos uma equipe de profissionais dedicados a oferecer soluções de
              alta qualidade para empresas de todos os tamanhos.
            </p>
            <p className="text-lg text-[#333333]">
              Com anos de experiência no mercado, entendemos as necessidades
              específicas de cada cliente e trabalhamos para entregar resultados
              excepcionais.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-3xl font-bold text-[#004AAD]">10+</h3>
                <p className="text-[#333333]">Anos de experiência</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-3xl font-bold text-[#004AAD]">500+</h3>
                <p className="text-[#333333]">Clientes satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
