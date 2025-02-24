"use client"

import Image from "next/image"
import { MapPin, Phone, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface DonationCardProps {
  name: string
  image: string
  address: string
  phone: string
  hours: string
  items: string[]
  bankInfo: {
    bank: string
    agency: string
    account: string
    pix: string
  }
}

export function DonationCard({ name, image, address, phone, hours, items, bankInfo }: DonationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid md:grid-cols-[200px,1fr] gap-6">
        <div className="relative h-[200px] w-full">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover rounded-lg" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#2B5329] mb-4">{name}</h2>

          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-5 w-5" />
              <span>{address}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="h-5 w-5" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-5 w-5" />
              <span>{hours}</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Itens necessários:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {items.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <Check className="h-5 w-5 text-[#2B5329]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[#FF5722] hover:bg-[#F4511E] text-white">Como Doar</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Como doar para {name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <h3 className="font-medium">Opções de doação:</h3>
                <ul className="space-y-2">
                  <li>• Entrega presencial no endereço</li>
                  <li>• Agendamento de coleta (raio de 5km)</li>
                  <li>
                    • Transferência bancária:
                    <ul className="pl-4 pt-2 space-y-1 text-gray-600">
                      <li>Banco: {bankInfo.bank}</li>
                      <li>Agência: {bankInfo.agency}</li>
                      <li>Conta: {bankInfo.account}</li>
                      <li>PIX: {bankInfo.pix}</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

