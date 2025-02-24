"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  companyName: z.string().min(2, "Nome da empresa é obrigatório"),
  contactName: z.string().min(2, "Nome do contato é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  partnershipType: z.string().min(1, "Selecione um tipo de parceria"),
  message: z.string().min(10, "Mensagem é obrigatória"),
})

export function PartnershipCTA() {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      partnershipType: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Here you would typically send the form data to your backend
      console.log(values)

      toast({
        title: "Formulário enviado!",
        description: "Entraremos em contato em breve.",
      })

      setOpen(false)
      form.reset()
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro!",
        description: "Houve um erro ao enviar o formulário. Tente novamente.",
      })
    }
  }

  return (
    <div className="bg-white rounded-lg p-8 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Seja um Parceiro</h2>
      <p className="text-gray-600 mb-8">
        Entre em contato conosco para discutir as possibilidades de parceria e como podemos trabalhar juntos.
      </p>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-[#FF5722] hover:bg-[#F4511E]">Quero ser parceiro</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Formulário de Parceria</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome da Empresa</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      {form.formState.dirtyFields.companyName && !form.formState.errors.companyName && (
                        <Check className="absolute right-3 top-2.5 h-5 w-5 text-green-500" />
                      )}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do Contato</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      {form.formState.dirtyFields.contactName && !form.formState.errors.contactName && (
                        <Check className="absolute right-3 top-2.5 h-5 w-5 text-green-500" />
                      )}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      {form.formState.dirtyFields.email && !form.formState.errors.email && (
                        <Check className="absolute right-3 top-2.5 h-5 w-5 text-green-500" />
                      )}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      {form.formState.dirtyFields.phone && !form.formState.errors.phone && (
                        <Check className="absolute right-3 top-2.5 h-5 w-5 text-green-500" />
                      )}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="partnershipType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Parceria</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="logistics">Parceiro Logístico</SelectItem>
                        <SelectItem value="supplier">Parceiro Fornecedor</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea className="min-h-[100px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end gap-4 mt-6">
                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                  Fechar
                </Button>
                <Button type="submit" className="bg-[#FF5722] hover:bg-[#F4511E]">
                  Enviar
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

