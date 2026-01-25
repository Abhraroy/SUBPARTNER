import { createClient } from "@/lib/supabase/server";
import { SubsCard } from "@/components/ui/subsCard";
import { ForumFilters } from "@/components/forum/ForumFilters";
import { Tv, Music, Video, ShoppingCart, Globe } from "lucide-react";
import CreatePoolBanner from "@/components/ui/createPoolBanner";

export default async function ForumPage({
  searchParams,
}: {
  searchParams: Promise<{ platform?: string; type?: string }>;
}) {
  const params = await searchParams;
  const platformFilter = params.platform;
  const typeFilter = params.type;

  const supabase = await createClient();

  let query = supabase
    .from("subscription_posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (platformFilter && platformFilter !== "All") {
    query = query.ilike("platform", `%${platformFilter}%`);
  }

  if (typeFilter && typeFilter !== "all") {
    query = query.eq("post_type", typeFilter);
  }

  const { data: posts, error } = await query;

  if (error) {
    console.error("Error fetching posts:", error);
  }

  const getIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes("netflix") || p.includes("youtube") || p.includes("prime")) return <Tv className="h-6 w-6" />;
    if (p.includes("spotify") || p.includes("music")) return <Music className="h-6 w-6" />;
    if (p.includes("shop") || p.includes("amazon")) return <ShoppingCart className="h-6 w-6" />;
    return <Globe className="h-6 w-6" />;
  };

  return (
    <div className="flex h-[calc(100vh-2rem)] flex-col bg-[#0a0a0a] text-white">
      <div className="container mx-auto flex h-full max-w-7xl flex-col px-4 pt-8">
        <header className="flex-none mb-8">
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">Find Your Squad</h1>
          <p className="text-gray-400">Join a pool, split the cost, enjoy premium for less.</p>
        </header>

        <div className="flex-none">
          <ForumFilters />
        </div>

        <div className="flex-1 overflow-y-auto min-h-0 pr-2 pb-4 no-scrollbar">
          <div className="min-h-[80vh] flex flex-col">
            {posts && posts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {posts.map((post) => (
                  <SubsCard
                    key={post.id}
                    title={post.platform}
                    description={post.description || post.title}
                    price={`$${post.price_per_user || 0}`}
                    slots={post.total_slots ? post.total_slots - (post.filled_slots || 0) : 0}
                    tag={post.post_type}
                    logo={getIcon(post.platform)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-1 flex-col items-center justify-center border-2 border-dashed border-gray-800 rounded-lg">
                <p className="text-lg font-bold text-gray-500">No active pools found</p>
                <p className="text-sm text-gray-600">Try adjusting your filters or start a new pool!</p>
              </div>
            )}
          </div>

          <div className="mt-8 pb-4">
            <CreatePoolBanner />
          </div>
        </div>
      </div>
    </div>
  );
}