"use client";
import { categoryItems } from "@/data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { Input } from "./ui/input";
import UserIcon from "./icons/UserIcon";
import BasketIcon from "./icons/BasketIcon";
import HeartIcon from "./icons/HeartIcon";
import StarIcon from "./icons/StarIcon";
import LightningIcon from "./icons/LightningIcon";
import AwardIcon from "./icons/AwardIcon";
import ShoppingBagIcon from "./icons/ShoppingBagIcon";
import SearchIcon from "./icons/SearchIcon";

function Header() {
    const [fixedHeader, setFixedHeader] = useState(false);

    useEffect(() => {
        let scrollTop;
        window.addEventListener("scroll", () => {
            scrollTop = document.documentElement.scrollTop;
            scrollTop > 250 ? setFixedHeader(true) : setFixedHeader(false);
        });
        return () => window.removeEventListener("scroll");
    }, []);

    return (
        <header
            className={`transition-all duration-300 mx-auto fixed left-0 right-0 bg-gray-50 border-b-2 border-border flex flex-col px-6 md:divide-y divide-border ${
                fixedHeader
                    ? "w-full top-0"
                    : "md:top-4 w-full md:w-[95%] lg:w-[90%] xl:w-[80] md:rounded-2xl"
            }`}
        >
            {/* Top */}
            <div className="flex justify-between items-center py-6 md:py-4">
                {/* Logo L */}
                <Link
                    href={"#"}
                    className="text-2xl md:text-3xl text-primary font-Dana-Bold text-shadow-2xs justify-self-center"
                >
                    استایل&#8202;پلاس
                </Link>
                {/* Search Bar */}
                <Input
                    className="hidden md:inline font-VazirMatn-Medium text-sm max-w-xs w-full h-10 rounded-xl focus-visible:ring-0 transition-all duration-300"
                    placeholder="جستجو کنید ..."
                    type="text"
                />
                {/* Mobile Header Icons */}
                <div className="flex md:hidden items-end gap-2">
                    <Link
                        className=""
                        href={"#"}
                    >
                        <SearchIcon width={24} height={24} />
                    </Link>
                    <Link className="w-7.5 h-7.5 flex items-end justify-center relative shrink-0" href={"#"}>
                        <ShoppingBagIcon width={24} height={24} />
                        <span className="absolute -left-1.5 -top-1.5 bg-red-400 text-xs font-VazirMatn-Medium rounded-full h-5 w-5 flex items-center justify-center">
                            4
                        </span>
                    </Link>
                </div>
            </div>
            {/* Button */}
            <div className="hidden md:flex items-center justify-between py-4">
                <div className="flex items-center gap-2">
                    {/* Menu Desktop */}
                    <div className="text-sm lg:text-base">
                        <div className="group/store">
                            <Link
                                className="flex items-center gap-1 font-VazirMatn-Medium primary-link"
                                href="#"
                            >
                                <IoMenu size={24} />
                                <span>دسته بندی ها</span>
                            </Link>
                            <div className="absolute right-0 left-0 top-34 bg-white shadow-[0px_0px_50px_10px_#00000014] rounded-xl transition-all duration-300 delay-100 invisible opacity-0 group-hover/store:visible group-hover/store:opacity-100 z-20 overflow-hidden">
                                {/* Submenu List Items */}
                                <div className="border-l border-[#EDEDED] w-fit">
                                    <ul className="flex flex-col">
                                        {categoryItems.map((listItem) => {
                                            {
                                                /* const Icon = getMenuItemsIcon(
                                        listItem.title
                                    ); */
                                            }
                                            return (
                                                <li
                                                    className="group hover:bg-gray-100 primary-link"
                                                    key={listItem.id}
                                                >
                                                    <Link
                                                        className="flex px-6 py-4 gap-2 items-center font-VazirMatn-Medium"
                                                        href={listItem.href}
                                                    >
                                                        {/* <Icon size={20} /> */}
                                                        <span>
                                                            {listItem.title}
                                                        </span>
                                                    </Link>
                                                    <div className="flex flex-col items-start gap-y-10 gap-x-20 p-10 flex-wrap absolute right-[220px] left-0 w-fit transition-all duration-300 top-0 bottom-0 z-20 invisible opacity-0 text-black group-hover:opacity-100 group-hover:visible">
                                                        {listItem.items.map(
                                                            (item) => (
                                                                <div
                                                                    className="flex flex-col gap-5"
                                                                    key={
                                                                        item.id
                                                                    }
                                                                >
                                                                    <h6 className="text-primary text-xs font-VazirMatn-Medium">
                                                                        {
                                                                            item.title
                                                                        }
                                                                    </h6>
                                                                    <ul className="flex flex-col gap-2 text-sm">
                                                                        {item.links.map(
                                                                            (
                                                                                link
                                                                            ) => (
                                                                                <li
                                                                                    key={
                                                                                        link.id
                                                                                    }
                                                                                >
                                                                                    <Link
                                                                                        className="primary-link"
                                                                                        href={
                                                                                            link.href
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            link.title
                                                                                        }
                                                                                    </Link>
                                                                                </li>
                                                                            )
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Special Links */}
                    <div className="flex items-center gap-2 text-sm lg:text-base">
                        <Link
                            className="flex items-center gap-1 font-VazirMatn-Medium primary-link"
                            href="#"
                        >
                            <StarIcon width={20} height={20} />
                            <span>جدیدترین محصولات</span>
                        </Link>
                        <Link
                            className="flex items-center gap-1 font-VazirMatn-Medium primary-link"
                            href="#"
                        >
                            <LightningIcon width={20} height={20} />
                            <span>تخفیفات ویژه</span>
                        </Link>
                        <Link
                            className="flex items-center gap-1 font-VazirMatn-Medium primary-link"
                            href="#"
                        >
                            <AwardIcon width={20} height={20} />
                            <span>پرفروش ترین ها</span>
                        </Link>
                    </div>
                </div>
                {/* Icons */}
                <div className="flex items-center justify-end gap-2">
                    {/* Heart Icon */}
                    <Link
                        className="w-9 h-9 rounded flex items-center justify-center border border-border relative"
                        href={"#"}
                    >
                        <HeartIcon width={24} height={24} />
                        {/* User Fav Count */}
                        <span className="absolute -left-1.5 -top-1.5 bg-red-400 text-xs font-VazirMatn-Medium rounded-full h-5 w-5 flex items-center justify-center">
                            0
                        </span>
                    </Link>
                    {/* Basket Icon */}
                    <Link
                        className="w-9 h-9 rounded flex items-center justify-center border border-border relative"
                        href={"#"}
                    >
                        <BasketIcon width={24} height={24} />
                        {/* User Basket Count */}
                        <span className="absolute -left-1.5 -top-1.5 bg-red-400 text-xs font-VazirMatn-Medium rounded-full h-5 w-5 flex items-center justify-center">
                            4
                        </span>
                    </Link>
                    {/* User Icon */}
                    <Link
                        className="w-9 h-9 rounded flex items-center justify-center border border-border"
                        href={"#"}
                    >
                        <UserIcon width={24} height={24} />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
