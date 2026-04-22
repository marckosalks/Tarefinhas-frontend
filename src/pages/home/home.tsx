import { Card } from "../../components/Card";
import { tarefinhas } from "../../mocks/tarefinha";

import { BiTask } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

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

      <div className="flex w-full justify-center">
        <div className="rounded-2xl fixed bottom-5 w-2/3 bg-amber-950 text-white flex justify-around items-center h-16">
          {" "}
          <a href="#" className="text-2xl">
            {/* colocar tooltip */}
            <FaHome />
          </a>
          <a href="#" className="text-2xl">
            <BiTask />
          </a>
          <a href="#" className="text-2xl">
            <FaRegEdit />
          </a>
        </div>
      </div>
    </div>
  );
}
