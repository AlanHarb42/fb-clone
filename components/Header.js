import Image from "next/image";
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import { useSession, signOut } from "next-auth/client";

function Header() {
  const session = useSession();
  return (
    <div className="flex sticky items-center bg-white p-2 lg:px-5 top-0 z-50 shadow-md">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 w-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none
            placeholder-gray-500 flex-shrink"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/*Profile Pic*/}
        <Image
          src="https://pbs.twimg.com/profile_images/1456266135301607431/QcByil4d_400x400.jpg"
          onClick={signOut}
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
          layout="fixed"
        />

        <p className="font-semibold pr-3 whitespace-nowrap">Alan Harb</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
