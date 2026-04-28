import { toast } from "sonner";
import { Card } from "../../components/Card";
import { MenuNav } from "../../components/MenuNav";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteTarefinhas, getTarefinhas } from "../../services/tarefinhasServices";

type Task = {
  id: number;
  title: string;
  description: string;
};

export function Home() {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["tarefinhas"],
    queryFn: getTarefinhas,
  });

  const mutation = useMutation({
    // mutation chamando o metodo de deletar
    mutationFn: (id: number) => deleteTarefinhas(id),

    // invalidar a query
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tarefinhas"] });
    },
  });

  const handleDelete = (id: number) => {
    toast("Deseja realmente excluir essa tarefa?", {
      position: "top-center",
      duration: 5000,
      action: {
        label: "Confirmar",
        onClick: () => {
          // chamo minha função mutation
          mutation.mutate(id)
          toast.success("Tarefa excluída com sucesso!");
        },
      },
      cancel: "Cancelar",
    });
  };

  return (
    <div className="w-full h-screen">
      <div className="">
        <h1 className=" font-bold text-7xl text-center pt-8 text-amber-950 pb-5">
          Seja Bem-Vindo ao <br />
          Tarefinhas.com
        </h1>
      </div>

      <div className="card-tarefa h-80 w-full mt-10">
        <div className="flex gap-6 justify-center" style={{ padding: 40 }}>
          {data !== undefined &&
            data.map((t: Task) => (
              <Card
                key={t.id}
                id={t.id}
                title={t.title}
                description={t.description}
                handleDelete={handleDelete}
              />
            ))}
        </div>
      </div>

      <MenuNav />
    </div>
  );
}
