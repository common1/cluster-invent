import { getCurrent } from "@/features/auth/actions";
import { UserButton } from "@/features/auth/components/user-button";

export default async function Home() {
  const user = getCurrent();
  
  return (
    <div>
      <UserButton />
     </div>
  );
};

