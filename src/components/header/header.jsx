
import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import CartButton from "./button/cartButton";
import LoginButton from "./button/loginButton";
import LoginModal from "./login/loginModal";
import SearchBar from "./search/SearchBar";
const Header = () => {

    return (
        <div className="flex pt-2 pb-4 items-end justify-between gap-4 bg-base-100 lg:px-10">
            <div className="col-span-3 flex justify-center items-center ">
                <div className="mr-10">
                    <Link href="/">
                        <Image
                            className="h-6 w-auto sm:h-10"
                            src="/assets/logo.webp"
                            alt="logo"
                            priority={true}
                            width={200}
                            height={200}
                        />
                    </Link>
                </div>
                <div
                    className=" cursor-pointer hover:outline rounded-sm outline-teal-400 p-[2px] ">
                    <p className="font-semibold text-sm text-slate-600">
                        Deliver to <span className="font-bold text-teal-600">Bulbul</span>
                    </p>
                    <div className="flex items-center">
                        <IoLocationOutline className=" text-gray-600" />
                        <p className="font-bold text-sm text-teal-500">
                            Gopalganj, Dhaka...
                        </p>
                    </div>
                </div>
            </div>
            <div className="grow">
                <SearchBar />
            </div>
            <div className="col-span-3 flex gap-4 justify-center items-center">
                <LoginButton />
                <Link
                    href=""
                    className=" cursor-pointer hover:outline rounded-sm outline-teal-400 p-[2px] ">
                    <p className="font-semibold text-sm text-slate-600">Returns</p>

                    <p className="font-bold text-base text-teal-500">& Orders</p>
                </Link>
                <CartButton />
            </div>
            <LoginModal />
        </div>
    );
};

export default Header;
