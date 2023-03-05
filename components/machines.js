import React from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import machine from "../public/machine.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const ButtonHome = styled(Button)({
  fontSize: 14,
  backgroundColor: "#F6AE39",
  fontFamily: "Raleway-ExtraBold",
  color: "white",
  width: "100%",
  height: 45,
  borderRadius: 10,
  marginTop: "15%",
  boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",

  "&:hover": {
    boxShadow: "none",
    top: 1,
    backgroundColor: "#d69833",
  },

  "@media (max-width: 500px)": {
    width: "80%",
  },
});


{/* ---------- AQUI VOCE EDITA AS INFORMAÇOES DAS MAQUININHAS ---------- */}



export function T2_Brother() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>
          T2+ <span>Brother</span>
        </h1>
        <Image className="mt-6" width={0} height={0} src={machine} />
      </div>
      <div className="pt-20 flex flex-col items-center">
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white  mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="border w-60 h-0 border-white mt-6" />

        <div className="flex flex-row mt-6 justify-center">
          <div>
            <h2 className="line-through -mb-1 text-[#3A82E2]">R$ 958,00</h2>
            <h2 className="font-bold -mb-1 text-[#3A82E2]">R$ 418,00</h2>
            <h2 className="text-[#3A82E2]">a vista ou</h2>
          </div>

          <div className="flex flex-col items-end ml-3 mt-3">
            <h2 className="font-bold mb-0  text-[#3A82E2]">12x</h2>
            <h2 className="font-bold text-white">R$</h2>
          </div>
          <div classNasme="mt-4 ml-2">
            <h3>
              39<span className="font-black text-sm align-top">,90</span>
            </h3>
          </div>
        </div>

        <ButtonHome className="bg-[#F6AE39]">Comprar ja</ButtonHome>
      </div>

      <style jsx>
        {`
                
        html,
        body {
          padding: 0;
          margin: 0;
        }
        h1 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 25pt;
          color: white;
        }
        h2 {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 13pt;
          margin-top: 2%;
        }
        h3 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 35pt;
          color: white;
          margin-top:10%;

        }

        p {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 14pt;
          color: white;

        }

        * {
          box-sizing: border-box;
          font-family: Nunito

        }
        
       

          @media (max-width: 1300px) {
            
  
          }
    
  
  
  
  
  

        }
        
        
        
        
        `}
      </style>
    </>
  );
}

export function Moderninha() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>
          T2+ <span>Brother</span>
        </h1>
        <Image className="mt-6" width={0} height={0} src={machine} />
      </div>
      <div className="pt-20 flex flex-col items-center">
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white  mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="border w-60 h-0 border-white mt-6" />

        <div className="flex flex-row mt-6 justify-center">
          <div>
            <h2 className="line-through -mb-1 text-[#3A82E2]">R$ 958,00</h2>
            <h2 className="font-bold -mb-1 text-[#3A82E2]">R$ 418,00</h2>
            <h2 className="text-[#3A82E2]">a vista ou</h2>
          </div>

          <div className="flex flex-col items-end ml-3 mt-3">
            <h2 className="font-bold mb-0  text-[#3A82E2]">12x</h2>
            <h2 className="font-bold text-white">R$</h2>
          </div>
          <div classNasme="mt-4 ml-2">
            <h3>
              39<span className="font-black text-sm align-top">,90</span>
            </h3>
          </div>
        </div>

        <ButtonHome className="bg-[#F6AE39]">Comprar ja</ButtonHome>
      </div>

      <style jsx>
        {`
                
        html,
        body {
          padding: 0;
          margin: 0;
        }
        h1 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 25pt;
          color: white;
        }
        h2 {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 13pt;
          margin-top: 2%;
        }
        h3 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 35pt;
          color: white;
          margin-top:10%;

        }

        p {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 14pt;
          color: white;

        }

        * {
          box-sizing: border-box;
          font-family: Nunito

        }
        
       

          @media (max-width: 1300px) {
            
  
          }
    
  
  
  
  
  

        }
        
        
        
        
        `}
      </style>
    </>
  );
}



