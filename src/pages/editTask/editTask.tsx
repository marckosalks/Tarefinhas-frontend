import { MenuNav } from "../../components/MenuNav";

export function EditTask() {
  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-center h-screen w-full ">
        <div className="flex flex-col w-2/3 bg-white h-9/12 rounded-2xl shadow-2xl ">
          <h3
            className="text-center text-5xl font-bold text-amber-950"
            style={{ paddingTop: 20 }}
          >
            Editar task
          </h3>
          <form className="flex flex-col justify-center items-center gap-5 w-full">
            <input
              type="text"
              placeholder="Titulo..."
              className="w-[80%] text-3xl bg-transparent border-none outline-none focus:outline-none focus:ring-0 shadow-none "
              style={{ padding: 60 }}
              value={"Levar pitoco pra passear"}
            />

            <input
              type="text"
              placeholder="Descrição..."
              className="w-[80%] text-2xl bg-transparent border-none outline-none focus:outline-none focus:ring-0 shadow-none "
              style={{ padding: 60 }}
              value={"Levar pitoco pra passear, não esqueça a agua e a coleira"}
            />
            <button
              className="bg-amber-950 text-white  text-xl rounded-lg font-medium hover:bg-amber-900 transition-colors"
              style={{ padding: 10 }}
              type="submit"
            >
              Alterar
            </button>
          </form>
        </div>

        <MenuNav />
      </div>
    </>
  );
}
