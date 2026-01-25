
import Navbar from "@/components/consolecomponents/Navbar";
import { ReactNode } from "react";

export default function ConsoleLayout({ children }: { children: ReactNode }) {
    return <>
    <Navbar />
    <div className="md:ml-64 pb-20 md:pb-0">
        {children}
    </div>
    
    </>;
}