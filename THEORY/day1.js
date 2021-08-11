// Linked List

// Head - pointe for the first item
// Tail - point for the last item

// BIG O

// Para adicionar um item numa linked list, big O é O(1), pois independente do tamanho leva apenas uma operação.
// EM contrapartida, para remover um item o BIG O é O(n), pois a linked list precisar iniciar a verificação novamente e percorrer
// todoas os itens até chegar no tail. Isto é, o tempo é proporcional ao tamanho da linked list, por isso O(n).

// Remover do inicio também será O(1), pois não precisa percorrer a lista.

// Inserir e remover do meio da linked list, também é O(n). Precisar percorrer toda a lista.

// O FIND - diferente do array, tanto find pelo value ou por index, é O(n).

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
}

let myLinkedList = new LinkedList(4);

console.log(myLinkedList);
