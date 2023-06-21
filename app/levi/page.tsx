import React from "react";
import Image from "next/image";
import leviImage from "../../public/levi.png";
import Tutor from "../components/tutors";

export default function Levi() {
  return (
    <div className="flex items-center justify-center bg-slate-900 w-full h-full relative overflow-hidden px-8">
      <div className="flex flex-col gap-8">
        <h1 className=" text-5xl text-slate-300">
          <b>Obrigado</b> por me encontrar!
        </h1>

        <div className="flex text-3xl items-center justify-center gap-5 text-slate-300">
          <Image
            className="rounded-full w-32 h-32"
            src={leviImage}
            alt="Levi"
            width={500}
            height={500}
          />
          <h1>
            Eu me chamo <b className="underline">Levi</b>
          </h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center ">
          <p className="text-slate-300 text-center">
            Por favor entre em contato com meus tutores:
          </p>
          <div className="grid grid-cols-2 gap-8">
            <Tutor tutorName="Lucas" tutorPhone={5511964343284} />
            <Tutor tutorName="Gabriela" tutorPhone={11952851294} />
          </div>
        </div>
      </div>
      {/* <FaPaw className=" w-52 h-52 flex absolute bottom-5 right-52 -rotate-45 fill-slate-400" />
      <FaPaw className=" w-52 h-52 flex absolute bottom-64 right-80 rotate-6 fill-slate-400 " />
      <FaPaw className=" w-52 h-52 flex absolute top-60 right-72 -rotate-40 fill-slate-400 " />
      <FaPaw className=" w-52 h-52 flex absolute top-2 right-80 -rotate-45 fill-slate-400" /> */}
    </div>
  );
}
