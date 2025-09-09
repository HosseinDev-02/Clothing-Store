"use client";
import { categoryItems, userBasketItems, userMenuItems } from "@/data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoMenu, IoShirt } from "react-icons/io5";
import { Input } from "./ui/input";
import UserIcon from "./icons/UserIcon";
import BasketIcon from "./icons/BasketIcon";
import HeartIcon from "./icons/HeartIcon";
import StarIcon from "./icons/StarIcon";
import LightningIcon from "./icons/LightningIcon";
import AwardIcon from "./icons/AwardIcon";
import ShoppingBagIcon from "./icons/ShoppingBagIcon";
import SearchIcon from "./icons/SearchIcon";
import HomeIcon from "./icons/HomeIcon";
import TShirtIcon from "./icons/TShirtIcon";
import { Badge } from "./ui/badge";
import ContactsIcon from "./icons/ContactsIcon";
import SettingIcon from "./icons/SettingIcon";
import LogoutIcon from "./icons/LogoutIcon";
import BasketItem from "./BasketItem/BasketItem";
import { Button } from "./ui/button";
import CrossIcon from "./icons/CrossIcon";
import { ChevronDown, ChevronLeft, XIcon } from "lucide-react";
import MenuItem from "./MenuItem/MenuItem";

const mobileMenuLinks = [
    {
        id: 1,
        title: "خانه",
        href: "#",
    },
    {
        id: 2,
        title: "دسته بندی",
        href: "#",
    },
    {
        id: 3,
        title: "علاقه مندی",
        href: "#",
    },
    {
        id: 4,
        title: "پروفایل",
        href: "#",
    },
];

const setMobileMenuLinkIcons = (title) => {
    return (
        (title === "خانه" && HomeIcon) ||
        (title === "دسته بندی" && TShirtIcon) ||
        (title === "علاقه مندی" && HeartIcon) ||
        (title === "پروفایل" && UserIcon)
    );
};

const setUserMenuItemIcon = (title) => {
    return (
        (title === "پروفایل" && ContactsIcon) ||
        (title === "تنظیمات" && SettingIcon) ||
        (title === "خروج" && LogoutIcon)
    );
};

