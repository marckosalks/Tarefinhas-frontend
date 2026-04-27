import { z } from "zod"

export const tarefinhasfaSchema = z.object({
  title: z.string().min(1, "Campo titulo é obrigatório!").max(50, "O campo titulo deve ter no máximo 50 caracteres"),
  description: z.string().min(1, "Campo descrição é obrigatório!").max(250, "O campo descrição deve ter no máximo 250 caracteres"),
}); 

export type TarefinhasType = z.infer<typeof tarefinhasfaSchema>;