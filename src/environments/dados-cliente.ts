import { Cliente } from"../model/cliente";
export const listaCliente : Cliente[] = [
    //array
    // export - array que não permite alterações
    // listaCliente - nome do array
    // Cliente[] - array de objetos cliente, quanto possui || dizer que é um array
    // Array com 6 registros, demilimitados por {} chaves 
    
    {id: '101', nome : 'Marcos Silva', email : 'marcos@email.com', telefone : '(21)88888-9999'},
    {id: '102', nome : 'Paulo Mendes', email : 'paulo@email.com', telefone : '(21)88888-9999'},
    {id: '103', nome : 'Marcela Souza', email : 'marcela@email.com', telefone : '(21)88888-9999'},
    {id: '104', nome : 'Lucas Penha', email : 'lucas@email.com', telefone : '(21)88888-9999'},
    {id: '105', nome : 'Robson Menezes', email : 'robson@email.com', telefone : '(21)88888-9999'},
    {id: '106', nome : 'Aline dos Santos', email : 'aline@email.com', telefone : '(21)88888-9999'}
]