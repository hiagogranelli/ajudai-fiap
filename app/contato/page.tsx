import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fale conosco</h1>
          <p className="text-gray-600">Preencha o formulário abaixo para entrar em contato com nossa equipe.</p>
        </div>
        <ContactForm />
      </div>
    </main>
  )
}

