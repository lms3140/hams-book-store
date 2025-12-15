import { cookies } from "next/headers";
import Image from "next/image";
import LoginForm from "./_components/Auth/LoginForm";

export default async function Home() {
  const cookieStore = await cookies();
  console.log(cookieStore.get("accessToken"));
  return (
    <div>
      <LoginForm />
    </div>
  );
}
