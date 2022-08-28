var intervald = window.setInterval(() => {carregar()},1000); // atualiza o horário sem precisar recarregar a página.

function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundo}`

    function addZero(minutos, segundo) { // funcão para adiconar um "0" antes do minuto.
        if (minutos < 10 || segundo < 10) {
          minutos = "0" + minutos;
          segundo = "0" + segundo;
        }
        return minutos;
      }
    //depois chama
    minutos = addZero(data.getMinutes());
    segundo = addZero(data.getSeconds());

    if(hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são ${hora}:${minutos}:${segundo}`  
        img.src = 'fotomanha.png'
        document.body.style.background = '#bfb97e'
    }else if(hora >= 12 && hora <= 18) {
        msg.innerHTML = `Agora são ${hora}:${minutos}:${segundo}`
        img.src = 'fototarde.png'
        document.body.style.background = '#bd925e'
    }else {
        msg.innerHTML = `Agora são ${hora}:${minutos}:${segundo}`
        img.src = 'fotonoite.png'
        document.body.style.background = '#2e2b2a'
    }
}