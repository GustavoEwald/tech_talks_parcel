document.addEventListener('DOMContentLoaded', (event) => {
  AOS.init();
});

const dataEvento = new Date("Aug 15, 2024 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaHoras = setInterval(()=>{
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteEvento = timeStampEvento - timeStampAtual;
  
  const diasAteEvento = Math.floor(distanciaAteEvento/(1000*60*60*24));
  const horasAteEvento = Math.floor((distanciaAteEvento%(1000*60*60*24))/(1000*60*60));
  const minutosAteEvento = Math.floor((distanciaAteEvento%(1000*60*60))/(1000*60));
  const segundosAteEvento = Math.floor((distanciaAteEvento%(1000*60))/(1000));
  
  document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

  if (distanciaAteEvento < 0){
    clearInterval(contaHoras);
    document.getElementById('contador').innerHTML = "Evento Expirado";
  }

}, 1000);