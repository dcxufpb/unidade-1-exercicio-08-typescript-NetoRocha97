import { dados_loja_objeto } from './cupom';
import { Loja } from './loja';


function verificaCampoObrigatorio(mensagemEsperada: string, loja: Loja) {
  try {
    dados_loja_objeto(loja);
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
  }
}

// Todas as variáveis preenchidas
const NOME_LOJA = "Loja 1"
const LOGRADOURO = "Log 1"
const NUMERO = 10
const COMPLEMENTO = "C1"
const BAIRRO = "Bai 1"
const MUNICIPIO = "Mun 1"
const ESTADO = "E1"
const CEP = "11111-111"
const TELEFONE = "(11) 1111-1111"
const OBSERVACAO = "Obs 1"
const CNPJ = "11.111.111/1111-11"
const INSCRICAO_ESTADUAL = "123456789"

const TEXTO_ESPERADO_LOJA_COMPLETA: string = `Loja 1
Log 1, 10 C1
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_NUMERO: string = `Loja 1
Log 1, s/n C1
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_COMPLEMENTO: string = `Loja 1
Log 1, 10
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_BAIRRO: string = `Loja 1
Log 1, 10 C1
Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_CEP: string = `Loja 1
Log 1, 10 C1
Bai 1 - Mun 1 - E1
Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_TELEFONE: string = `Loja 1
Log 1, 10 C1
Bai 1 - Mun 1 - E1
CEP:11111-111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_OBSERVACAO: string = `Loja 1
Log 1, 10 C1
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111

CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_NUMERO_SEM_COMPLEMENTO: string = `Loja 1
Log 1, s/n
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_SEM_NUMERO_SEM_COMPLEMENTO_SEM_BAIRRO: string = `Loja 1
Log 1, s/n
Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
`;

const TEXTO_ESPERADO_EXERCICIO2_CUSTOMIZADO : string = `Loja CRVG
R. Gen. Almério de Moura, 131 Estádio
São Januário - Rio de Janeiro - RJ
CEP:20921-060 Tel (21) 91898-1927
Obs 1
CNPJ: 12.111.333/12133-12
IE: 123.456.789.000
`;

test('Loja Completa', () => {
  let lojaCompleta: Loja = new Loja(NOME_LOJA, LOGRADOURO, NUMERO, COMPLEMENTO,
    BAIRRO, MUNICIPIO, ESTADO, CEP, TELEFONE, OBSERVACAO, CNPJ,
    INSCRICAO_ESTADUAL);
  expect(dados_loja_objeto(lojaCompleta)).toBe(TEXTO_ESPERADO_LOJA_COMPLETA);
});

test('Nome vazio', () => {
  let nomeVazio: Loja = new Loja("", LOGRADOURO, NUMERO, COMPLEMENTO, BAIRRO,
    MUNICIPIO, ESTADO, CEP, TELEFONE, OBSERVACAO, CNPJ, INSCRICAO_ESTADUAL);
  verificaCampoObrigatorio(`O campo nome da loja é obrigatório`, nomeVazio);
});

test('Logradouro vazio', () => {
  let logradouroVazio: Loja = new Loja(NOME_LOJA, "", NUMERO, COMPLEMENTO, 
    BAIRRO, MUNICIPIO, ESTADO, CEP, TELEFONE, OBSERVACAO, CNPJ,
    INSCRICAO_ESTADUAL);
  verificaCampoObrigatorio(`O campo logradouro do endereço é obrigatório`,
    logradouroVazio);
});

test('Número zero', () => {
  let numeroZero: Loja = new Loja(NOME_LOJA, LOGRADOURO, 0, COMPLEMENTO, 
    BAIRRO, MUNICIPIO, ESTADO, CEP, TELEFONE, OBSERVACAO, CNPJ,
    INSCRICAO_ESTADUAL);
  expect(dados_loja_objeto(numeroZero)).toBe(TEXTO_ESPERADO_SEM_NUMERO);
});

test('Complemento vazio', () => {
  let complementoVazio: Loja = new Loja(NOME_LOJA, LOGRADOURO, NUMERO, "", 
    BAIRRO, MUNICIPIO, ESTADO, CEP, TELEFONE, OBSERVACAO, CNPJ, 
    INSCRICAO_ESTADUAL);
  expect(dados_loja_objeto(complementoVazio))
    .toBe(TEXTO_ESPERADO_SEM_COMPLEMENTO);
});

test('Bairro vazio', () => {
  let bairroVazio: Loja = new Loja(NOME_LOJA, LOGRADOURO, NUMERO, COMPLEMENTO,
    "", MUNICIPIO, ESTADO, CEP, TELEFONE, OBSERVACAO, CNPJ, 
    INSCRICAO_ESTADUAL);
  expect(dados_loja_objeto(bairroVazio)).toBe(TEXTO_ESPERADO_SEM_BAIRRO);
});

