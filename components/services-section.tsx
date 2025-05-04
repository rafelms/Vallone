import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function ServicesSection() {
  const services = [
    {
      title: "Consultoria Estratégica",
      description: "Análise completa do seu negócio com recomendações personalizadas para crescimento.",
      features: ["Análise de mercado", "Planejamento estratégico", "Otimização de processos"],
      image: "img/img4.jpg",
    },
    {
      title: "Desenvolvimento de Projetos",
      description: "Criação e implementação de projetos sob medida para suas necessidades.",
      features: ["Gestão de projetos", "Implementação ágil", "Acompanhamento contínuo"],
      image: "img/img5.jpg",
    },
    {
      title: "Suporte Técnico",
      description: "Assistência técnica especializada para resolver problemas e otimizar operações.",
      features: ["Atendimento rápido", "Soluções eficientes", "Suporte contínuo"],
      image: "img/img6.jpg",
    },
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004AAD] mb-4">Nossos Serviços</h2>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto">
            Oferecemos soluções completas para atender às necessidades do seu negócio. Conheça nossos principais
            serviços:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-[#EAEAEA] hover:border-[#004AAD] transition-all hover:shadow-md">
              <div className="relative">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={500}
                  height={600}
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-[#004AAD]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#333333] mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#004AAD] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
