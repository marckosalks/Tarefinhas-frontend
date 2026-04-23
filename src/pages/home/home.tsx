import { Card } from "../../components/Card";
import { MenuNav } from "../../components/MenuNav";
import { tarefinhas } from "../../mocks/tarefinha";


export function Home() {
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
          {tarefinhas.map((tarefa) => (
            <Card title={tarefa.title} description={tarefa.description} />
          ))}
        </div>
      </div>

      <MenuNav/>
    </div>
  );
}
