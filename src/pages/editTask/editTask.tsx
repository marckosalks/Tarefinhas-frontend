import { MenuNav } from "../../components/MenuNav";

export function EditTask() {
  return (
    <>
      <h3>Editar tarefa</h3>
      
      <form>
        <span>Titulo</span>
        <input type="text" />
        <span>descição</span>
        <input type="text" />
        <button>Altere o texto que está aqui dentro</button>
      </form>

      <MenuNav />
    </>
  );
}
