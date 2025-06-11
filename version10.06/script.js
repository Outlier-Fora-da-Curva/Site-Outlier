// Envio de e-mail com assunto - fale conosco
import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import path from 'path'

const app = express();

app.use(express.static('public'))


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração do transportador
const transportador = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'outlier.corporativo@gmail.com',
    pass: 'jmhagqzgurfimopl',
  },
  tls: {
    rejectUnauthorized: false, // <--- IGNORA o erro de certificado
  },
});

// Rota para enviar o e-mail do cliente para a empresa
app.post("/faleConosco", (req, res) => {
  // Obter dados do formulário
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const assunto = req.body.assunto;
    const descricao = req.body.desc;


  const emailEnvio = {
    from: `"${nome}" <${email}>`,
    to: 'outlier.corporativo@gmail.com',
    subject: assunto,
    html: `
      <h2>Fale Conosco - ${assunto}</h2>
      <p> ${descricao}</p>

      <br>

      <h3>Contato do cliente:</h3>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>

    `,
    text: `Mensagem de ${nome}: ${descricao}`,
  };

  transportador.sendMail(emailEnvio)

    .then(() => {
      //alert('Email enviado com sucesso!');
      let end = path.resolve('./view/confirmacao.html')
      res.sendFile(end)
    })

    .catch((err) => {
      console.error('Erro ao enviar e-mail:', err);
      res.status(500).send('Erro ao enviar e-mail.');
    });
});


// Inicio 
app.get('/', function (req, res) {
  let end = path.resolve('./view/index.html')
  res.sendFile(end)
})

// fale conosco 
app.get('/faleConosco', function (req, res) {
  let end = path.resolve('./view/confirmacao.html')
  res.sendFile(end)
})



app.listen(9000, () => console.log("Funcionando na porta 9000"))