function Header() {
    const [fixedHeader, setFixedHeader] = useState(false);
    const [activeLink, setActiveLink] = useState("دسته بندی");

    useEffect(() => {
        let scrollTop;
        window.addEventListener("scroll", () => {
            scrollTop = document.documentElement.scrollTop;
            scrollTop > 250 ? setFixedHeader(true) : setFixedHeader(false);
        });
        return () => window.removeEventListener("scroll");
    }, []);

    return (
        <>
            <header
                className={`transition-all duration-300 mx-auto fixed left-0 right-0 bg-gray-50 border-b-2 border-border md:divide-y divide-border ${
                    fixedHeader
                        ? "w-full top-0"
                        : "md:top-4 w-full md:w-[95%] lg:w-[90%] xl:w-[80] md:rounded-2xl"
                }`}
            >
                <div className="flex flex-col px-6">
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
                            <Link className="" href={"#"}>
                                <SearchIcon width={24} height={24} />
                            </Link>
                            <Link
                                className="w-7.5 h-7.5 flex items-end justify-center relative shrink-0"
                                href={"#"}
                            >
                                <ShoppingBagIcon width={24} height={24} />
                                <Badge
                                    className="absolute text-sm px-1 font-VazirMatn-Medium bg-red-500 text-secondary -left-1.5 -top-1.5 h-5 min-w-5 rounded-full"
                                    variant="destructive"
                                >
                                    2
                                </Badge>
                            </Link>
                        </div>
                    </div>
                    {/* bottom */}
                    <div className="hidden md:flex items-center justify-between py-4">
                        {/* Right Side */}
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
                                                {categoryItems.map(
                                                    (listItem) => {
                                                        return (
                                                            <li
                                                                className="group hover:bg-gray-100 primary-link"
                                                                key={
                                                                    listItem.id
                                                                }
                                                            >
                                                                <Link
                                                                    className="flex px-6 py-4 gap-2 items-center font-VazirMatn-Medium"
                                                                    href={
                                                                        listItem.href
                                                                    }
                                                                >
                                                                    {/* <Icon size={20} /> */}
                                                                    <span>
                                                                        {
                                                                            listItem.title
                                                                        }
                                                                    </span>
                                                                </Link>
                                                                <div className="flex flex-col items-start gap-y-10 gap-x-20 p-10 flex-wrap absolute right-[220px] left-0 w-fit transition-all duration-300 top-0 bottom-0 z-20 invisible opacity-0 text-black group-hover:opacity-100 group-hover:visible">
                                                                    {listItem.items.map(
                                                                        (
                                                                            item
                                                                        ) => (
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
                                                                                    {item.items.map(
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
                                                    }
                                                )}
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
                        {/* Left Side */}
                        {/* Icons */}
                        <div className="flex items-center justify-end gap-2">
                            {/* User Fav Products */}
                            <Link
                                className="w-9 h-9 rounded flex items-center justify-center border border-border relative"
                                href={"#"}
                            >
                                <HeartIcon width={24} height={24} />
                                {/* User Fav Count */}
                                <Badge
                                    className="absolute text-sm px-1 font-VazirMatn-Medium text-secondary -left-1.5 -top-1.5 h-5 min-w-5 rounded-full"
                                    variant="destructive"
                                >
                                    0
                                </Badge>
                            </Link>
                            {/* User Basket */}
                            <div className="relative group">
                                <Link
                                    className="w-9 h-9 rounded flex items-center justify-center border border-border relative"
                                    href={"#"}
                                >
                                    <BasketIcon width={24} height={24} />
                                    {/* User Basket Count */}
                                    <Badge
                                        className="absolute text-sm px-1 font-VazirMatn-Medium text-secondary -left-1.5 -top-1.5 h-5 min-w-5 rounded-full"
                                        variant="destructive"
                                    >
                                        4
                                    </Badge>
                                </Link>
                                {/* User Basket Content */}
                                <div className="absolute left-0 top-12 bg-secondary border border-border rounded-xl w-80  transition-all delay-75 duration-300 invisible opacity-0 group-hover:visible group-hover:opacity-100">
                                    {/* Basket Items Wrapper */}
                                    <div className="flex flex-col divide-y-2 divide-border max-h-[234px] overflow-y-auto py-3">
                                        {/* Items */}
                                        {userBasketItems.map((item) => (
                                            <BasketItem
                                                key={item.id}
                                                {...item}
                                            />
                                        ))}
                                    </div>
                                    <Button
                                        className="w-full font-VazirMatn-Medium cursor-pointer rounded-t-none rounded-b-md"
                                        variant="destructive"
                                    >
                                        ثبت سفارش
                                    </Button>
                                </div>
                            </div>
                            {/* User Menu */}
                            <div className="relative group">
                                <Link
                                    className="w-9 h-9 rounded flex items-center justify-center border border-border"
                                    href={"#"}
                                >
                                    <UserIcon width={24} height={24} />
                                </Link>
                                {/* User Menu Content */}

                                <div className="absolute -left-6 top-12 bg-secondary border border-border rounded-xl w-52 p-3 transition-all delay-75 duration-300 invisible opacity-0 group-hover:visible group-hover:opacity-100">
                                    <ul className="flex flex-col">
                                        {userMenuItems.map((item) => {
                                            const Icon = setUserMenuItemIcon(
                                                item.title
                                            );
                                            return (
                                                <li className="" key={item.id}>
                                                    <Link
                                                        className={`flex items-center gap-2 py-2 font-VazirMatn-Medium ${
                                                            item.title ===
                                                            "خروج"
                                                                ? "text-destructive"
                                                                : "primary-link"
                                                        }`}
                                                        href={item.href}
                                                    >
                                                        <Icon
                                                            width={24}
                                                            height={24}
                                                        />
                                                        <span>
                                                            {item.title}
                                                        </span>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Mobile Menu */}
            <div className="block md:hidden fixed bottom-0 left-0 right-0 w-full bg-secondary border-t-2 border-border p-4">
                {/* Mobile Menu Navigation */}
                <ul className="grid grid-cols-4">
                    {mobileMenuLinks.map((link) => {
                        const Icon = setMobileMenuLinkIcons(link.title);
                        return (
                            <li className="" key={link.id}>
                                <Link
                                    className={`flex flex-col items-center gap-1 ${
                                        activeLink === link.title &&
                                        "text-primary"
                                    }`}
                                    href={link.href}
                                >
                                    <div className="relative">
                                        <Icon width={24} height={24} />
                                        {link.title === "علاقه مندی" && (
                                            <Badge
                                                className="absolute text-sm px-1 font-VazirMatn-Medium bg-red-500 text-secondary -left-1.5 -top-1.5 h-5 min-w-5 rounded-full"
                                                variant="destructive"
                                            >
                                                5
                                            </Badge>
                                        )}
                                    </div>
                                    <span className="font-VazirMatn-Medium text-sm">
                                        {link.title}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {/* Mobile Menu Items Wrapper */}
            <div className="fixed block md:hidden right-0 top-0 bottom-0 w-64 bg-secondary border-l border-border p-4 overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-border">
                    {/* Logo */}
                    <h6 className="text-2xl text-primary font-Dana-Bold text-shadow-2xs justify-self-center">
                        استایل&#8202;پلاس
                    </h6>
                    {/* Close Menu Btn */}
                    <Button
                        className="size-6"
                        variant="destructive"
                        size={"icon"}
                    >
                        <XIcon />
                    </Button>
                </div>
                {/* Items Content */}
                <div>
                    <ul className="flex flex-col font-VazirMatn-Medium text-sm">
                        {categoryItems.map((item) => (
                            <MenuItem key={item.id} categoryItem={item}/>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;
