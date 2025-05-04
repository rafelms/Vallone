import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004AAD] mb-4">Entre em Contato</h2>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto">
            Estamos prontos para atender às suas necessidades. Entre em contato através de um de nossos canais de
            atendimento.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#004AAD] mb-6">Informações de contato</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#E6F0FF] p-3 rounded-full">
                    <Phone className="h-6 w-6 text-[#004AAD]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#333333]">Telefone</h4>
                    <p className="text-[#333333]">Entre em contato via WhatsApp clicando no botão do ícone!</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#E6F0FF] p-3 rounded-full">
                    <Mail className="h-6 w-6 text-[#004AAD]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#333333]">E-mail</h4>
                    <p className="text-[#333333]">contato@vallone.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#E6F0FF] p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-[#004AAD]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#333333]">Endereço</h4>
                    <p className="text-[#333333]">
                      Av. Principal, 1000 - Centro
                      <br />
                      Palmas - TO, 77000-000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#004AAD] mb-6">Horário de atendimento</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Segunda a Sexta</span>
                    <span>08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sábado</span>
                    <span>09:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Domingo</span>
                    <span>Fechado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
