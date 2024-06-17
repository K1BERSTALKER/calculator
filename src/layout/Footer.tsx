import { React, Redux, Shadcn, Tailwind, Vite } from "@/icons";

export default function Footer() {
  return (
    <footer className="flex justify-between">
      <div>
        <p className="opacity-50">Made with:</p>
        <div className="flex gap-4">
          <React className="w-32 opacity-70 hover:opacity-90" />
          <Vite className="w-32 opacity-70 hover:opacity-90" />
          <Redux className="w-32 opacity-70 hover:opacity-90" />
          <Tailwind className="w-32 opacity-70 hover:opacity-90" />
          <Shadcn className="w-32 opacity-70 hover:opacity-90" />
        </div>
      </div>
      <div className="flex gap-4 flex-col">
        <p className="opacity-50">Developed by:</p>
        <a
          href="/"
          className="bg-black font-bold text-xl p-2 rounded-md text-white"
        >
          DEV
          <span className="bg-orange-500 text-black p-1 rounded-md">XUB</span>
        </a>
      </div>
    </footer>
  );
}
