import Image from "next/image";
export default function Page() {
  return (
    <div className="flex h-screen w-screen flex-row bg-black">
      <div className="h-screen w-1/4"> column 1 </div>
      <div className="h-screen w-1/2">
        <Inventory />
      </div>
      <div className="h-screen w-1/4"> column 3 </div>
    </div>
  );
}

function Stash() {
  return <div className="flex h-full w-full flex-col p-2"></div>;
}

function Inventory() {
  return (
    <div className="flex h-full w-full flex-col p-2">
      <div className="flex flex-row gap-x-2">
        <div className="mb-2 h-max w-1/3 rounded-md border-2 border-gray-400 p-4">
          <p className="w-full text-gray-400">Specialization</p>
        </div>
        <div className="mb-2 h-max w-1/3 rounded-md border-2 border-gray-400 p-4">
          <p className="w-full text-gray-400">Skill</p>
        </div>
        <div className="mb-2 h-max w-1/3 rounded-md border-2 border-gray-400 p-4">
          <p className="w-full text-gray-400">Skill</p>
        </div>
      </div>
      <div className="grid h-full w-full grid-cols-3 grid-rows-4 divide-x divide-y divide-gray-400 border border-gray-400">
        <div className="flex items-center justify-center bg-gray-800 bg-opacity-50">
          <Image
            src="/icons/mask.png"
            alt="mask logo"
            width={100}
            height={100}
            className="mx-auto my-auto opacity-30"
          />
        </div>
        <div className="flex items-center justify-center bg-gray-800 bg-opacity-50">
          <Image
            src="/icons/backpack.png"
            alt="mask logo"
            width={100}
            height={100}
            className="mx-auto my-auto opacity-30"
          />
        </div>
        <div className="flex items-center justify-center bg-gray-800 bg-opacity-50">
          <Image
            src="/icons/chest.png"
            alt="mask logo"
            width={100}
            height={100}
            className="mx-auto my-auto opacity-30"
          />
        </div>
        <div className="flex items-center justify-center bg-gray-800 bg-opacity-50">
          <Image
            src="/icons/gloves.png"
            alt="mask logo"
            width={100}
            height={100}
            className="mx-auto my-auto opacity-30"
          />
        </div>
        <div className="flex items-center justify-center bg-gray-800 bg-opacity-50">
          <Image
            src="/icons/holster.png"
            alt="mask logo"
            width={100}
            height={100}
            className="mx-auto my-auto opacity-30"
          />
        </div>
        <div className="flex items-center justify-center bg-gray-800 bg-opacity-50">
          <Image
            src="/icons/kneepads.png"
            alt="mask logo"
            width={100}
            height={100}
            className="mx-auto my-auto opacity-30"
          />
        </div>
        <div className="row-span-2 flex h-full flex-grow items-center justify-center bg-black">
          <Image
            src="/icons/main-weapon.png"
            alt="mask logo"
            width={100}
            height={100}
            className="mx-auto my-auto opacity-20"
          />
        </div>
        <div className="row-span-2 flex h-full flex-grow items-center justify-center bg-black">
          <Image
            src="/icons/main-weapon.png"
            alt="mask logo"
            width={100}
            height={100}
            className="mx-auto my-auto opacity-20"
          />
        </div>
        <div className="row-span-2 flex h-full flex-grow items-center justify-center bg-black">
          <Image
            src="/icons/sidearm.png"
            alt="mask logo"
            width={100}
            height={100}
            className="mx-auto my-auto opacity-20"
          />
        </div>
      </div>
    </div>
  );
}
