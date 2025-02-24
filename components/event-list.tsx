import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Campanha de Doação de Agasalhos",
    date: "15 de Julho, 2025",
    location: "Centro Comunitário São José",
    description:
      "Ajude-nos a aquecer quem mais precisa neste inverno. Estamos coletando agasalhos, cobertores e meias em bom estado.",
  },
  {
    id: 2,
    title: "Mutirão de Limpeza do Rio",
    date: "22 de Agosto, 2025",
    location: "Parque Municipal",
    description:
      "Junte-se a nós para limpar as margens do rio e conscientizar sobre a importância da preservação ambiental.",
  },
  {
    id: 3,
    title: "Feira de Adoção de Animais",
    date: "5 de Setembro, 2025",
    location: "Praça Central",
    description:
      "Venha conhecer e possivelmente adotar um novo amigo peludo. Todos os animais são vacinados e castrados.",
  },
]

export function EventList() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#2B5329] mb-6">Próximos Eventos</h2>
      <div className="space-y-6">
        {events.map((event) => (
          <Card key={event.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-[#2B5329]">{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <CalendarDays className="h-5 w-5" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin className="h-5 w-5" />
                <span>{event.location}</span>
              </div>
              <p className="text-gray-700">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

