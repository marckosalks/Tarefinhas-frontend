import { Form } from "../../components/Form";
import { MenuNav } from "../../components/MenuNav";

export function NewTask() {
  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-center h-screen w-full ">
        <div className="flex flex-col w-2/3 bg-white h-9/12 rounded-2xl shadow-2xl ">
          <h3
            className="text-center text-5xl font-bold text-amber-950"
            style={{ paddingTop: 20 }}
          >
            Cadastrar task
          </h3>
          <Form />
        </div>
        <MenuNav />
      </div>
    </>
  );
}
