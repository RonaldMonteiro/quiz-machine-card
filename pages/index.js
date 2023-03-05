import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import backLeft from "../public/back_left.png";
import backRigth from "../public/back_rigth.png";
import persona from "../public/persona.png";
import nuvem from "../public/nuvem.png";
import card from "../public/animate.gif";
import $ from "../styles/Home.module.css";
import { styled } from "@mui/material/styles";
import EastIcon from "@mui/icons-material/East";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";

const ButtonHome = styled(Button)({
  fontSize: 14,
  backgroundColor: "#F6AE39",
  fontFamily: "Raleway-ExtraBold",
  color: "white",
  width: "40%",
  height: 45,
  borderRadius: 10,
  marginTop: "5%",
  boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",

  "&:hover": {
    boxShadow: "none",
    top: 1,
    backgroundColor: "#d69833",
  },
  "@media (max-width: 1300px)": {
    width: "35%",
  },
  "@media (max-width: 1100px)": {
    width: "35%",
    height: 35,
    fontSize: 12,
  },
  "@media (max-width: 1000px)": {
    width: "60%",
    height: 70,
    fontSize: 18,
    marginTop: "10%",
  },
  "@media (max-width: 600px)": {
    width: "50%",
    height: 50,
    fontSize: 14,
    marginTop: "10%",
  },
  "@media (max-width: 500px)": {
    width: "64%",
    height: 50,
    fontSize: 14,
    marginTop: "10%",
  },
});

export default function Home() {
  const router = useRouter();

  function starter() {
    router.push("/askOne");
  }

  return (
    <div className="flex flex-row w-full h-screen bg-[#2F3997] overflow-hidden">
      <Head>
        <title>Maquininha Ideal | Início</title>
        <meta name="description" content="Descubra a maquininha de cartão crédito  ideal para você através de um quiz interativo"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Box className="flex flex-col justify-between w-1/2 h-full ">

        <Image className={$.logo} width={0} heigth={0} src={logo} alt="logo maquininha ideal" />
        <Image className={$.backleft} width={0} heigth={0} src={backLeft}  alt="#"  />
      </Box>
      <Box className="flex justify-end w-1/2 h-full">
        <Image className={$.backleft} src={backRigth}  alt="#"  />
      </Box>

      <div className="flex absolute overflow-hidden w-full h-full">
        <Box className="flex flex-col justify-between w-1/2 h-full ">

          <Image className={$.card} width={0} heigth={0} src={card}  alt="Mão segurando maquininha de crédito"  />
        </Box>
        <Box className="flex justify-end  items-end w-2/3 h-full ">
          <div>
            <Image className={$.persona} width={0} heigth={0} src={persona}  alt="Homem segurando cartão de crédito" />
          </div>
          <Image className={$.nuvem} width={0} heigth={0} src={nuvem}  alt="Nuvem" />
        </Box>
      </div>

      <div className="flex absolute w-full h-full overflow-hidden justify-center">
        <Box className={$.text}>
          <div className={$.blockText}>
            <h1>
              Quiz
              <br />
              Maquininha
              <br />
              Ideal
            </h1>
            <Image className={$.card2} width={0} heigth={0} src={card} alt="Mão segurando maquininha de crédito" />{" "}
            <h2>
              Descubra a maquininha
              <br />
              ideal para você
              <br />
              em segundos
            </h2>
            <ButtonHome
              onClick={starter}
              className="bg-[#F6AE39] hover:bg-[#d69833]"
              endIcon={<EastIcon />}
            >
              descobrir
            </ButtonHome>
          </div>
        </Box>
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

        * {
          box-sizing: border-box;
          font-family: Nunito, Opens Sans;

        }
        
       

          @media (max-width: 1300px) {
            h1 {
              font-size:60pt;
              line-height: 0.9;
  
            }
            h2 {
              font-size:22pt;
              line-height: 1;
  
            }
            @media (max-width: 1150px) {
              h1 {
                font-size:45pt;
                line-height: 0.9;
    
              }
              h2 {
                font-size:18pt;
                line-height: 1;
    
              }
              @media (max-width: 1000px) {
                h1 {
                  font-size:65pt;
                  line-height: 1;
      
                }
                h2 {
                  font-size:30pt;
                  line-height: 1;
                  margin-top: -5%;

                }
                @media (max-width: 600px) {
                  h1 {
                    font-size:40pt;
                    line-height: 0.9;
                    margin-bottom:3%;
        
                  }
                  h2 {
                    font-size:20pt;
                    line-height: 1;
                    margin-top: -2%;
  
                  }
                  @media (max-width: 500px) {
                    h1 {
                      font-size:40pt;
                      line-height: 0.9;
                      margin-bottom:6%;
          
                    }
                    h2 {
                      font-size:20pt;
                      line-height: 1;
                      margin-top: 2%;
    
                    }
                    @media (max-width: 380px) {
                      h1 {
                        font-size:30pt;
                        line-height: 0.9;
                        margin-bottom:6%;
            
                      }
                      h2 {
                        font-size:16pt;
                        line-height: 1;
                        margin-top: -2%;
      
                      }
  
    
  
  
  
  
  

        }
        
        
        
        `}
      </style>
    </div>
  );
}