test('Município vazio', () => {
  let municipioVazio: Loja = new Loja(NOME_LOJA, LOGRADOURO, NUMERO,
    COMPLEMENTO, BAIRRO, "", ESTADO, CEP, TELEFONE, OBSERVACAO, CNPJ,
    INSCRICAO_ESTADUAL);
  verificaCampoObrigatorio(`O campo município do endereço é obrigatório`, 
    municipioVazio);
});

test('Estado vazio', () => {
  let estadoVazio: Loja = new Loja(NOME_LOJA, LOGRADOURO, NUMERO,
    COMPLEMENTO, BAIRRO, MUNICIPIO, "", CEP, TELEFONE, OBSERVACAO, CNPJ,
    INSCRICAO_ESTADUAL);
  verificaCampoObrigatorio(`O campo estado do endereço é obrigatório`, 
    estadoVazio);
});

test('CEP vazio', () => {
  let cepVazio: Loja = new Loja(NOME_LOJA, LOGRADOURO, NUMERO,
    COMPLEMENTO, BAIRRO, MUNICIPIO, ESTADO, "", TELEFONE, OBSERVACAO, CNPJ,
    INSCRICAO_ESTADUAL);
  expect(dados_loja_objeto(cepVazio)).toBe(TEXTO_ESPERADO_SEM_CEP);
});

test('Telefone vazio', () => {
  let telefoneVazio: Loja = new Loja(NOME_LOJA, LOGRADOURO, NUMERO,
    COMPLEMENTO, BAIRRO, MUNICIPIO, ESTADO, CEP, "", OBSERVACAO, CNPJ,
    INSCRICAO_ESTADUAL);
  expect(dados_loja_objeto(telefoneVazio)).toBe(TEXTO_ESPERADO_SEM_TELEFONE);
});

test('Observação vazia', () => {
  let observacaoVazia: Loja = new Loja(NOME_LOJA, LOGRADOURO, NUMERO,
    COMPLEMENTO, BAIRRO, MUNICIPIO, ESTADO, CEP, TELEFONE, "", CNPJ,
    INSCRICAO_ESTADUAL);
  expect(dados_loja_objeto(observacaoVazia))
    .toBe(TEXTO_ESPERADO_SEM_OBSERVACAO);
});

test('CNPJ vazio', () => {
  let cnpjVazio: Loja = new Loja(NOME_LOJA, LOGRADOURO, NUMERO,
    COMPLEMENTO, BAIRRO, MUNICIPIO, ESTADO, CEP, TELEFONE, OBSERVACAO, "",
    INSCRICAO_ESTADUAL);
  verificaCampoObrigatorio(`O campo CNPJ da loja é obrigatório`, cnpjVazio);
});

test('Inscrição estadual vazia', () => {
  let ieVazia: Loja = new Loja(NOME_LOJA, LOGRADOURO, NUMERO,
    COMPLEMENTO, BAIRRO, MUNICIPIO, ESTADO, CEP, TELEFONE, OBSERVACAO, CNPJ, 
    "");
  verificaCampoObrigatorio(`O campo inscrição estadual da loja é obrigatório`,
    ieVazia);
});

test('Número zero e complemento vazio', () => {
  let numeroZeroComplementoVazio: Loja = new Loja(NOME_LOJA, LOGRADOURO, 0, "",
    BAIRRO, MUNICIPIO, ESTADO, CEP, TELEFONE, OBSERVACAO, CNPJ, 
    INSCRICAO_ESTADUAL);
  expect(dados_loja_objeto(numeroZeroComplementoVazio))
    .toBe(TEXTO_ESPERADO_SEM_NUMERO_SEM_COMPLEMENTO);
});

test('Número zero, complemento e bairro vazios', () => {
  let numeroZeroComplementoVazioBairroVazio: Loja = new Loja(NOME_LOJA, 
    LOGRADOURO, 0, "", "", MUNICIPIO, ESTADO, CEP, TELEFONE, OBSERVACAO, CNPJ,
    INSCRICAO_ESTADUAL);
  expect(dados_loja_objeto(numeroZeroComplementoVazioBairroVazio))
    .toBe(TEXTO_ESPERADO_SEM_NUMERO_SEM_COMPLEMENTO_SEM_BAIRRO);
});


test('Exercício 2 - customizado', () => {

  // Defina seus próprios valores para as variáveis a seguir
  let nome_loja = "Loja CRVG";
  let logradouro = "R. Gen. Almério de Moura";
  let numero = 131;
  let complemento = "Estádio";
  let bairro = "São Januário";
  let municipio = "Rio de Janeiro";
  let estado = "RJ";
  let cep = "20921-060";
  let telefone = "(21) 91898-1927";
  let observacao = "Obs 1";
  let cnpj = "12.111.333/12133-12";
  let inscricao_estadual = "123.456.789.000";

  let loja_customizada: Loja = new Loja(nome_loja, logradouro, numero,
    complemento, bairro, municipio, estado, cep, telefone, observacao, cnpj,
    inscricao_estadual);

  //E atualize o texto esperado abaixo
  expect(dados_loja_objeto(loja_customizada)).toBe(TEXTO_ESPERADO_EXERCICIO2_CUSTOMIZADO);
});