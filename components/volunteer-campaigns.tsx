import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, BookOpen } from "lucide-react"

const campaigns = [
  {
    id: 1,
    title: "Mentoria para Jovens",
    description: "Compartilhe seus conhecimentos e experiências com jovens em situação de vulnerabilidade.",
    icon: Users,
  },
  {
    id: 2,
    title: "Visitas a Asilos",
    description: "Leve companhia e alegria para idosos em casas de repouso.",
    icon: Heart,
  },
  {
    id: 3,
    title: "Aulas de Reforço",
    description: "Ajude crianças e adolescentes com dificuldades escolares.",
    icon: BookOpen,
  },
]

export function VolunteerCampaigns() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-[#2B5329] mb-6">Campanhas para Voluntários</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {campaigns.map((campaign) => (
          <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <campaign.icon className="h-12 w-12 text-[#FF5722] mb-4" />
              <CardTitle className="text-xl text-[#2B5329]">{campaign.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{campaign.description}</p>
              <Button className="w-full bg-[#FF5722] hover:bg-[#F4511E]">Quero ser voluntário</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

