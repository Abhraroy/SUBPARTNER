import { createClient } from "@/lib/supabase/server";   
import SigninForm from "@/components/signin/SigninForm";
import { redirect } from "next/navigation";


export default async function signin(){
    const supabase = await createClient();

    const {data:{user},error} = await supabase.auth.getUser()
    console.log(user)
    if(user){
        redirect("/console")
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#0d0d0d]">
             <SigninForm />
        </main>
    )
}
