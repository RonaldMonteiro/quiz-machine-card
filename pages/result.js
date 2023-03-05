import Head from "next/head";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import backLeft from "../public/back_left.png";
import backRigth from "../public/back_rigth.png";
import $ from "../styles/Home.module.css";
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";



import {
  T2_Brother,
  Minizinha_NFC,
  Minizinha_Chip_3,
  Moderninha_Plus_2,
  Moderninha_Pro_2,
  Moderninha_X,
  Moderninha_Smart_2,
  Point_Mini_Chip,
  Point_Pro_2,
  Point_Smart,
  T1_Brother,
  T1_Chip_Brother,
  T3_Brother,
  Sumup_On,
  Sumup_Total,
  
} from "../components/machines";



import ouro from "../public/ouro.png";
import prata from "../public/prata.png";
import bronze from "../public/bronze.png";
import ReplayIcon from '@mui/icons-material/Replay';

const ButtonResult = styled(Button)({
  fontSize: 14,
  fontFamily: "Raleway-ExtraBold",
  color: "white",
  width: "40%",
  height: 45,
  borderRadius: 10,
  border: "1px solid white",
  boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
  marginTop: 20,
  marginBottom: 20,

  "&:hover": {
    boxShadow: "none",
    top: 1,
  },
  "@media (max-width: 500px)": {
    width: "80%",
  },
});

const ButtonReset = styled(Button)({
  textTransform: "none",
  fontSize: 14,
  fontFamily: "Raleway-SemiBold",
  color: "white",
  width: "40%",
  height: 45,
  borderRadius: 10,
  marginTop: 20,
  marginBottom: 40,

  "&:hover": {
    boxShadow: "none",
    top: 1,
  },
  "@media (max-width: 500px)": {
    width: "80%",
  },
});


