import Head from "next/head";
import axios from "axios";
import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import backLeft from "../public/back_left.png";
import backRigth from "../public/back_rigth.png";
import $ from "../styles/Home.module.css";
import { Box } from "@mui/material";
import { useRouter } from "next/router";


export default function AskOne() {
  const router = useRouter();

  async function QuestionOne() {
    const data = "1";
    const response = await axios.get(`/api/answerOne?word=${data}`);
    const answer = response.data;
    localStorage.setItem("1", answer);
    router.push("/askTwo");
  }
  async function QuestionTwo() {
    const data = "2";
    const response = await axios.get(`/api/answerOne?word=${data}`);
    const answer = response.data;
    localStorage.setItem("1", answer);
    router.push("/askTwo");
  }
  async function QuestionThree() {
    const data = "3";
    const response = await axios.get(`/api/answerOne?word=${data}`);
    const answer = response.data;
    localStorage.setItem("1", answer);
    router.push("/askTwo");
  }
  async function QuestionFour() {
    const data = "4";
    const response = await axios.get(`/api/answerOne?word=${data}`);
    const answer = response.data;
    localStorage.setItem("1", answer);
    router.push("/askTwo");
  }
  function replay() {
    localStorage.clear();
    router.push("/");
  }

  return (
    <div className="flex flex-row w-full h-screen bg-[#2F3997] overflow-hidden">
      <Head>
        <title>Maquininha Ideal | 1ª Questão</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Primeira questão do quiz maquininha ideal" />
      </Head>

      <Box className="flex flex-col justify-between w-1/2 h-full ">
        <Image
          onClick={replay}
          className={$.logo}
          width={0}
          heigth={0}
          src={logo}
          alt="logo maquininha ideal"
        />
        <Image className={$.backleft} width={0} heigth={0} src={backLeft} alt="#" />
      </Box>
      <Box className="flex justify-end w-1/2 h-full">
        <Image className={$.backleft} src={backRigth} alt="#" />
      </Box>

      <div className="flex absolute flex-col w-full h-full overflow-hidden justify-center items-center">
        <div className={$.title_container}>

        {/* ---------- AQUI VOCE EDITA A PRIMEIRA PERGUNTA ---------- */}

          <p>
            Então, vamos lá? 😊
            <br /> {/* ==> aqui quebra a linha*/}
            Para começar, qual das opções abaixo melhor definem seu negócio
            hoje?
          </p>

        {/* ---------------------------------------------------------- */}
        
        </div>

        {/* ---------- AQUI VOCE EDITA AS RESPOSTAS DA PRIMEIRA PERGUNTA ---------- */}

        <div className={$.card_task} onClick={QuestionOne}>
          <h3>
            Estou começando e possuo pouco volume de vendas...
          </h3>
        </div>

        <div className={$.card_task} onClick={QuestionTwo}>
          <h3>
            Tenho uma boa quantidade de vendas diárias e estou crescendo...
          </h3>
        </div>

        <div className={$.card_task} onClick={QuestionThree}>
          <h3>
            Tenho uma grande quantidade de vendas diárias, preciso de segurança...
          </h3>
        </div>

        <div className={$.card_task} onClick={QuestionFour}>
          <h3>
            Ainda não consigo definir meu negócio, mas quero muito empreender...
          </h3>
        </div>

        {/* ---------------------------------------------------------------------- */}

        <div className={$.step_group}>
          <div className={$.step_active}></div>
          <div className={$.step_default}></div>
          <div className={$.step_default}></div>
          <div className={$.step_default}></div>
        </div>
      </div>

      <style jsx>
      {`
                
        html,
        body {
          padding: 0;
          margin: 0;
        }

        h1 {
          font-family: Raleway-ExtraBold, Opens Sans;
          line-height: 1;
          font-size: 70pt;
          color: white
        }

        h2 {
          font-family: Raleway-Medium, Opens Sans;
          line-height: 1;
          font-size: 25pt;
          color: #9A9B9C;
          margin-top: 2%;
        }

        h3 {
          font-family: Raleway-SemiBold, Opens Sans;
          line-height: 1;
          font-size: 16pt;
          color: white;
        }

        p {
          font-family: Raleway-Bold, Opens Sans;
          line-height: 1;
          font-size: 22pt;
          color: white;
        }

        * {
          box-sizing: border-box;
          font-family: Nunito, Opens Sans;
        }
        
        @media (max-width: 1150px) {
          h3 {
            font-family: Raleway-SemiBold, Opens Sans;
            line-height: 1;
            font-size: 12pt;
            color: white;
          }
      
          p {
            font-family: Raleway-Bold, Opens Sans;
            line-height: 1;
            font-size: 16pt;
            color: white;
          }
      
        }

        @media (max-width: 1000px) {
          h3 {
            font-family: Raleway-SemiBold, Opens Sans;
            line-height: 1;
            font-size: 16pt;
            color: white;
          }
        
          p {
            font-family: Raleway-Bold, Opens Sans;
            line-height: 1;
            font-size: 20pt;
            color: white;
          }
  
        }
        
        @media (max-width: 600px) {
          h3 {
            line-height: 1;
            font-size: 12pt;
          }
          
          p {
            line-height: 1;
            font-size: 18pt;
          }
  
        }
        
        @media (max-width: 500px) {
          h3 {
            line-height: 1;
            font-size: 11pt;
          }
            
          p {
            line-height: 0.9;
            font-size: 16pt;
            
            }
        }               
        
      `}
      </style>

    </div>
  );
}
