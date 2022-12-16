import Data from "./dados.json";

const ocorrencia = [
  {
    ocorrencias_total: Data[0].geral.ocorrencias_total,
    ocorrencias_sem_contato: Data[0].geral.ocorrencias_sem_contato,
    ocorrencias_com_contato: Data[0].geral.ocorrencias_com_contato,
    ocorrencias_abordagem: Data[0].geral.ocorrencias_abordagem,
    ocorrencias_fechamento: Data[0].geral.ocorrencias_fechamento,
  }
];

const chamados = [
  {
    contas_quantidade: Data[0].geral.contas_quantidade,
    chamadas_total: Data[0].geral.chamadas_total,
    chamadas_falha_operadora: Data[0].geral.chamadas_falha_operadora,
    chamadas_telefone_incorreto: Data[0].geral.chamadas_telefone_incorreto,
    chamadas_nao_atendida: Data[0].geral.chamadas_nao_atendida,
    chamadas_atendimento_maquina: Data[0].geral.chamadas_atendimento_maquina,
    chamadas_atendimento_humano: Data[0].geral.chamadas_atendimento_humano,
    chamadas_abandono_pre_fila: Data[0].geral.chamadas_abandono_pre_fila,
    chamadas_atendimento_pa: Data[0].geral.chamadas_atendimento_pa,
  }
];

const TableHeaderContent = [
  { id: 1, name: "Chamados Total", },
  { id: 2, name: "Chamados Falha OP", },
  { id: 3, name: "Chamados Tel Inco", },
  { id: 4, name: "Chamadas Não Aten", },
  { id: 5, name: "Chamadas Aten M", },
  { id: 6, name: "Chamadas Aten H", },
  { id: 7, name: "Chamadas Aband Fila", },
  { id: 8, name: "Chamadas Atend Pa", },
  { id: 9, name: "Ocorrencias Total", },
  { id: 10, name: "Ocorrencias Sem Cont", },
  { id: 11, name: "Ocorrencias com Contato", },
  { id: 12, name: "Ocorrencias Abordagem", },
  { id: 13, name: "Ocorrencias Fechamento", },
  { id: 14, name: "Data", },
  { id: 15, name: "Hora", },
];

export { ocorrencia, chamados, TableHeaderContent };
