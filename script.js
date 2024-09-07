function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa"); 

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se o campo pesquisa for uma string vazia
    if (!campoPesquisa){
      section.innerHTML = "<p> Nenhum atleta foi encontrado, você precisa digitar o nome de um atleta ou esporte </p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase(); 


    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da pesquisa e constrói o HTML
    for (let dado of dados) {
      titulo = dado.titulo.toLocaleLowerCase(); 
      descricao = dado.descricao.toLocaleLowerCase();
      tags = dado.tags.toLocaleLowerCase();
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      // Cria um novo elemento de resultado
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais Informações</a>
          </div>
        `;
      }
    }

    if (!resultados){
      resultados = "<p>Não temos essa informação na nossa base de dados, tente digitar um nome de outro atleta ou esporte</p>"
    }
  
    // Atualiza o conteúdo da seção com os resultados construídos
    section.innerHTML = resultados;
}  
