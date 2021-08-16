const os = require('os');

// EventLoop para checar a memória a casa seg
setInterval(() => {
  const { freemem, totalmem } = os;

// Criando a porcentagem de mémoria disponível
const total = parseInt(totalmem() / 1024 / 1024);
const mem = parseInt(freemem() / 1024 / 1024);
const percents = parseInt((mem / total) * 100);

const stats = {
  free: `${mem} MB`,
  total: `${total} MB`,
  usage: `${percents}%`
};

console.clear() // limpa o terminal antes de aparecer o próximo log
console.log('====== PC STATS ======')
console.table(stats);
}, 1000)




