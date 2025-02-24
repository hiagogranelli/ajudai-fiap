import { Truck, ShoppingBag, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const partnerships = [
  {
    title: "Parceiro Logístico",
    icon: Truck,
    description: "Para empresas de transporte e logística que podem ajudar na coleta e distribuição de doações.",
    benefits: ["Logo em destaque no site", "Menção nas redes sociais", "Certificado de parceiro social"],
  },
  {
    title: "Parceiro Fornecedor",
    icon: ShoppingBag,
    description: "Para empresas que podem fornecer produtos ou descontos especiais para doações.",
    benefits: ["Destaque na seção de doações", "Banner promocional no site", "Relatório de impacto social"],
  },
]

export function PartnershipTypes() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      {partnerships.map((partnership, index) => (
        <Card key={index} className="bg-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <partnership.icon className="h-6 w-6 text-[#2B5329]" />
              <CardTitle className="text-2xl text-[#2B5329]">{partnership.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">{partnership.description}</p>
            <ul className="space-y-3">
              {partnership.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#2B5329]" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

