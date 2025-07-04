import { CheckCircle } from "lucide-react";

interface ChatbotFinalCTAProps {
  onClose: () => void;
}

export default function ChatbotFinalCTA({ onClose }: ChatbotFinalCTAProps) {
  return (
    <div className="p-4 border-t bg-white rounded-b-2xl">
      <div className="text-center space-y-3">        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8 text-bradesco-red" />
        </div>
        <p className="text-sm text-gray-600">
          Informações enviadas com sucesso!
        </p>
        <button
          onClick={onClose}
          className="w-full bg-bradesco-red text-white py-3 rounded-xl hover:bg-primary-hover transition-colors font-semibold"
        >
          Fechar Chat
        </button>
      </div>
    </div>
  );
}
