import { toast } from "sonner";


export function ConfirmDelete({status: boolean}) {
  if(status){
    toast("Deseja realmente excluir essa tarefa?", {
      position: "top-center",
      duration: 5000,
      action: {
        label: "Confirmar",
        onClick: () => toast.success("Tarefa excluída com sucesso!");
      },
      cancel: "Cancelar"
    },
  )
  }
}