"use client"

import { useState } from "react"
import { ptBR } from "date-fns/locale"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const events = [
  { date: new Date(2025, 6, 15), title: "Campanha de Doação de Agasalhos" },
  { date: new Date(2025, 7, 22), title: "Mutirão de Limpeza do Rio" },
  { date: new Date(2025, 8, 5), title: "Feira de Adoção de Animais" },
]

export function EventCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-[#2B5329]">Calendário de Eventos</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          locale={ptBR}
          formatters={{
            formatCaption: (date) => {
              return format(date, "MMMM yyyy", { locale: ptBR }).toLowerCase()
            },
            formatWeekday: (date) => {
              return format(date, "eee", { locale: ptBR }).toLowerCase()
            },
          }}
          className="calendar-custom"
          modifiers={{
            event: (date) => events.some((event) => event.date.toDateString() === date.toDateString()),
          }}
          modifiersStyles={{
            event: { backgroundColor: "#FF5722", color: "white" },
          }}
          components={{
            IconLeft: () => <ChevronLeft className="h-4 w-4" />,
            IconRight: () => <ChevronRight className="h-4 w-4" />,
          }}
        />
        <div className="mt-4">
          <h3 className="font-semibold text-lg mb-2">Eventos neste dia:</h3>
          {events
            .filter((event) => date && event.date.toDateString() === date.toDateString())
            .map((event, index) => (
              <p key={index} className="text-gray-700">
                {event.title}
              </p>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}

