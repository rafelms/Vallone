import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#EAEAEA] text-[#333333] pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-[#004AAD] mb-4">ScaleUp</h3>
            <p className="mb-4">
              Oferecemos soluções profissionais para impulsionar o seu negócio. Entre em contato e descubra como podemos
              ajudar.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#004AAD] hover:text-[#333333] transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-[#004AAD] hover:text-[#333333] transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#004AAD] hover:text-[#333333] transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-[#004AAD] hover:text-[#333333] transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#004AAD] mb-4">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#services" className="hover:text-[#004AAD] transition-colors">
                Serviços
              </Link>
              <Link href="#about" className="hover:text-[#004AAD] transition-colors">
                Sobre
              </Link>
              <Link href="#contact" className="hover:text-[#004AAD] transition-colors">
                Contato
              </Link>
              <Link href="#" className="hover:text-[#004AAD] transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="hover:text-[#004AAD] transition-colors">
                Termos de Uso
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#004AAD] mb-4">Contato</h3>
            <address className="not-italic space-y-2">
              <p>Av. Principal, 1000 - Centro</p>
              <p>Palmas - TO, 77000-000</p>
              <p>Email: contato@scaleup.com.br</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} rafelms. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
