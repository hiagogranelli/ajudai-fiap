import { DonationCard } from "@/components/donation-card"

const donationPoints = [
  {
    id: 1,
    name: "Casa de Apoio São José",
    image: "/placeholder.svg?height=100&width=100",
    address: "Rua Exemplo, 123 - Centro, São Paulo",
    phone: "(11) 1234-5678",
    hours: "Segunda a Sexta: 8h às 18h",
    items: ["Roupas em bom estado", "Cobertores", "Alimentos não perecíveis", "Produtos de higiene"],
    bankInfo: {
      bank: "XXX",
      agency: "0000",
      account: "00000-0",
      pix: "00.000.000/0001-00",
    },
  },
  // Add more donation points as needed
]

export default function DonationsPage() {
  return (
    <main>
      <div className="bg-[#2B5329] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Pontos de Doação</h1>
          <p className="text-xl">Conheça os locais que precisam da sua ajuda</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8">
          {donationPoints.map((point) => (
            <DonationCard key={point.id} {...point} />
          ))}
        </div>
      </div>
    </main>
  )
}

