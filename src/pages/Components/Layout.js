import { PlusOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTasks } from "../context/TaskContext";

const Layout = ({ children }) => {
  const router = useRouter();
  const { tasks } = useTasks();

  return (
    <div className="h-screen bg-gray-900 text-white">
      <header className="flex bg-gray-800  px-28 py-5 flex items-center">
        <Link href="/">
          <a>
            {" "}
            <h1 className="font-black text-lg">Task App</h1>
          </a>
        </Link>
        <span className="ml-2 text-gray-400 font-bold">
          {tasks.length}Tasks
        </span>

        <div className="flex-grow text-right">
          <button
            className="bg-green-500 hover:bg-green-400 px-5 py-2 rounded font-bold inline-flex items-center"
            onClick={() => router.push("/new")}
          >
            <PlusOutlined className="mr-2" />
            Add task
          </button>
        </div>
      </header>
      <hr />
      <main className="px-28 py-10">{children}</main>
    </div>
  );
};

export default Layout;
