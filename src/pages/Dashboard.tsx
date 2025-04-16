import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/utils/supabase";

export default function Dashboard() {
  const [userName, setUserName] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      
      if (error || !data?.user) {
        navigate("/login"); // jika tidak ada user, kembalikan ke login
      } else if (data.user.email) {
        const username = data.user.email.split("@")[0];
        setUserName(username ?? "Unknown");
      }

    };

    getUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gray-50 px-4">
      <h1 className="text-2xl font-semibold mb-4">
        Selamat datang! {userName}
      </h1>
      <Button
        label="Logout"
        onClick={handleLogout}
        variant="destructive"
        size="lg"
      />
    </div>
  );
}
