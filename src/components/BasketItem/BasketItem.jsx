import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import PlusIcon from "../icons/PlusIcon";
import MinusIcon from "../icons/MinusIcon";
import { Badge } from "../ui/badge";
import CrossIcon from "../icons/CrossIcon";

function BasketItem(props) {
    const { title, href, img, count, price } = props;
    return (
        <div className="flex items-center gap-4 py-4 px-3">
            {/* Image */}
            <Link href={href} className="shrink-0 flex">
                <Image width={52} height={52} src={img} alt={title} />
            </Link>
            {/* Desc & Infos */}
            <div className="">
                {/* Title */}
                <h6 className="font-VazirMatn-Medium text-sm line-clamp-2 primary-link">
                    <Link href={href}>{title}</Link>
                </h6>
                <div className="flex items-end justify-between mt-3">
                    {/* Count & Price */}

                    <div className="flex items-center gap-3 grow-0">
                        <Button variant='secondary' size={'icon'} className={`size-8 cursor-pointer`}>
                            <PlusIcon width={20} height={20} />
                        </Button>
                        <Input type='text' defaultValue={count} className={`h-8 w-8 p-1 text-center font-VazirMatn-Medium text-sm/tight focus-visible:ring-0 transition-all duration-300`}/>
                        <Button variant='secondary' size={'icon'} className={`size-8 cursor-pointer`}>
                            <MinusIcon width={20} height={20} />
                        </Button>
                    </div>
                    {/* Price */}
                    <div className="font-VazirMatn-Medium text-sm/tight flex items-center gap-1">
                        <span>{price.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BasketItem;
