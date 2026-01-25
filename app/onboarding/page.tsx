import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Onboarding() {
    const supabase = await createClient();
    const {data:{user},error} = await supabase.auth.getUser()
    if(!user){
        redirect("/signin")
    }
    const {data:profile,error:profileError} = await supabase.from("profiles")
    .select("first_time")
    .eq("user_id",user.id)
    .single()
    if(!profile?.first_time){
        redirect("/console")
    }
    return (
        <div>
            <h1>Onboarding</h1>
        </div>
    )
}