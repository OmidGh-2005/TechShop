import { Eye, EyeOff, Lock, LogIn, Mail, User, UserPlus } from "lucide-react";
import { useState } from "react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPasswrod, setShowPassword] = useState(false);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 shadow-[0_8px_20px_rgba(168,85,247,0.15)]">
          <div className="text-center mb-4">
            <div className="mx-auto mb-5 w-12 h-12 bg-purple-500/10 flex justify-center items-center rounded-2xl border border-purple-500/20">
              {isLogin ? (
                <LogIn className="w-6 h-6 text-purple-400" />
              ) : (
                <UserPlus className="w-6 h-6 text-purple-400" />
              )}
            </div>

            <h1 className="text-2xl text-white font-bold tracking-tight">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h1>

            <p className="text-sm text-neutral-500 mt-2">
              {isLogin
                ? "Login to continue to your account"
                : "Create your account for shopping"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {!isLogin && (
              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-500">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                  <input
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    placeholder="Omid Gholami"
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-12 py-2 text-sm text-white placeholder:text-neutral-600 outline-none transition focus:border-purple-500"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-sm text-neutral-500">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Email@example.com"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-12 py-2 text-sm text-white placeholder:text-neutral-600 outline-none transition focus:border-purple-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-sm text-neutral-500">Password</label>

                {isLogin && (
                  <button
                    type="button"
                    className="text-xs text-purple-400 hover:text-purple-300 transition"
                  >
                    Forgot your password?
                  </button>
                )}
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  value={formData.password}
                  onChange={handleChange}
                  type={showPasswrod ? "text" : "password"}
                  name="password"
                  placeholder="*******"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-12 py-2 text-sm text-white placeholder:text-neutral-600 outline-none transition focus:border-purple-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPasswrod)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-600 transition"
                >
                  {showPasswrod ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-xl px-6 py-3.5 shadow-[0_4px_20px_rgba(168,85,247,0.35)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              {isLogin ? (
                <>
                  <LogIn className="w-4 h-4" />
                  Login
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4" />
                  Create Account
                </>
              )}
            </button>
          </form>

          <div className="mt-7 pt-6 border-t border-neutral-800 text-center">
            <p className="text-sm text-neutral-500">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </p>

            <button
              type="button"
              onClick={() => {(
                handleSwitch(),
                  setFormData({
                    name: "",
                    email: "",
                    password: "",
                  }));
                setShowPassword(false);
              }}
              className="mt-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition"
            >
              {isLogin ? "Create an account" : "Login to your account"}
            </button>
          </div>
        </div>
        <p className="text-center text-xs text-neutral-600 mt-6">
          TechShop · Your favorite tech, all in one place.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
