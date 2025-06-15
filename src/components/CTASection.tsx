export default function CTASection({ onOpenChatbot }: { onOpenChatbot: () => void }) {
  return (    <section className="py-20 bg-bradesco-red">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-6">
          Pronto para Transformar a Saúde da sua Empresa?
        </h2>
        <p className="text-xl text-red-100 mb-8">
          Solicite uma cotação personalizada e descubra como a Bradesco Seguros pode 
          oferecer o melhor plano de saúde para sua PME.
        </p>
        <button
          onClick={onOpenChatbot}
          className="bg-white text-bradesco-red px-12 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
        >
          Solicitar Cotação Gratuita
        </button>
      </div>
    </section>
  );
}
