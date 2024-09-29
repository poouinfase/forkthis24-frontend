"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Suspense } from "react";
import Cookie from "js-cookie";

function Redirect() {
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


const SuspenseWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  );
};

export default function WrappedRedirect() {
  return (
    <SuspenseWrapper>
      <Redirect />
    </SuspenseWrapper>
  );
}