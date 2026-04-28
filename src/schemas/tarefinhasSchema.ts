import { z } from "zod";

export const tarefinhasfaSchema = z.object({
  title: z.string().min(3, "Título precisa ter no mínimo 3 caracteres").max(50, "Máximo de 50 caracteres"),
  description: z.string().min(3, "Descrição precisa ter no mínimo 3 caracteres").max(250, "Máximo de 250 caracteres"),
});

export type TarefinhasType = z.infer<typeof tarefinhasfaSchema>;