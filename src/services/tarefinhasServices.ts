
import axios from "axios";
import type { TarefinhasType } from "../schemas/tarefinhasSchema";

const API_URL = "http://localhost:5287/v1/tarefinha";

export async function getTarefinhas() {
  const response = await axios.get(API_URL);
  return response.data;
}

export async function getByIdTarefinhas(id: number) {
  const response = await axios.get(`${API_URL}/{${id}}`);
  return response.data;
}

export async function postTarefinhas(data: TarefinhasType) {
  if (!data) {
    return;
  }
  console.log(data);
  // receber os dados
  // se os dados estão vazios - retun;
  // acessar meu endpoint
  // envio os meus dados
  // verifico se deu certo
  // retorno esse resultado - positivo/negativo
}

export async function deleteTarefinhas(id: number) {
  try{
    return await axios.delete(`${API_URL}/${id}`);
  }catch(error){
    console.log(error);
  }

}