export function Minizinha_NFC() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>
          Minizinha <span>NFC</span>
        </h1>
        <Image className="mt-6" width={0} height={0} src={machine} />
      </div>
      <div className="pt-20 flex flex-col items-center">
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white  mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="border w-60 h-0 border-white mt-6" />

        <div className="flex flex-row mt-6 justify-center">
          <div>
            <h2 className="line-through -mb-1 text-[#3A82E2]">R$ 958,00</h2>
            <h2 className="font-bold -mb-1 text-[#3A82E2]">R$ 418,00</h2>
            <h2 className="text-[#3A82E2]">a vista ou</h2>
          </div>

          <div className="flex flex-col items-end ml-3 mt-3">
            <h2 className="font-bold mb-0  text-[#3A82E2]">12x</h2>
            <h2 className="font-bold text-white">R$</h2>
          </div>
          <div classNasme="mt-4 ml-2">
            <h3>
              39<span className="font-black text-sm align-top">,90</span>
            </h3>
          </div>
        </div>

        <ButtonHome className="bg-[#F6AE39]">Comprar ja</ButtonHome>
      </div>

      <style jsx>
        {`
                
        html,
        body {
          padding: 0;
          margin: 0;
        }
        h1 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 25pt;
          color: white;
        }
        h2 {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 13pt;
          margin-top: 2%;
        }
        h3 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 35pt;
          color: white;
          margin-top:10%;

        }

        p {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 14pt;
          color: white;

        }

        * {
          box-sizing: border-box;
          font-family: Nunito

        }
        
       

          @media (max-width: 1300px) {
            
  
          }
    
  
  
  
  
  

        }
        
        
        
        
        `}
      </style>
    </>
  );
}

export function Minizinha_Chip_3() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>
          Minizinha <span>Chip 3</span>
        </h1>
        <Image className="mt-6" width={0} height={0} src={machine} />
      </div>
      <div className="pt-20 flex flex-col items-center">
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white  mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="border w-60 h-0 border-white mt-6" />

        <div className="flex flex-row mt-6 justify-center">
          <div>
            <h2 className="line-through -mb-1 text-[#3A82E2]">R$ 958,00</h2>
            <h2 className="font-bold -mb-1 text-[#3A82E2]">R$ 418,00</h2>
            <h2 className="text-[#3A82E2]">a vista ou</h2>
          </div>

          <div className="flex flex-col items-end ml-3 mt-3">
            <h2 className="font-bold mb-0  text-[#3A82E2]">12x</h2>
            <h2 className="font-bold text-white">R$</h2>
          </div>
          <div classNasme="mt-4 ml-2">
            <h3>
              39<span className="font-black text-sm align-top">,90</span>
            </h3>
          </div>
        </div>
        <Link href="">
          <ButtonHome className="bg-[#F6AE39]">Comprar ja</ButtonHome>
        </Link>
      </div>

      <style jsx>
        {`
                
        html,
        body {
          padding: 0;
          margin: 0;
        }
        h1 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 25pt;
          color: white;
        }
        h2 {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 13pt;
          margin-top: 2%;
        }
        h3 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 35pt;
          color: white;
          margin-top:10%;

        }

        p {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 14pt;
          color: white;

        }

        * {
          box-sizing: border-box;
          font-family: Nunito

        }
        
       

          @media (max-width: 1300px) {
            
  
          }
    
  
  
  
  
  

        }
        
        
        
        
        `}
      </style>
    </>
  );
}

