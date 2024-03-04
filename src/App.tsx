import { Copy, RotateCw } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useEffect, useState } from "react";
import { Slider } from "./components/ui/slider";
import { Switch } from "./components/ui/switch";
import { combine, generateRandomString } from "./lib/utils";

const App = () => {
  const [generatedPassword, setGeneratedPassword] = useState<string>("234dfa");
  const [passwordLenght, setPasswordLenght] = useState<number[]>([4]);
  const [numbers, setNumbers] = useState<boolean>(true);
  const [spacial, setSpacial] = useState<boolean>(false);
  const [uppercase, setUppercase] = useState<boolean>(false);
  const [lowercase, setLowercase] = useState<boolean>(false);

  function generate() {
    const combinedString = combine(uppercase, lowercase, numbers, spacial);
    setGeneratedPassword(
      generateRandomString(Number(passwordLenght.join("")), combinedString)
    );
  }
  useEffect(() => {
    generate();
  }, [passwordLenght, numbers, spacial, uppercase, lowercase]);
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="max-w-lg p-10 rounded-lg shadow-lg flex justify-center items-center flex-col gap-4">
        <img className="w-40 mb-2" src="/logo.gif" alt="logo" />
        <div className="flex gap-2 flex-col text-center justify-center items-center">
          <h1 className="text-3xl uppercase font-bold">password Generator</h1>
          <p className="text-base">
            Create strong and secure passwords to keep your account safe online
          </p>
        </div>
        {/* input & copy */}
        <div className="flex justify-between items-center w-full gap-4 mt-5">
          <div className="w-full rounded-full relative flex justify-center items-center">
            <Input
              value={generatedPassword}
              disabled
              type="text"
              className="w-full rounded-full text-lg disabled:font-bold disabled:text-zinc-900 font-semibold text-zinc-900 disabled:opacity-100"
            />
            <RotateCw
              onClick={generate}
              size={24}
              className="absolute right-3 font-bold top-2 cursor-pointer"
            />
          </div>
          <Button
            className="text-lg rounded-full"
            onClick={async () =>
              await navigator.clipboard.writeText(generatedPassword)
            }
          >
            <Copy className="mr-2" size={20} />
            Copy
          </Button>
        </div>
        {/* password length */}
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <label className="font-semibold text-base">
            Password Length: {passwordLenght}
          </label>
          <Slider
            onValueChange={(e) => setPasswordLenght(e)}
            max={20}
            min={2}
            step={1}
            className="w-3/4"
          />
        </div>
        {/* uppercase section */}
        <div className="flex justify-between items-center w-full">
          <label htmlFor="uppercase">uppercase</label>
          <Switch
            id="uppercase"
            onCheckedChange={(e) => setUppercase(e)}
            checked={uppercase}
          />
        </div>
        {/* lowercase section */}
        <div className="flex justify-between items-center w-full">
          <label>lowercase</label>
          <Switch
            onCheckedChange={(e) => setLowercase(e)}
            checked={lowercase}
          />
        </div>
        {/* numbers section */}
        <div className="flex justify-between items-center w-full">
          <label htmlFor="numbers">numbers</label>
          <Switch
            onCheckedChange={(e) => setNumbers(e)}
            id="numbers"
            checked={numbers}
          />
        </div>
        {/* spacial charector section */}
        <div className="flex justify-between items-center w-full">
          <label htmlFor="spacial">spacial charector</label>
          <Switch
            onCheckedChange={(e) => setSpacial(e)}
            id="spacial"
            checked={spacial}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
