
import React from "react";

// Aula propos 1 -------------------------------------------
// const Bemvindo = (props) => {
//   return(
//     <div>
//       <h2>Bem-vindo {props.nome}</h2>
//       <h3>Tenho {props.idade} anos</h3>
//     </div>
//   );
// }

// export default function App(){
//   return(
//     <div>
//       Bem vindo
//       <Bemvindo nome='Lize' idade='55'/>
//       <Bemvindo nome='Laís' idade='21'/>
//       <Bemvindo nome='Péricles' idade='56'/>
//       <h2>Péricles Zacarias Abrahão :)</h2>
//     </div>
//   )
// }
//--------------------------------------------------------------

const Equipe = (props) => {
  return(
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
      <Social fb={props.facebook}/>
      <hr/>
    </div>
  );
}

const Sobre = (props) => {
  return(
    <div>
      <h2>Olá sou o {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade}</h3>
    </div>
  );
}

function Social(props) {
  return (
    <div>
      <a href={props.fb}> FaceBook </a>
      <a> Instagran </a>
      <a> LinkedIn </a>
    </div>
  );
}

function App(){
  return(
    <div>
      <h1>Conheça nossa Equipe:</h1>
      <Equipe nome="Péricles" cargo="Analista de Sistemas" idade="56" facebook="https://google.com"/>
      <Equipe nome="Laís" cargo="Engenharia Mecânica" idade="56" facebook="https://google.com"/>
      <Equipe nome="Lize" cargo="Jornalista" idade="56" facebook="https://google.com"/>
      <Equipe nome="Adriano" cargo="Agronomo" idade="56" facebook="https://google.com"/>
    </div>
  );
}

export default App;