export function Moderninha_Plus_2() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>
          Moderninha <span>Plus 2</span>
        </h1>
        <Image className="mt-6" width={0} height={0} src={machine} />
      </div>
      <div className="pt-20 flex flex-col items-center">
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white  mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="border w-60 h-0 border-white mt-6" />

        <div className="flex flex-row mt-6 justify-center">
          <div>
            <h2 className="line-through -mb-1 text-[#3A82E2]">R$ 958,00</h2>
            <h2 className="font-bold -mb-1 text-[#3A82E2]">R$ 418,00</h2>
            <h2 className="text-[#3A82E2]">a vista ou</h2>
          </div>

          <div className="flex flex-col items-end ml-3 mt-3">
            <h2 className="font-bold mb-0  text-[#3A82E2]">12x</h2>
            <h2 className="font-bold text-white">R$</h2>
          </div>
          <div classNasme="mt-4 ml-2">
            <h3>
              39<span className="font-black text-sm align-top">,90</span>
            </h3>
          </div>
        </div>

        <ButtonHome className="bg-[#F6AE39]">Comprar ja</ButtonHome>
      </div>

      <style jsx>
        {`
                
        html,
        body {
          padding: 0;
          margin: 0;
        }
        h1 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 25pt;
          color: white;
        }
        h2 {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 13pt;
          margin-top: 2%;
        }
        h3 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 35pt;
          color: white;
          margin-top:10%;

        }

        p {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 14pt;
          color: white;

        }

        * {
          box-sizing: border-box;
          font-family: Nunito

        }
        
       

          @media (max-width: 1300px) {
            
  
          }
    
  
  
  
  
  

        }
        
        
        
        
        `}
      </style>
    </>
  );
}

export function Moderninha_Pro_2() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>
          Moderninha <span>Pro 2</span>
        </h1>
        <Image className="mt-6" width={0} height={0} src={machine} />
      </div>
      <div className="pt-20 flex flex-col items-center">
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white  mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="border w-60 h-0 border-white mt-6" />

        <div className="flex flex-row mt-6 justify-center">
          <div>
            <h2 className="line-through -mb-1 text-[#3A82E2]">R$ 958,00</h2>
            <h2 className="font-bold -mb-1 text-[#3A82E2]">R$ 418,00</h2>
            <h2 className="text-[#3A82E2]">a vista ou</h2>
          </div>

          <div className="flex flex-col items-end ml-3 mt-3">
            <h2 className="font-bold mb-0  text-[#3A82E2]">12x</h2>
            <h2 className="font-bold text-white">R$</h2>
          </div>
          <div classNasme="mt-4 bg-black ml-2">
            <h3>
              39<span className="font-black text-sm align-top">,90</span>
            </h3>
          </div>
        </div>

        <ButtonHome className="bg-[#F6AE39]">Comprar ja</ButtonHome>
      </div>

      <style jsx>
        {`
                
        html,
        body {
          padding: 0;
          margin: 0;
        }
        h1 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 25pt;
          color: white;
        }
        h2 {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 13pt;
          margin-top: 2%;
        }
        h3 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 35pt;
          color: white;
          margin-top:10%;

        }

        p {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 14pt;
          color: white;

        }

        * {
          box-sizing: border-box;
          font-family: Nunito

        }
        
       

          @media (max-width: 1300px) {
            
  
          }
    
  
  
  
  
  

        }
        
        
        
        
        `}
      </style>
    </>
  );
}

export function Moderninha_X() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>
          Moderninha <span>X</span>
        </h1>
        <Image className="mt-6" width={0} height={0} src={machine} />
      </div>
      <div className="pt-20 flex flex-col items-center">
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white  mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="border w-60 h-0 border-white mt-6" />

        <div className="flex flex-row mt-6 justify-center">
          <div>
            <h2 className="line-through -mb-1 text-[#3A82E2]">R$ 958,00</h2>
            <h2 className="font-bold -mb-1 text-[#3A82E2]">R$ 418,00</h2>
            <h2 className="text-[#3A82E2]">a vista ou</h2>
          </div>

          <div className="flex flex-col items-end ml-3 mt-3">
            <h2 className="font-bold mb-0  text-[#3A82E2]">12x</h2>
            <h2 className="font-bold text-white">R$</h2>
          </div>
          <div classNasme="mt-4 ml-2">
            <h3>
              39<span className="font-black text-sm align-top">,90</span>
            </h3>
          </div>
        </div>

        <ButtonHome className="bg-[#F6AE39]">Comprar ja</ButtonHome>
      </div>

      <style jsx>
        {`
                
        html,
        body {
          padding: 0;
          margin: 0;
        }
        h1 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 25pt;
          color: white;
        }
        h2 {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 13pt;
          margin-top: 2%;
        }
        h3 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 35pt;
          color: white;
          margin-top:10%;

        }

        p {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 14pt;
          color: white;

        }

        * {
          box-sizing: border-box;
          font-family: Nunito

        }
        
       

          @media (max-width: 1300px) {
            
  
          }
    
  
  
  
  
  

        }
        
        
        
        
        `}
      </style>
    </>
  );
}

