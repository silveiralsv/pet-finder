import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone, AiOutlineWhatsApp } from "react-icons/ai";
// import { Container } from './styles';

type TutorProps = {
  tutorName: string;
  tutorPhone: number;
};

const Tutor: React.FC<TutorProps> = ({ tutorName, tutorPhone }) => {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-center gap-1">
        <BsFillPersonFill />
        <span>{tutorName}</span>
      </div>
      <div className="flex items-center gap-1">
        <AiFillPhone />
        <span>{tutorPhone}</span>
      </div>
      <div className="flex mt-2">
        <a href={`https://wa.me/${5511964343284}`} target="_blank">
          <button
            type="button"
            className=" flex items-center gap-1 bg-green-600 rounded-sm px-2 text-gray-200 hover:opacity-80 transition-all border-2 border-gray-300 "
          >
            <AiOutlineWhatsApp />
            WhatsApp
          </button>
        </a>
      </div>
    </div>
  );
};

export default Tutor;
