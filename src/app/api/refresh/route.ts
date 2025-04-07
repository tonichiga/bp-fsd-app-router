import { axiosForPublic } from "@/07.shared/lib/axios";
import { logger } from "@/07.shared/utils";
import { NextRequest } from "next/server";

interface ILoginResponse {
  token: string;
  tokenExpires: number;
}

export async function POST(req: NextRequest) {
  const clientIP = req.headers["x-real-ip"];
  const { hash } = await req.json();

  try {
    const response = await axiosForPublic.post(
      "/auth/refresh",
      { hash },
      {
        headers: {
          "Content-Type": "application/json",
          "x-client-real-ip": clientIP,
        },
      }
    );

    const data = response.data as ILoginResponse;

    const res = new Response(JSON.stringify(response.data), {
      status: response.status,
    });

    res.headers.set(
      "Set-Cookie",
      `token=${data.token}; Max-Age=${data.tokenExpires}; Path=/; SameSite=Strict`
    );

    return res;
  } catch (error) {
    logger("Hash validate error", error);
    return new Response(JSON.stringify(error), {
      status: 500,
      statusText: "Internal Next Error",
    });
  }
}
