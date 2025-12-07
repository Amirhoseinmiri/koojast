/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, LogIn } from "lucide-react";

const schema = z.object({
  email: z.string().email("ایمیل نامعتبر است"),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
});

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    setTimeout(() => {
      console.log("DATA => ", data);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-blue-100 p-4">
      <Card className="w-full max-w-sm shadow-xl border-none">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold text-gray-700">
            ورود به حساب کاربری
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            dir="rtl"
          >
            {/* Email */}
            <div>
              <label className="text-sm font-medium mb-1 block">ایمیل</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  className="pl-10"
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium mb-1 block">رمز عبور</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="password"
                  placeholder="رمز عبور را وارد کنید"
                  className="pl-10"
                  {...register("password")}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
              disabled={loading}
            >
              <LogIn className="w-4 h-4" />
              {loading ? "در حال ورود..." : "ورود"}
            </Button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-4">
            هنوز ثبت‌نام نکرده‌اید؟{" "}
            <span className="text-blue-600 cursor-pointer">ایجاد حساب</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
