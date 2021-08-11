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

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let pre = this.head;

    for (let i = 0; i < this.length; i += 1) {
      if (temp.next) {
        pre = temp;
        temp = temp.next;
      }
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.pop();
