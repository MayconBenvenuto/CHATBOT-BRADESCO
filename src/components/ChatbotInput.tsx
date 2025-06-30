 import { Send, SkipForward } from "lucide-react";

interface ChatbotInputProps {
  input: string;
  step: string;
  isTyping: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleSkipStep: () => void;
  getInputPlaceholder: (step: string) => string;
}

export default function ChatbotInput({ input, step, isTyping, inputRef, handleInputChange, handleSubmit, handleSkipStep, getInputPlaceholder }: ChatbotInputProps) {
  return (
    <div className="p-4 bg-white border-t border-gray-200">
      {/* Botão Pular para CNPJ */}
      {step === "numero_cnpj" && (
        <div className="mb-3">
          <button
            type="button"
            onClick={handleSkipStep}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <SkipForward className="w-4 h-4" />
            Pular esta etapa
          </button>
        </div>
      )}
      
      <form onSubmit={e => { void handleSubmit(e); }} className="relative">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              void handleSubmit(e as any);
            }
          }}        placeholder={getInputPlaceholder(step)}
          className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-bradesco-red transition-shadow text-sm"
          disabled={isTyping}
          maxLength={step === 'numero_cnpj' ? 18 : undefined}
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-bradesco-red text-white p-2 rounded-full hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Enviar mensagem"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
