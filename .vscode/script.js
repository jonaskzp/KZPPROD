function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //APOS PEGAR A TAG DA IMAGEM, SUBSTITUA
  const img = document.querySelector("#PROFILE img")

  //SUBSTITUA A IMAGEM
  if (html.classList.contains("light")) {
    //SE TIVER LIGTH MODE
    img.setAttribute("src", "/kzp/noite.png ")
  } else {
    img.setAttribute("src", "/kzp/dia.png")
  }
}

/*
  
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

 ESSE CÓDIGO É O QUE FAZ O BOTAO DE JAVA FUNCIONAR. POREM POSSO FAZER ELE DE FORMA SIMPLIFICADA COMO ABAIXO*/

/*PASSO  A PASSO PARA TROCAR A IMAGEM 
  1PEGAR A TAG IMAGE
  2SUBSTITUIR A IMAGEM
  (CONDIÇAO- SE TIVER LIGTH MODE IMAGEM LIGTH, SEM LIGHT MODE MANTER IMAGEM NORMAL)
  */
