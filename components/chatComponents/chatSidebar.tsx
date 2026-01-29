import { MessageSquareTextIcon } from "lucide-react";
import ChatIcons from "./chatIcons";

export default function ChatSidebar({propObjectArr}: {propObjectArr: any[]}) {
    return <>
    <div className="flex h-screen w-1/5   border-r-4 pt-4 pb-4 pr-2 pl-2 overflow-auto ">
    <div className=" h-full w-full flex flex-col gap-4 items-center justify-start  p-1 " >
     <div className="w-full max-h-fit p-4 flex flex-row gap-2 bg-[#DFFF00]" >
        <MessageSquareTextIcon className="text-black" />
        <p className="text-black font-extrabold text-[1.1rem] ">SEE ALL YOUR CHATS</p>
     </div>
     {
      propObjectArr?.map((item:any,index:number)=>(
        <ChatIcons key={item.conversation_id} conversation_id={item.conversation_id} conversation_type={item.conversation_type} conversation_name={item.conversation_name} />
      ))
     }
    </div>
  </div>
    </>
}