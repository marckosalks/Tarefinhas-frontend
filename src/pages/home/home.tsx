import { toast } from "sonner";
import { Card } from "../../components/Card";
import { MenuNav } from "../../components/MenuNav";
import { tarefinhas } from "../../mocks/tarefinha";
import { useState } from "react";

export function Home() {
  const [tarefa, setTarefa] = useState(tarefinhas);

  const handleDelete = (id: number) => {
    toast("Deseja realmente excluir essa tarefa?", {
      position: "top-center",
      duration: 5000,
      action: {
        label: "Confirmar",
        onClick: () => {
          setTarefa((estadoAnterior) => estadoAnterior.filter((tarefa) => tarefa.id !== id));//o que for igual ele discarta do novo array
          console.log(id)
          console.log(tarefa)
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
          {tarefa.map((t) => (
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
