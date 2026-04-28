import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { tarefinhasfaSchema, type TarefinhasType } from "../schemas/tarefinhasSchema";
import { postTarefinhas } from "../services/tarefinhasServices";

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TarefinhasType>({
    resolver: zodResolver(tarefinhasfaSchema),
  });

  async function onSubmit(data: TarefinhasType) {
    try {
      await postTarefinhas(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-5 w-full"
    >
      <input
        placeholder="Titulo..."
        className="w-[80%] text-3xl bg-transparent border-none outline-none focus:outline-none focus:ring-0 shadow-none "
        style={{ padding: 60 }}
        {...register("title")}
      />
      {errors.title && (
        <span className="text-red-500">{errors.title.message}</span>
      )}

      <input
        placeholder="Descrição..."
        className="w-[80%] text-2xl bg-transparent border-none outline-none focus:outline-none focus:ring-0 shadow-none "
        style={{ padding: 60 }}
        {...register("description")}
      />
      {errors.description && (
        <span className="text-red-500">{errors.description.message}</span>
      )}

      <button
        className="bg-amber-950 text-white  text-xl rounded-lg font-medium hover:bg-amber-900 transition-colors"
        style={{ padding: 10 }}
        type="submit"
      >
        Cadastrar
      </button>
    </form>
  );
}
