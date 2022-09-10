import React from "react";

function Lista() {
    const tarefas = [{
        tarefa: "Estudar React",
        tempo: "01:00:00"
    }, {
        tarefa: "Estudar javascript",
        tempo: "01:00:00"
    },{
        tarefa: "Estudar Typecript",
        tempo: "00:30:00"
    }]
  return (
    <aside className="lista"> 
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((tarefa, index) => (
                <li key={index}> 
                    <h3>{tarefa.tarefa}</h3>
                    <h3>{tarefa.tempo}</h3>
                </li>
            ))}
        </ul>
    </aside>
  );
}

export default Lista;