export function Moderninha_Smart_2() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>
          Moderninha <span>Smart 2</span>
        </h1>
        <Image className="mt-6" width={0} height={0} src={machine} />
      </div>
      <div className="pt-20 flex flex-col items-center">
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white  mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="border w-60 h-0 border-white mt-6" />

        <div className="flex flex-row mt-6 justify-center">
          <div>
            <h2 className="line-through -mb-1 text-[#3A82E2]">R$ 958,00</h2>
            <h2 className="font-bold -mb-1 text-[#3A82E2]">R$ 418,00</h2>
            <h2 className="text-[#3A82E2]">a vista ou</h2>
          </div>

          <div className="flex flex-col items-end ml-3 mt-3">
            <h2 className="font-bold mb-0  text-[#3A82E2]">12x</h2>
            <h2 className="font-bold text-white">R$</h2>
          </div>
          <div classNasme="mt-4 ml-2">
            <h3>
              39<span className="font-black text-sm align-top">,90</span>
            </h3>
          </div>
        </div>

        <ButtonHome className="bg-[#F6AE39]">Comprar ja</ButtonHome>
      </div>

      <style jsx>
        {`
                
        html,
        body {
          padding: 0;
          margin: 0;
        }
        h1 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 25pt;
          color: white;
        }
        h2 {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 13pt;
          margin-top: 2%;
        }
        h3 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 35pt;
          color: white;
          margin-top:10%;

        }

        p {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 14pt;
          color: white;

        }

        * {
          box-sizing: border-box;
          font-family: Nunito

        }
        
       

          @media (max-width: 1300px) {
            
  
          }
    
  
  
  
  
  

        }
        
        
        
        
        `}
      </style>
    </>
  );
}

export function Point_Mini_Chip() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>
          Point <span>Mini Chip</span>
        </h1>
        <Image className="mt-6" width={0} height={0} src={machine} />
      </div>
      <div className="pt-20 flex flex-col items-center">
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white  mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="border w-60 h-0 border-white mt-6" />

        <div className="flex flex-row mt-6 justify-center">
          <div>
            <h2 className="line-through -mb-1 text-[#3A82E2]">R$ 958,00</h2>
            <h2 className="font-bold -mb-1 text-[#3A82E2]">R$ 418,00</h2>
            <h2 className="text-[#3A82E2]">a vista ou</h2>
          </div>

          <div className="flex flex-col items-end ml-3 mt-3">
            <h2 className="font-bold mb-0  text-[#3A82E2]">12x</h2>
            <h2 className="font-bold text-white">R$</h2>
          </div>
          <div classNasme="mt-4 ml-2">
            <h3>
              39<span className="font-black text-sm align-top">,90</span>
            </h3>
          </div>
        </div>

        <ButtonHome className="bg-[#F6AE39]">Comprar ja</ButtonHome>
      </div>

      <style jsx>
        {`
                
        html,
        body {
          padding: 0;
          margin: 0;
        }
        h1 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 25pt;
          color: white;
        }
        h2 {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 13pt;
          margin-top: 2%;
        }
        h3 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 35pt;
          color: white;
          margin-top:10%;

        }

        p {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 14pt;
          color: white;

        }

        * {
          box-sizing: border-box;
          font-family: Nunito

        }
        
       

          @media (max-width: 1300px) {
            
  
          }
    
  
  
  
  
  

        }
        
        
        
        
        `}
      </style>
    </>
  );
}

