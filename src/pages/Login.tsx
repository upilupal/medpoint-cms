// import React from 'react'

import Button from "@/components/Button";
import InputForm from "@/components/InputForm";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { supabase } from "@/utils/supabase";
import { KeyRound, LogIn, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const watchPassword = watch("password");

  const onSubmit = async (data: FormValues) => {
    setLoginError("");
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      setLoginError(error.message); // atau tampilkan di UI
    } else {
      navigate("/dashboard"); // arahkan ke halaman dashboard
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen p-5">
      {/* LEFT */}
      <div className="flex justify-center items-center px-6">
        <img
          src="/src/assets/logo-mediverse.png"
          alt="mediverse logo"
          width={165}
          height={32}
          className="mb-8 absolute top-10 left-15"
        />
        <Card className="w-full max-w-md shadow-none border-none">
          <CardTitle>
            <h1 className="text-5xl font-bold mb-5">Selamat Datang</h1>
            <p className="mb-6 text-black/40 font-bold">
              Masuk dan kelola dashboard Mediverse Anda sekarang
            </p>
          </CardTitle>
          <CardContent className="px-0 ">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email */}
              <InputForm
                label="Email"
                id="email"
                type="email"
                placeholder="Masukkan email"
                logo={<Mail size={16} strokeWidth={2.5} />}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              {/* Password */}
              <InputForm
                label="Kata Sandi"
                id="password"
                placeholder="Masukkan kata sandi"
                isPassword
                className=""
                logo={<KeyRound size={16} strokeWidth={2.5} />}
                {...register("password", { required: "Password is required" })}
                value={watchPassword}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}

              {loginError && (
                <p className="text-sm text-red-500 mt-2">{loginError}</p>
              )}

              <div className="text-right text-sm font-semibold text-black/40 mb-6 cursor-pointer hover:underline">
                Lupa Kata Sandi?
              </div>

              <Button
                label="Masuk Sekarang"
                variant="default"
                size="sm"
                icon={<LogIn size={18} />}
                isLoading={isSubmitting}
                type="submit"
                className="bg-[#5F00D9] hover:bg-[#4600a8] rounded-2xl text-white w-full flex items-center justify-center py-2"
              />
            </form>
          </CardContent>
        </Card>
      </div>

      {/* RIGHT */}
      <div className="hidden md:block h-full">
        <div className="bg-gradient-to-b from-violet-900 to-fuchsia-500 h-full rounded-2xl flex flex-col items-center justify-center">
          <img
            src="/src/assets/ChatGPT Image Apr 10, 2025, 04_50_12 PM.png"
            alt="mediverse image"
            width={400}
          />
          <div className="w-[500px] mt-3">
            <h1 className="text-white text-5xl font-semibold text-center">
              Your Personal Healthcare Assistant
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
