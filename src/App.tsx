import { Copy } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

const App = () => {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="max-w-lg p-10 rounded-lg shadow-lg flex justify-center items-center flex-col">
        <img className="w-40 mb-2" src="/logo.gif" alt="logo" />
        <div className="flex gap-2 flex-col text-center justify-center items-center">
          <h1 className="text-3xl uppercase font-bold">password Generator</h1>
          <p className="text-base">
            Create strong and secure passwords to keep your account safe online
          </p>
        </div>
        {/* input & copy */}
        <div className="flex justify-between items-center w-full gap-4 mt-5">
          <Input type="text" className="w-full rounded-full" />
          <Button className="text-lg">
            <Copy className="mr-2" size={20} />
            Copy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