export function Point_Pro_2() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>
          Point <span>Pro 2</span>
        </h1>
        <Image className="mt-6" width={0} height={0} src={machine} />
      </div>
      <div className="pt-20 flex flex-col items-center">
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white  mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="border w-60 h-0 border-white mt-6" />

        <div className="flex flex-row mt-6 justify-center">
          <div>
            <h2 className="line-through -mb-1 text-[#3A82E2]">R$ 958,00</h2>
            <h2 className="font-bold -mb-1 text-[#3A82E2]">R$ 418,00</h2>
            <h2 className="text-[#3A82E2]">a vista ou</h2>
          </div>

          <div className="flex flex-col items-end ml-3 mt-3">
            <h2 className="font-bold mb-0  text-[#3A82E2]">12x</h2>
            <h2 className="font-bold text-white">R$</h2>
          </div>
          <div classNasme="mt-4 ml-2">
            <h3>
              39<span className="font-black text-sm align-top">,90</span>
            </h3>
          </div>
        </div>

        <ButtonHome className="bg-[#F6AE39]">Comprar ja</ButtonHome>
      </div>

      <style jsx>
        {`
                
        html,
        body {
          padding: 0;
          margin: 0;
        }
        h1 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 25pt;
          color: white;
        }
        h2 {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 13pt;
          margin-top: 2%;
        }
        h3 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 35pt;
          color: white;
          margin-top:10%;

        }

        p {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 14pt;
          color: white;

        }

        * {
          box-sizing: border-box;
          font-family: Nunito

        }
        
       

          @media (max-width: 1300px) {
            
  
          }
    
  
  
  
  
  

        }
        
        
        
        
        `}
      </style>
    </>
  );
}

export function Point_Smart() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>
          Point <span>Smart</span>
        </h1>
        <Image className="mt-6" width={0} height={0} src={machine} />
      </div>
      <div className="pt-20 flex flex-col items-center">
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white  mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="border w-60 h-0 border-white mt-6" />

        <div className="flex flex-row mt-6 justify-center">
          <div>
            <h2 className="line-through -mb-1 text-[#3A82E2]">R$ 958,00</h2>
            <h2 className="font-bold -mb-1 text-[#3A82E2]">R$ 418,00</h2>
            <h2 className="text-[#3A82E2]">a vista ou</h2>
          </div>

          <div className="flex flex-col items-end ml-3 mt-3">
            <h2 className="font-bold mb-0  text-[#3A82E2]">12x</h2>
            <h2 className="font-bold text-white">R$</h2>
          </div>
          <div classNasme="mt-4 ml-2">
            <h3>
              39<span className="font-black text-sm align-top">,90</span>
            </h3>
          </div>
        </div>

        <ButtonHome className="bg-[#F6AE39]">Comprar ja</ButtonHome>
      </div>

      <style jsx>
        {`
                
        html,
        body {
          padding: 0;
          margin: 0;
        }
        h1 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 25pt;
          color: white;
        }
        h2 {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 13pt;
          margin-top: 2%;
        }
        h3 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 35pt;
          color: white;
          margin-top:10%;

        }

        p {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 14pt;
          color: white;

        }

        * {
          box-sizing: border-box;
          font-family: Nunito

        }
        
       

          @media (max-width: 1300px) {
            
  
          }
    
  
  
  
  
  

        }
        
        
        
        
        `}
      </style>
    </>
  );
}

