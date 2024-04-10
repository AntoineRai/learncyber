import Link from "next/link";
import { ModeToggle } from "@/components/dark-light";
import Image from "next/image";
import HeaderList from "@/components/header-list";

const Header = () => {
  return (
    <header className="w-full flex flex-row justify-between items-center py-2 px-10 border-b-2">
      <Image src="/Logo.png" alt="Logo" width={100} height={50} />
      <div className="w-full flex flex-row items-center justify-center">
        <HeaderList />
      </div>
      <ModeToggle />
    </header>
  );
};

export default Header;
