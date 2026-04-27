import { BiTask } from "react-icons/bi";
import { FaHome, FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export function MenuNav() {
  return (
    <div className="flex w-full justify-center">
      <div className="rounded-2xl fixed bottom-5 w-[58%] bg-amber-950 text-white flex justify-around items-center h-16">
        {" "}
        <Link className="text-2xl" to="/">
          <FaHome />
        </Link>
        <Link className="text-2xl" to="/newtask">
          <BiTask />
        </Link>
        <Link className="text-2xl" to="/edittask">
          <FaRegEdit />
        </Link>
      </div>
    </div>
  );
}
