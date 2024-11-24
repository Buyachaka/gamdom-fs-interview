import TopNav from "../../components/TopNav";
import {ReactNode} from "react";

type BaseLayoutProps = {
    children: ReactNode
}

export default function BaseLayout ({children}: BaseLayoutProps) {
   return (
       <>
           <main className={"h-screen bg-background"}>
               <TopNav />
                {children}
           </main>
       </>
    )
}