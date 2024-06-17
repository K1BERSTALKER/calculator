import { Calculator } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center">
      <a
        href="/"
        className={"bg-black font-bold text-xl p-2 rounded-md text-white"}
      >
        DEV <span className="bg-orange-500 text-black p-1 rounded-md">XUB</span>
      </a>
      <div className="flex gap-2 items-center">
        <Calculator size={40} />
        <p>Calculator</p>
      </div>
    </nav>
  );
}
