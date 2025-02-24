import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const donationPoints = [
  {
    name: "Casa de Apoio São José",
    description: "Aceitando doações de roupas, cobertores e alimentos não perecíveis.",
    location: "Centro - São Paulo",
  },
  {
    name: "Abrigo Esperança",
    description: "Necessidade urgente de produtos de higiene e alimentos.",
    location: "Pinheiros - São Paulo",
  },
  {
    name: "Instituto Mão Amiga",
    description: "Campanha de arrecadação de material escolar e livros.",
    location: "Vila Mariana - São Paulo",
  },
]

export function DonationPoints() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2B5329] mb-12">Pontos de Doação</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {donationPoints.map((point, index) => (
            <Link key={index} href="/doacoes" className="block group transition-transform duration-300 hover:scale-105">
              <Card className="bg-white shadow-lg h-full transition-shadow duration-300 hover:shadow-xl hover:border-[#2B5329]">
                <CardHeader>
                  <CardTitle className="text-xl text-[#2B5329] group-hover:text-[#FF5722] transition-colors duration-300">
                    {point.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {point.description}
                  </p>
                  <p className="text-sm text-gray-500 group-hover:text-[#2B5329] transition-colors duration-300">
                    {point.location}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