export function T1_Brother() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>
          T1 <span>Brother</span>
        </h1>
        <Image className="mt-6" width={0} height={0} src={machine} />
      </div>
      <div className="pt-20 flex flex-col items-center">
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white  mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="border w-60 h-0 border-white mt-6" />

        <div className="flex flex-row mt-6 justify-center">
          <div>
            <h2 className="line-through -mb-1 text-[#3A82E2]">R$ 958,00</h2>
            <h2 className="font-bold -mb-1 text-[#3A82E2]">R$ 418,00</h2>
            <h2 className="text-[#3A82E2]">a vista ou</h2>
          </div>

          <div className="flex flex-col items-end ml-3 mt-3">
            <h2 className="font-bold mb-0  text-[#3A82E2]">12x</h2>
            <h2 className="font-bold text-white">R$</h2>
          </div>
          <div classNasme="mt-4 ml-2">
            <h3>
              39<span className="font-black text-sm align-top">,90</span>
            </h3>
          </div>
        </div>

        <ButtonHome className="bg-[#F6AE39]">Comprar ja</ButtonHome>
      </div>

      <style jsx>
        {`
                
        html,
        body {
          padding: 0;
          margin: 0;
        }
        h1 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 25pt;
          color: white;
        }
        h2 {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 13pt;
          margin-top: 2%;
        }
        h3 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 35pt;
          color: white;
          margin-top:10%;

        }

        p {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 14pt;
          color: white;

        }

        * {
          box-sizing: border-box;
          font-family: Nunito

        }
        
       

          @media (max-width: 1300px) {
            
  
          }
    
  
  
  
  
  

        }
        
        
        
        
        `}
      </style>
    </>
  );
}

export function T1_Chip_Brother() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>
          T1 <span>Chip Brother</span>
        </h1>
        <Image className="mt-6" width={0} height={0} src={machine} />
      </div>
      <div className="pt-20 flex flex-col items-center">
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white  mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="border w-60 h-0 border-white mt-6" />

        <div className="flex flex-row mt-6 justify-center">
          <div>
            <h2 className="line-through -mb-1 text-[#3A82E2]">R$ 958,00</h2>
            <h2 className="font-bold -mb-1 text-[#3A82E2]">R$ 418,00</h2>
            <h2 className="text-[#3A82E2]">a vista ou</h2>
          </div>

          <div className="flex flex-col items-end ml-3 mt-3">
            <h2 className="font-bold mb-0  text-[#3A82E2]">12x</h2>
            <h2 className="font-bold text-white">R$</h2>
          </div>
          <div classNasme="mt-4 ml-2">
            <h3>
              39<span className="font-black text-sm align-top">,90</span>
            </h3>
          </div>
        </div>

        <ButtonHome className="bg-[#F6AE39]">Comprar ja</ButtonHome>
      </div>

      <style jsx>
        {`
                
        html,
        body {
          padding: 0;
          margin: 0;
        }
        h1 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 25pt;
          color: white;
        }
        h2 {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 13pt;
          margin-top: 2%;
        }
        h3 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 35pt;
          color: white;
          margin-top:10%;

        }

        p {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 14pt;
          color: white;

        }

        * {
          box-sizing: border-box;
          font-family: Nunito

        }
        
       

          @media (max-width: 1300px) {
            
  
          }
    
  
  
  
  
  

        }
        
        
        
        
        `}
      </style>
    </>
  );
}

export function T3_Brother() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>
          T3 <span>Brother</span>
        </h1>
        <Image className="mt-6" width={0} height={0} src={machine} />
      </div>
      <div className="pt-20 flex flex-col items-center">
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white  mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="border w-60 h-0 border-white mt-6" />

        <div className="flex flex-row mt-6 justify-center">
          <div>
            <h2 className="line-through -mb-1 text-[#3A82E2]">R$ 958,00</h2>
            <h2 className="font-bold -mb-1 text-[#3A82E2]">R$ 418,00</h2>
            <h2 className="text-[#3A82E2]">a vista ou</h2>
          </div>

          <div className="flex flex-col items-end ml-3 mt-3">
            <h2 className="font-bold mb-0  text-[#3A82E2]">12x</h2>
            <h2 className="font-bold text-white">R$</h2>
          </div>
          <div classNasme="mt-4 ml-2">
            <h3>
              39<span className="font-black text-sm align-top">,90</span>
            </h3>
          </div>
        </div>

        <ButtonHome className="bg-[#F6AE39]">Comprar ja</ButtonHome>
      </div>

      <style jsx>
        {`
                
        html,
        body {
          padding: 0;
          margin: 0;
        }
        h1 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 25pt;
          color: white;
        }
        h2 {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 13pt;
          margin-top: 2%;
        }
        h3 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 35pt;
          color: white;
          margin-top:10%;
        }

        p {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 14pt;
          color: white;

        }

        * {
          box-sizing: border-box;
          font-family: Nunito

        }
        
       

          @media (max-width: 1300px) {
            
  
          }
    
  
  
  
  
  

        }
        
        
        
        
        `}
      </style>
    </>
  );
}

