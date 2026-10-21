function criarLink(rotulo, href, classe) {
  const link = document.createElement("a");
  link.className = classe;
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = rotulo;
  return link;
}

function criarProjeto(projeto, indice) {
  const item = document.createElement("li");
  item.className = "projeto";

  const numero = document.createElement("span");
  numero.className = "projeto-numero";
  numero.textContent = String(indice + 1).padStart(2, "0");

  const corpo = document.createElement("div");

  const tecnologia = document.createElement("p");
  tecnologia.className = "projeto-tech";
  tecnologia.textContent = projeto.tecnologia;

  const titulo = document.createElement("h2");
  titulo.textContent = projeto.nome;

  const descricao = document.createElement("p");
  descricao.className = "projeto-descricao";
  descricao.textContent = projeto.descricao;

  const acoes = document.createElement("div");
  acoes.className = "projeto-acoes";
  acoes.append(
    criarLink("Acessar site", projeto.site, "btn btn-dark"),
    criarLink("GitHub", projeto.github, "btn btn-outline-dark")
  );

  corpo.append(tecnologia, titulo, descricao);
  item.append(numero, corpo, acoes);
  return item;
}

function mostrarLista() {
  const lista = document.getElementById("lista-projetos");
  const contador = document.getElementById("contador");

  if (!Array.isArray(projetos) || projetos.length === 0) {
    contador.textContent = "Nenhum projeto";
    const aviso = document.createElement("p");
    aviso.className = "vazio";
    aviso.textContent = "A lista ainda está vazia.";
    lista.append(aviso);
    return;
  }

  const total = projetos.length;
  contador.textContent = total === 1 ? "1 projeto" : total + " projetos";
  lista.append(...projetos.map(criarProjeto));
}

mostrarLista();
