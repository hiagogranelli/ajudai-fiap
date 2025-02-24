"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Digite um email válido.",
  }),
  message: z
    .string()
    .min(10, {
      message: "A mensagem deve ter pelo menos 10 caracteres.",
    })
    .max(500, {
      message: "A mensagem não pode ter mais de 500 caracteres.",
    }),
})

export function ContactForm() {
  const { toast } = useToast()
  const [charCount, setCharCount] = useState(500)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const { watch } = form

  // Watch message field for character count
  watch((data) => {
    if (data.message) {
      setCharCount(500 - data.message.length)
    } else {
      setCharCount(500)
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Here you would typically send the form data to your backend
      console.log(values)

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      })

      form.reset()
      setCharCount(500)
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro!",
        description: "Houve um erro ao enviar sua mensagem. Tente novamente.",
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Completo</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input placeholder="Digite seu nome" {...field} />
                </FormControl>
                {form.formState.dirtyFields.name && !form.formState.errors.name && (
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
              <FormLabel>Email</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input placeholder="Digite seu email" type="email" {...field} />
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
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea placeholder="Digite sua mensagem" className="min-h-[150px]" {...field} />
              </FormControl>
              <div className="text-sm text-gray-500">Caracteres restantes: {charCount}</div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-[#2B5329] hover:bg-[#234621]" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </Button>
      </form>
    </Form>
  )
}

