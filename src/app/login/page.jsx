"use client";

import { Button } from "../../components/ui/button";

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Box } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validacion = async (e) => {
    e.preventDefault();
    console.log("separacion de ambientes");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      // if (userDoc.exists()) {
      const userData = userDoc.data();
      const getRol = userData.rol; // Verifica que en Firebase el campo se llame exactamente 'rol'
      console.log("Rol encontrado:", getRol);

      const routes = {
        admin: "/admin/dashboard",
        cliente: "/cliente/realizarPago",
        proveedor: "/proveedor/dashboard",
      };

      router.push(routes[getRol]);

      // } else {
      //   console.error("No existe el documento del usuario en Firestore");
      //   alert("Usuario autenticado, pero no tiene perfil en la base de datos.");
      // }
    } catch (error) {
      console.error("Error completo:", error);
      alert("Error en el acceso. Revisa consola para más detalle.");
    }
  };

  return (
    <div className=" w-full bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#222222] rounded-[3rem] p-10 shadow-2xl border border-white/5">
        <div className="flex flex-col items-center mb-10">
          <div className="bg-orange-500 p-3 rounded-2xl text-white mb-4 shadow-lg shadow-orange-500/20">
            <Box size={32} fill="currentColor" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Finansee
          </h1>
        </div>

        <form onSubmit={validacion} className="space-y-6">
          <div className="space-y-2">
            <Label className="text-gray-400 ml-1 text-xs uppercase font-bold tracking-widest">
              Email
            </Label>
            <Input
              type="text"
              placeholder="Usuario"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#1a1a1a] border-white/5 rounded-2xl h-12 text-white outline-none focus:border-orange-500 transition-all"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-gray-400 text-xs uppercase font-bold tracking-widest">
              Contraseña
            </Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#1a1a1a] border-white/5 rounded-2xl h-12 text-white outline-none focus:border-orange-500 transition-all"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 rounded-2xl shadow-lg shadow-orange-500/20 transition-all mt-4 border-none cursor-pointer"
          >
            Ingresar
          </Button>
        </form>

        <p className="text-center text-gray-500 text-xs mt-8">
          ¿No tienes acceso?{" "}
          <span className="text-white hover:underline font-medium cursor-pointer">
            Crear una cuenta
          </span>
        </p>
      </div>
    </div>
  );
}
