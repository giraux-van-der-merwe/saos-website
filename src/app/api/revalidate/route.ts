import { type NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

// Called by Sanity webhooks to revalidate pages on content change
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const type = body?._type as string | undefined;

    switch (type) {
      case "storageUnit":
        revalidatePath("/storage");
        revalidatePath(`/storage/${body?.slug?.current}`);
        break;
      case "page":
        revalidatePath(`/${body?.slug?.current}`);
        break;
      case "siteSettings":
        revalidatePath("/", "layout");
        break;
      default:
        revalidatePath("/");
    }

    return NextResponse.json({ revalidated: true, type });
  } catch {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
