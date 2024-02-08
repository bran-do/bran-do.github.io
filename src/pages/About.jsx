import me from '../assets/img/1.jpg'

function About() {
  return (
    <>
      <div className=" md:px-20 md:py-10">
        <h1 className="px-4 py-2 text-2xl md:text-4xl">Sobre mim</h1>

        <div className="font-body">
          <p className="p-4 py-2 pb-3 text-xl md:w-3/4">
          Oi :) <br/>
          Bem-vindx ao meu portfólio web.
          </p>

          <img src={me} className="md:py-5 md:px-4"/>

          <p className="p-4 text-xl md:w-3/4 py-5">
          Resolvi trazer essa minha foto logo de cara porque, de alguma forma, ela diz bastante sobre quem eu sou. <br/><br/>
          Moro em Porto Alegre, tô nos meus 26 anos e não tem coisa que eu goste mais do que dar um passeio descompromissado pelo bairro no fim de semana, tomar cafezinho na rua, ter aquela conversa amistosa com algum senhor passeando com o cachorro e acabar em lugares simpáticos como essa floricultura da foto, onde comprei uma palmeirinha muito charmosa.

          </p>
        </div>
      </div>
    </>
  )
}

export default About;