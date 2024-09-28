"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Cookie from "js-cookie";

export default function Redirect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jwttoken = searchParams.get("token");
  useEffect(() => {
    const redirectdashboard = async () => {
      if (!jwttoken){
        return
      }
      Cookie.set("token", jwttoken);
      router.push("/dashboard");
    };
    redirectdashboard();
  }, [jwttoken, router]);

  return (
    <main className="w-full h-[100vh] bg-[#1F1f22] flex justify-center items-center font-robotomono text-4xl font-bold text-white text-center">
      You are being redirected...
    </main>
  );
}