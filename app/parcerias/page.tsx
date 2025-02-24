import { Heart, LineChart, Trophy } from "lucide-react"
import { PartnershipTypes } from "@/components/partnership-types"
import { PartnershipCTA } from "@/components/partnership-cta"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    title: "Impacto Social",
    icon: Heart,
    description:
      "Faça parte de uma rede que impacta diretamente a vida de milhares de pessoas em situação de vulnerabilidade.",
  },
  {
    title: "Visibilidade",
    icon: LineChart,
    description: "Destaque sua marca para um público engajado com causas sociais e aumente sua visibilidade.",
  },
  {
    title: "Reconhecimento",
    icon: Trophy,
    description: "Seja reconhecido como uma empresa que se preocupa com o bem-estar social e faz a diferença.",
  },
]

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#2B5329] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Parcerias que Transformam</h1>
          <p className="text-xl">Junte-se a nós para fazer a diferença na vida de quem precisa</p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#2B5329] mb-12">Por que ser um parceiro?</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <benefit.icon className="h-12 w-12 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center text-[#2B5329] mb-12">Tipos de Parceria</h2>
        <PartnershipTypes />
        <PartnershipCTA />
      </div>
    </main>
  )
}

