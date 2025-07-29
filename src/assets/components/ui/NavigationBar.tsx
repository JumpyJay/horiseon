import { Waves } from "lucide-react";

const NavigationBar = () => {
  return (
    <div className="w-full navbar bg-gray-200 shadow-sm">
      <div className="flex w-full justify-between items-center">
        <div>
          <a
            className="flex items-center gap-2 text-gray-900 text-xl font-bold"
            href="/"
          >
            <Waves className="h-6 w-6 text-blue-600" />
            hoRISEon
          </a>
        </div>
        <div>
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                href="/about"
                className="text-xl text-black hover:text-blue-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/members"
                className="text-xl text-black hover:text-blue-600"
              >
                Members
              </a>
            </li>
            <li>
              <a
                href="/workshops"
                className="text-xl text-black hover:text-blue-600"
              >
                Workshops
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
