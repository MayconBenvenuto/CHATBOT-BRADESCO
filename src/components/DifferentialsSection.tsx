import { CheckCircle } from "lucide-react";

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Os Diferenciais da Bradesco Seguros
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-bradesco-red rounded-full flex items-center justify-center mr-4 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Rede Referenciada de Qualidade
                  </h3>
                  <p className="text-gray-600">
                    Mais de 15.000 prestadores de serviços de saúde em todo o país, garantindo 
                    atendimento de excelência onde você estiver.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-bradesco-blue rounded-full flex items-center justify-center mr-4 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Tecnologia e Inovação
                  </h3>
                  <p className="text-gray-600">
                    App exclusivo, telemedicina, agendamento online e muito mais 
                    para facilitar o acesso aos serviços de saúde.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-bradesco-red rounded-full flex items-center justify-center mr-4 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Medicina Preventiva
                  </h3>
                  <p className="text-gray-600">
                    Programas de prevenção e promoção da saúde para manter 
                    seus colaboradores sempre saudáveis e produtivos.
                  </p>
                </div>
              </div>
            </div>
          </div>          <div className="bg-gradient-to-br from-bradesco-red to-bradesco-blue rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Números que Impressionam</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">80+</div>
                <div className="text-red-200">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4 milhões+</div>
                <div className="text-red-200">Beneficiários</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15.000+</div>
                <div className="text-red-200">Prestadores de Serviço</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5.000+</div>
                <div className="text-red-200">Cidades Atendidas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