export default function AskOne() {
  const [cardOne, setCardOne] = useState("cardMachine");
  const [cardTwo, setCardTwo] = useState("cardNoneDisplay");
  const [cardThree, setCardThree] = useState("cardNoneDisplay");
  const [machine1, setMachine1] = useState("");
  const [machine2, setMachine2] = useState("");
  const [machine3, setMachine3] = useState("");
  const [buttonBottom, setButtonBottom] = useState("buttonBottom");

  const router = useRouter();

  const { name } = router.query;
  console.log(name)
  {/* ---- EDITAR NOMES AQUI ---- */}

  useEffect(() => {
    const listJSON = JSON.parse(name);

    {/* ---------- AQUI VOCE EDITA A RELAÇAO DE MAQUININHAS PARA RENDERIZAÇAO ---------- */}

    if (listJSON.length == 3) {
      if (listJSON[0] == "T2 Brother") {
        setMachine1(T2_Brother());
      } else if (listJSON[0] == "Minizinha NFC") {
        setMachine1(Minizinha_NFC());
      } else if (listJSON[0] == "Minizinha Chip 3") {
        setMachine1(Minizinha_Chip_3());
      } else if (listJSON[0] == "Moderninha Plus 2") {
        setMachine1(Moderninha_Plus_2());
      } else if (listJSON[0] == "Moderninha Pro 2") {
        setMachine1(Moderninha_Pro_2());
      } else if (listJSON[0] == "Moderninha X") {
        setMachine1(Moderninha_X());
      } else if (listJSON[0] == "Moderninha Smart 2") {
        setMachine1(Moderninha_Smart_2());
      } else if (listJSON[0] == "Point Mini Chip") {
        setMachine1(Point_Mini_Chip());
      } else if (listJSON[0] == "Point Smart") {
        setMachine1(Point_Smart());
      } else if (listJSON[0] == "T1 Brother") {
        setMachine1(T1_Brother());
      } else if (listJSON[0] == "T1 Chip Brother") {
        setMachine1(T1_Chip_Brother());
      } else if (listJSON[0] == "T3 Brother") {
        setMachine1(T3_Brother());
      } else if (listJSON[0] == "Sumup On") {
        setMachine1(Sumup_On());
      } else if (listJSON[0] == "Sumup Total") {
        setMachine1(Sumup_Total());
      } else if (listJSON[0] == "Point Pro 2") {
        setMachine1(Point_Pro_2());
      } else if (listJSON[0] == "Point Pro 2") {
        setMachine1(Point_Pro_2());
      } 

      if (listJSON[1] == "T2 Brother") {
        setMachine2(T2_Brother());
      } else if (listJSON[1] == "Minizinha NFC") {
        setMachine2(Minizinha_NFC());
      } else if (listJSON[1] == "Minizinha Chip 3") {
        setMachine2(Minizinha_Chip_3());
      } else if (listJSON[1] == "Moderninha Plus 2") {
        setMachine2(Moderninha_Plus_2());
      } else if (listJSON[1] == "Moderninha Pro 2") {
        setMachine2(Moderninha_Pro_2());
      } else if (listJSON[1] == "Moderninha X") {
        setMachine2(Moderninha_X());
      } else if (listJSON[1] == "Moderninha Smart 2") {
        setMachine2(Moderninha_Smart_2());
      } else if (listJSON[1] == "Point Mini Chip") {
        setMachine2(Point_Mini_Chip());
      } else if (listJSON[1] == "Point Smart") {
        setMachine2(Point_Smart());
      } else if (listJSON[1] == "T1 Brother") {
        setMachine2(T1_Brother());
      } else if (listJSON[1] == "T1 Chip Brother") {
        setMachine2(T1_Chip_Brother());
      } else if (listJSON[1] == "T3 Brother") {
        setMachine2(T3_Brother());
      } else if (listJSON[1] == "Sumup On") {
        setMachine2(Sumup_On());
      } else if (listJSON[1] == "Sumup Total") {
        setMachine2(Sumup_Total());
      } else if (listJSON[1] == "Point Pro 2") {
        setMachine2(Point_Pro_2());
      }

      if (listJSON[2] == "T2 Brother") {
        setMachine3(T2_Brother());
      } else if (listJSON[2] == "Minizinha NFC") {
        setMachine3(Minizinha_NFC());
      } else if (listJSON[2] == "Minizinha Chip 3") {
        setMachine3(Minizinha_Chip_3());
      } else if (listJSON[2] == "Moderninha Plus 2") {
        setMachine3(Moderninha_Plus_2());
      } else if (listJSON[2] == "Moderninha Pro 2") {
        setMachine3(Moderninha_Pro_2());
      } else if (listJSON[2] == "Moderninha X") {
        setMachine3(Moderninha_X());
      } else if (listJSON[2] == "Moderninha Smart 2") {
        setMachine3(Moderninha_Smart_2());
      } else if (listJSON[2] == "Point Mini Chip") {
        setMachine3(Point_Mini_Chip());
      } else if (listJSON[2] == "Point Smart") {
        setMachine3(Point_Smart());
      } else if (listJSON[2] == "T1 Brother") {
        setMachine3(T1_Brother());
      } else if (listJSON[2] == "T1 Chip Brother") {
        setMachine3(T1_Chip_Brother());
      } else if (listJSON[2] == "T3 Brother") {
        setMachine3(T3_Brother());
      } else if (listJSON[2] == "Sumup On") {
        setMachine3(Sumup_On());
      } else if (listJSON[2] == "Sumup Total") {
        setMachine3(Sumup_Total());
      } else if (listJSON[2] == "Point Pro 2") {
        setMachine3(Point_Pro_2());
      }
    } else if (listJSON.length == 2) {
      if (listJSON[0] == "T2 Brother") {
        setMachine1(T2_Brother());
      } else if (listJSON[0] == "Minizinha NFC") {
        setMachine1(Minizinha_NFC());
      } else if (listJSON[0] == "Minizinha Chip 3") {
        setMachine1(Minizinha_Chip_3());
      } else if (listJSON[0] == "Moderninha Plus 2") {
        setMachine1(Moderninha_Plus_2());
      } else if (listJSON[0] == "Moderninha Pro 2") {
        setMachine1(Moderninha_Pro_2());
      } else if (listJSON[0] == "Moderninha X") {
        setMachine1(Moderninha_X());
      } else if (listJSON[0] == "Moderninha Smart 2") {
        setMachine1(Moderninha_Smart_2());
      } else if (listJSON[0] == "Point Mini Chip") {
        setMachine1(Point_Mini_Chip());
      } else if (listJSON[0] == "Point Smart") {
        setMachine1(Point_Smart());
      } else if (listJSON[0] == "T1 Brother") {
        setMachine1(T1_Brother());
      } else if (listJSON[0] == "T1 Chip Brother") {
        setMachine1(T1_Chip_Brother());
      } else if (listJSON[0] == "T3 Brother") {
        setMachine1(T3_Brother());
      } else if (listJSON[0] == "Sumup On") {
        setMachine1(Sumup_On());
      } else if (listJSON[0] == "Sumup Total") {
        setMachine1(Sumup_Total());
      } else if (listJSON[0] == "Point Pro 2") {
        setMachine1(Point_Pro_2());
      } 

      if (listJSON[1] == "T2 Brother") {
        setMachine2(T2_Brother());
      } else if (listJSON[1] == "Minizinha NFC") {
        setMachine2(Minizinha_NFC());
      } else if (listJSON[1] == "Minizinha Chip 3") {
        setMachine2(Minizinha_Chip_3());
      } else if (listJSON[1] == "Moderninha Plus 2") {
        setMachine2(Moderninha_Plus_2());
      } else if (listJSON[1] == "Moderninha Pro 2") {
        setMachine2(Moderninha_Pro_2());
      } else if (listJSON[1] == "Moderninha X") {
        setMachine2(Moderninha_X());
      } else if (listJSON[1] == "Moderninha Smart 2") {
        setMachine2(Moderninha_Smart_2());
      } else if (listJSON[1] == "Point Mini Chip") {
        setMachine2(Point_Mini_Chip());
      } else if (listJSON[1] == "Point Smart") {
        setMachine2(Point_Smart());
      } else if (listJSON[1] == "T1 Brother") {
        setMachine2(T1_Brother());
      } else if (listJSON[1] == "T1 Chip Brother") {
        setMachine2(T1_Chip_Brother());
      } else if (listJSON[1] == "T3 Brother") {
        setMachine2(T3_Brother());
      } else if (listJSON[1] == "Sumup On") {
        setMachine2(Sumup_On());
      } else if (listJSON[1] == "Sumup Total") {
        setMachine2(Sumup_Total());
      } else if (listJSON[1] == "Point Pro 2") {
        setMachine2(Point_Pro_2());
      }
    
    
      {/* ---------------------------------------------------------- */}

    }
  }, []);

  {/* ------------------- */}

  function expand() {
    if (JSON.parse(name).length == 3) {
      setButtonBottom("cardNoneDisplay");
      setCardTwo("cardMachine2");
      setCardThree("cardMachine3");
    } else if (JSON.parse(name).length == 2) {
      setButtonBottom("cardNoneDisplay");
      setCardTwo("cardMachine2");
    }
  }

  function replay() {
    localStorage.clear();
    router.push("/");
  }

  return (
    <div className="flex flex-row w-full h-screen bg-[#2F3997] ">
      <Head>
        <title>Maquininha Ideal | Resultado</title>
        <meta name="description" content="Resultado do quiz maquininha ideal"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Box className="flex flex-col justify-between w-1/2 h-full ">
        <Image
          onClick={replay}
          className={$.logo3}
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

      <div className="flex absolute flex-col w-full h-full overflow-scroll items-center">
        <Image
          onClick={replay}
          className={$.logo2}
          width={0}
          heigth={0}
          src={logo}
          alt="logo maquininha ideal"
        />
        <div className={$.textResult}>
          <h1>Parabéns encontramos a maquininha ideal para você!</h1>
          <p className="pt-3 text-[#a2a1a1]">
            Esta é a melhor maquininha de cartão para você baseado em suas respostas. Caso queira ver a segunda e terceira colocada, clique em veja mais.
          </p>
        </div>
        <div className={$[cardOne]}>
          <div className=" justify-end pt-4 flex ">
            <Image className="w-10" width={0} heigth={0} src={ouro} />
          </div>

          <div className={$.cardIntern}>{machine1}</div>
        </div>

        <div className={$[cardTwo]}>
          <div className=" justify-end pt-4 flex">
            <Image className="w-10" width={0} heigth={0} src={prata} />
          </div>

          <div className={$.cardIntern}>{machine2}</div>
        </div>

        <div className={$[cardThree]}>
          <div className=" justify-end pt-4 flex ">
            <Image className="w-10" width={0} heigth={0} src={bronze} />
          </div>

          <div className={$.cardIntern}>{machine3}</div>
        </div>

        <div className={$[buttonBottom]}>
          <ButtonResult onClick={expand}>Mais opções</ButtonResult>
        </div>
        <ButtonReset onClick={replay} endIcon={<ReplayIcon/>}>Recomeçar quiz</ButtonReset>

      </div>

      <style jsx>
        {`
                
        html,
        body {
          padding: 0;
          margin: 0;
        }
        h1 {
          font-family: NunitoSans-Black, Opens Sans;
          line-height: 1;
          font-size: 25pt;
          color: white;
        }
        h2 {
          font-family: NunitoSans-Regular, Opens Sans;
          line-height: 1;
          font-size: 13pt;
          margin-top: 2%;
        }
        h3 {
          font-family: NunitoSans-Black, Opens Sans;
          line-height: 1;
          font-size: 35pt;
          color: white;
        }

        p {
          font-family: NunitoSans-Regular, Opens Sans;
          line-height: 1;
          font-size: 14pt;
          // color: white;

        }

        * {
          box-sizing: border-box;
          font-family: Nunito, Opens Sans;

        }
        
       

          @media (max-width: 1300px) {
            
  
          }
    
  
  
  
  
  

        }
        
        
        
        
        `}
      </style>
    </div>
  );
}
