import BenefitsSection from "./BenefitsSection";
import DifferentialsSection from "./DifferentialsSection";
import TestimonialsSection from "./TestimonialsSection";
import CTASection from "./CTASection";
import Footer from "./Footer";
import { CheckCircle } from "lucide-react";

interface LandingPageProps {
  onOpenChatbot: () => void;
}

export default function LandingPage({ onOpenChatbot }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center h-auto py-3 min-h-[4rem] gap-2">
            <div className="flex items-center min-w-0">
              <img src="/logo-bradesco.png" alt="Logo Bradesco Seguros" className="w-28 sm:w-32 h-auto object-contain" />
              <span className="ml-2 text-sm sm:text-xl font-bold text-gray-900 truncate">Planos de Saúde Empresas</span>
            </div>
            <nav className="hidden md:flex flex-wrap space-x-4 sm:space-x-8 mt-2 md:mt-0">
              <a href="#beneficios" className="text-gray-700 hover:text-bradesco-red text-sm sm:text-base">Benefícios</a>
              <a href="#diferenciais" className="text-gray-700 hover:text-bradesco-red text-sm sm:text-base">Diferenciais</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-bradesco-red text-sm sm:text-base">Depoimentos</a>
              <a href="#contato" className="text-gray-700 hover:text-bradesco-red text-sm sm:text-base">Contato</a>
            </nav>            <button
              onClick={onOpenChatbot}
              className="bg-bradesco-red text-white px-3 py-2 rounded-lg hover:bg-primary-hover transition-colors font-semibold w-auto text-xs sm:text-base"
            >
              Solicitar Cotação
            </button>
          </div>
        </div>
      </header>      {/* Hero Section */}
      <section className="bg-cover bg-center bg-no-repeat relative text-white py-12 sm:py-20" style={{ backgroundImage: "url('/edf-bradesco.png')" }}>
        <div className="absolute inset-0 bg-black opacity-65"></div>        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6">
                Planos de Saúde Empresas <br />
                <span className="block text-red-200">Bradesco Seguros</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-xl mb-4 sm:mb-8 text-gray-100">
                Proteja sua empresa e seus colaboradores com o melhor plano de saúde do mercado. 
                Cobertura completa, atendimento humanizado e economia garantida.
              </p>              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <button
                  onClick={onOpenChatbot}
                  className="bg-bradesco-red text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg hover:bg-primary-hover transition-colors font-semibold text-sm sm:text-base lg:text-lg w-full sm:w-auto"
                >
                  Solicitar Cotação Gratuita
                </button>
                <button
                  onClick={onOpenChatbot}
                  className="border-2 border-white text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg hover:bg-white hover:text-bradesco-blue transition-colors font-semibold text-sm sm:text-base lg:text-lg w-full sm:w-auto"
                >
                  Saiba Mais
                </button>
              </div>
            </div>            <div className="relative mt-6 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-6 lg:p-8">
                <h3 className="text-base sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4">Por que escolher a Bradesco Seguros?</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-200 mr-2 sm:mr-3 mt-0.5" />
                    <span className="text-xs sm:text-sm lg:text-base">Uma das maiores redes de atendimento do Brasil</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-200 mr-2 sm:mr-3 mt-0.5" />
                    <span className="text-xs sm:text-sm lg:text-base">Atendimento 24h em emergências</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-200 mr-2 sm:mr-3 mt-0.5" />
                    <span className="text-xs sm:text-sm lg:text-base">Ampla cobertura com hospitais de referência</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-200 mr-2 sm:mr-3 mt-0.5" />
                    <span className="text-xs sm:text-sm lg:text-base">Planos personalizados para PEQUENAS, MÉDIAS E GRANDES EMPRESAS - A PARTIR DE 1 VIDA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <BenefitsSection />

      {/* Diferenciais */}
      <DifferentialsSection />

      {/* Depoimentos */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection onOpenChatbot={onOpenChatbot} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
