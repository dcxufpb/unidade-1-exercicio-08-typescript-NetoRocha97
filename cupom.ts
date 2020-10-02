import { Loja } from './loja'; 

export function dados_loja_objeto(loja: Loja) {
  // Implemente aqui
  if (loja.nome_loja == "")
    throw new Error(`O campo nome da loja é obrigatório`)

  if(loja.logradouro == "")
    throw new Error("O campo logradouro do endereço é obrigatório")

  if(loja.municipio == "")
    throw new Error("O campo município do endereço é obrigatório")

  if(loja.estado == "")
    throw new Error("O campo estado do endereço é obrigatório")
  
  if(loja.cnpj == "")
    throw new Error("O campo CNPJ da loja é obrigatório")

  if(loja.inscricao_estadual == "")
    throw new Error("O campo inscrição estadual da loja é obrigatório")


  const _logradouro : string = loja.logradouro + ", "
  const _numero : string = loja.numero? `${loja.numero}` : "s/n"
  const _complemento : string = loja.complemento && " " + loja.complemento || "";
  const _bairro : string = loja.bairro? loja.bairro + " - " : ""
  const _municipio = loja.municipio + " - "
  
  const _cep : string = loja.cep? `CEP:${loja.cep}` : ""
  let _telefone : string = loja.telefone? `Tel ${loja.telefone}` : ""
  _telefone = _cep && _telefone? " " + _telefone : _telefone
  
  const _observacao : string = loja.observacao? loja.observacao : ""

  const _cnpj : string = `CNPJ: ${loja.cnpj}`
  const _inscricao_estadual : string = `IE: ${loja.inscricao_estadual}`

    return `${loja.nome_loja}
${_logradouro}${_numero}${_complemento}
${_bairro}${_municipio}${loja.estado}
${_cep}${_telefone}
${_observacao}
${_cnpj}
${_inscricao_estadual}
`;
}