export function Sumup_On() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>
          Sumup <span>On</span>
        </h1>
        <Image className="mt-6" width={0} height={0} src={machine} />
      </div>
      <div className="pt-20 flex flex-col items-center">
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white  mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="border w-60 h-0 border-white mt-6" />

        <div className="flex flex-row mt-6 justify-center">
          <div>
            <h2 className="line-through -mb-1 text-[#3A82E2]">R$ 958,00</h2>
            <h2 className="font-bold -mb-1 text-[#3A82E2]">R$ 418,00</h2>
            <h2 className="text-[#3A82E2]">a vista ou</h2>
          </div>

          <div className="flex flex-col items-end ml-3 mt-3">
            <h2 className="font-bold mb-0  text-[#3A82E2]">12x</h2>
            <h2 className="font-bold text-white">R$</h2>
          </div>
          <div classNasme="mt-4 ml-2">
            <h3>
              39<span className="font-black text-sm align-top">,90</span>
            </h3>
          </div>
        </div>

        <ButtonHome className="bg-[#F6AE39]">Comprar ja</ButtonHome>
      </div>

      <style jsx>
        {`
                
        html,
        body {
          padding: 0;
          margin: 0;
        }
        h1 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 25pt;
          color: white;
        }
        h2 {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 13pt;
          margin-top: 2%;
        }
        h3 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 35pt;
          color: white;
          margin-top:10%;

        }

        p {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 14pt;
          color: white;

        }

        * {
          box-sizing: border-box;
          font-family: Nunito

        }
        
       

          @media (max-width: 1300px) {
            
  
          }
    
  
  
  
  
  

        }
        
        
        
        
        `}
      </style>
    </>
  );
}

export function Sumup_Total() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>
          Sumup <span>Total</span>
        </h1>
        <Image className="mt-6" width={0} height={0} src={machine} />
      </div>
      <div className="pt-20 flex flex-col items-center">
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white  mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="flex flex-row items-center mb-1">
          <CheckCircleOutlineIcon className="text-white mr-2" />
          <p>Nao precisa de um celular</p>
        </div>
        <div className="border w-60 h-0 border-white mt-6" />

        <div className="flex flex-row mt-6 justify-center">
          <div>
            <h2 className="line-through -mb-1 text-[#3A82E2]">R$ 958,00</h2>
            <h2 className="font-bold -mb-1 text-[#3A82E2]">R$ 418,00</h2>
            <h2 className="text-[#3A82E2]">a vista ou</h2>
          </div>

          <div className="flex flex-col items-end ml-3 mt-3">
            <h2 className="font-bold mb-0  text-[#3A82E2]">12x</h2>
            <h2 className="font-bold text-white">R$</h2>
          </div>
          <div classNasme="mt-4 ml-2">
            <h3>
              39<span className="font-black text-sm align-top">,90</span>
            </h3>
          </div>
        </div>

        <ButtonHome className="bg-[#F6AE39]">Comprar ja</ButtonHome>
      </div>

      <style jsx>
        {`
                
        html,
        body {
          padding: 0;
          margin: 0;
        }
        h1 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 25pt;
          color: white;
        }
        h2 {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 13pt;
          margin-top: 2%;
        }
        h3 {
          font-family: NunitoSans-Black;
          line-height: 1;
          font-size: 35pt;
          color: white;
          margin-top:10%;

        }

        p {
          font-family: NunitoSans-Regular;
          line-height: 1;
          font-size: 14pt;
          color: white;

        }

        * {
          box-sizing: border-box;
          font-family: Nunito

        }
        
       

          @media (max-width: 1300px) {
            
  
          }
    
  
  
  
  
  

        }
        
        
        
        
        `}
      </style>
    </>
  );
}
