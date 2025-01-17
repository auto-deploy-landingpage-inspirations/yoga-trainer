'use client'

import { Raleway } from "next/font/google";
import { LuCalendarCheck, LuLayoutDashboard } from "react-icons/lu";
import { ImStatsDots } from "react-icons/im";
import { PiBowlFoodLight } from "react-icons/pi";
import { useState } from "react";
import { RiUser6Line } from "react-icons/ri";


const raleway = Raleway(
    {
        subsets: ["latin"],
        weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
    }
);

export default function Sidebar() {

    const [selected, setSelected] = useState<number>(0)
    const menuItem = [
        {
            title: 'Dashboard',
            icon: <LuLayoutDashboard />

        },
        {
            title: 'Stats',
            icon: <ImStatsDots />
        },
        {
            title: 'Schedule',
            icon: <LuCalendarCheck />
        },
        {
            title: 'Meals',
            icon: <PiBowlFoodLight />

        },
        {
            title: 'Profile',
            icon: <RiUser6Line />

        }
    ]



    return (
        <>
            <div className={`w-full min-h-screen bg-accent ${raleway.className} rounded-r-2xl`}>
                <div className="flex flex-col py-3 px-2">
                    <img src="/dashboard/logo.svg" alt="logo" className="w-20 mx-auto" />
                    <span
                        className="text-slate-50 text-3xl capitalize py-2 text-center font-bold m-2">
                        Innerbalance
                    </span>
                </div>
                <div className="flex flex-col mt-10">
                    {menuItem.map((item, idx) => (
                        <>
                            {selected !== idx &&

                                <div
                                    key={idx}
                                    onClick={() => setSelected(idx)}
                                    className="flex justify-start gap-5 align-middle items-center m-5 mx-10 cursor-pointer">

                                    <div className="text-2xl text-white font-semibold my-auto">
                                        {item.icon}
                                    </div>

                                    <span className="text-2xl text-white font-normal">
                                        {item.title}
                                    </span>
                                </div>
                            }

                            {selected === idx &&
                                <div
                                    key={idx}
                                    className="bg-[#f1f1f3] shadow-md animate-dashboard ml-5 flex justify-start gap-5 align-middle items-center py-4 px-6 rounded-l-full cursor-pointer">

                                    <div className="text-2xl text-accent font-semibold my-auto">
                                        {item.icon}
                                    </div>

                                    <span className="text-2xl text-accent font-normal">
                                        {item.title}
                                    </span>
                                </div>
                            }
                        </>
                    ))}

                </div>

            </div>

        </>
    )
}







