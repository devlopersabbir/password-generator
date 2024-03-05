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
    <div className="container mx-auto flex flex-col justify-center items-center h-screen">
      {/* top bar */}
      <div className="flex gap-0 flex-col text-center justify-center items-center">
        <h1 className="text-4xl capitalize font-black">
          Secure, Random Password Generator
        </h1>
        <p className="text-4xl font-normal">Need a password?</p>
        <p className="text-base font-normal mt-3">
          Create strong and secure passwords to keep your account safe online
        </p>
      </div>
      {/* main container */}
      <div className="flex justify-center items-center gap-5 mt-7 container">
        {/* left side image */}
        <div className="flex items-center justify-center w-1/2">
          <img src="/img.svg" alt="image" className="w-3/4" />
        </div>
        {/* right side content */}
        <div className="flex flex-col justify-center items-center w-1/2">
          <div className="flex flex-col gap-3 justify-center items-center w-4/5">
            {/* output section && copy section */}
            <div className="flex justify-between items-center w-full gap-4 mb-5">
              <div className="w-full rounded-full relative flex justify-center items-center">
                <Input
                  value={generatedPassword}
                  disabled
                  type="text"
                  className="text-center w-full rounded-full text-lg disabled:font-bold disabled:text-zinc-900 font-semibold text-zinc-900 disabled:opacity-100"
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
                <Copy size={20} />
              </Button>
            </div>

            {/* password length */}
            <div className="flex flex-col justify-center items-center gap-4 w-full">
              <label className="font-semibold text-base">
                Password Length: {passwordLenght}
              </label>
              <div className="flex justify-between items-center w-full gap-2">
                <img src="/drc.svg" alt="drc" />
                <Slider
                  onValueChange={(e) => setPasswordLenght(e)}
                  value={passwordLenght}
                  max={20}
                  min={2}
                  step={1}
                  className="w-3/4"
                />
                <img src="/inc.svg" alt="inc" />
              </div>
            </div>
            {/* bottom section */}
            <div className="flex flex-col mt-7 w-full">
              <p className="text-base font-semibold">Customize your password</p>
              <div className="w-full bg-zinc-900 py-[1px] my-2" />
            </div>
            {/* uppercase section */}
            <div className="flex justify-between items-center w-full">
              <label htmlFor="uppercase" className="font-semibold capitalize">
                uppercase
              </label>
              <Switch
                id="uppercase"
                onCheckedChange={(e) => setUppercase(e)}
                checked={uppercase}
              />
            </div>
            {/* lowercase section */}
            <div className="flex justify-between items-center w-full">
              <label className="font-semibold capitalize" htmlFor="lowercase">
                lowercase
              </label>
              <Switch
                id="lowercase"
                onCheckedChange={(e) => setLowercase(e)}
                checked={lowercase}
              />
            </div>
            {/* numbers section */}
            <div className="flex justify-between items-center w-full">
              <label htmlFor="numbers" className="font-semibold capitalize">
                numbers
              </label>
              <Switch
                onCheckedChange={(e) => setNumbers(e)}
                id="numbers"
                checked={numbers}
              />
            </div>
            {/* spacial charector section */}
            <div className="flex justify-between items-center w-full">
              <label htmlFor="spacial" className="font-semibold capitalize">
                spacial charector
              </label>
              <Switch
                onCheckedChange={(e) => setSpacial(e)}
                id="spacial"
                checked={spacial}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
