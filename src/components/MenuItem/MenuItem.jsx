"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function MenuItem({ categoryItem }) {
    const [open, setOpen] = useState(false);
    return (
        <li>
            <Link href={categoryItem?.href ?? '#'}
                onClick={(e) => {
                    if(categoryItem.items) {
                        console.log('link is preventDefault')
                        e.preventDefault()
                    }
                    setOpen((prevState) => !prevState);
                }}
                className="py-3 flex items-center justify-between group"
            >
                <span>{categoryItem?.title}</span>
                {categoryItem.items && (
                    <>
                        {open ? (
                            <ChevronUp size={16} />
                        ) : (
                            <ChevronDown size={16} />
                        )}
                    </>
                )}
            </Link>
            <ul
                className={`flex flex-col pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
                    open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                {categoryItem?.items?.map((item) => (
                    <MenuItem categoryItem={item} key={item.id} />
                ))}
            </ul>
        </li>
    );
}

export default MenuItem;
