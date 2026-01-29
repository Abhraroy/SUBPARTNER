import ChatSidebar from "@/components/chatComponents/chatSidebar";
import ChatWindow from "@/components/chatComponents/chatWindow";
import { createClient } from "@/lib/supabase/server";

export default async function ChatPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const start = performance.now();
  const { data: myConversations } = await supabase
    .from("conversation_participants")
    .select("conversation_id")
    .eq("user_id", user?.id);

  // Step 2: fetch full conversations
  const { data: subdata, error: suberror } = await supabase
    .from("conversations")
    .select(
      `
    id,
    type,
    subscription_posts (
      title
    ),
    conversation_participants (
      user_id,
      profiles(
        name
      )
    )`,
    )
    .in("id", myConversations?.map((c) => c.conversation_id) ?? []);

  console.log(subdata);
  console.log(suberror);
  const end = performance.now();
  console.log(`Async execution: ${(end - start).toFixed(2)} ms`);


  const propObjectArr = subdata?.map((item) => {
  if (item.type === "direct") {
    const otherUser = item.conversation_participants.find(
      (p) => p.user_id !== user?.id
    );

    console.log("otherUser", otherUser);
    return {
      conversation_id: item.id,
      conversation_type: item.type,
      conversation_name: otherUser?.profiles?.name ?? "Unknown user",
    };
  }

  // group / subscription conversation
  return {
    conversation_id: item.id,
    conversation_type: item.type,
    conversation_name: item.subscription_posts?.title ?? "Group",
  };
});

subdata?.forEach((c) =>
  console.log(
    c.conversation_participants.map((p) => ({
      uid: p.user_id,
      profile: p.profiles,
    }))
  )
);


  propObjectArr?.map((item) => {
    console.log("prop", item);
  });

  return (
    <div className="flex h-screen w-full">
      <ChatSidebar propObjectArr={propObjectArr} />
      <ChatWindow />
    </div>
  );
}
