export class DoublyLinkedListNode<E> {
	public prev: DoublyLinkedListNode<E> | null = null;
	public next: DoublyLinkedListNode<E> | null = null;
	constructor(public element: E) {
		this.element = element;
	}
}

interface ILinkedList<E> {
	insertInBegin(data: E): DoublyLinkedListNode<E>;
	insertAtEnd(data: E): DoublyLinkedListNode<E>;
	deleteNode(data: E): void;
	traverse(): E[];
	size(): number;
	search(comparator: (data: E) => boolean): DoublyLinkedListNode<E> | null;
}

export class DoublyLinkedList<E> implements ILinkedList<E> {
	private head: DoublyLinkedListNode<E> | null = null;

	public insertInBegin(data: E): DoublyLinkedListNode<E> {
		const node = new DoublyLinkedListNode(data);
		if (this.head === null) {
			this.head = node;
		} else {
			node.next = this.head;
			this.head.prev = node;
			this.head = node;
		}
		return node;
	}

	public getFirstNode(): DoublyLinkedListNode<E> | null {
		return this.head;
	}

	public insertAtEnd(data: E): DoublyLinkedListNode<E> {
		const node = new DoublyLinkedListNode(data);
		if (this.head === null) {
			this.head = node;
		} else {
			let current = this.head;
			while (current.next !== null) {
				current = current.next;
			}
			current.next = node;
			node.prev = current;
		}
		return node;
	}

	public deleteNode(data: E): void {
		if (this.head === null) {
			return;
		}
		if (this.head.element === data) {
			this.head = this.head.next;
			return;
		}
		let current = this.head;
		while (current.next !== null) {
			if (current.next.element === data) {
				current.next = current.next.next;
				return;
			}
			current = current.next;
		}
	}

	public traverse(): E[] {
		const result: E[] = [];
		let current = this.head;
		while (current !== null) {
			result.push(current.element);
			current = current.next;
		}
		return result;
	}

	public size(): number {
		let size = 0;
		let current = this.head;
		while (current !== null) {
			size++;
			current = current.next;
		}
		return size;
	}

	public search(comparator: (data: E) => boolean): DoublyLinkedListNode<E> | null {
		let current = this.head;
		while (current !== null) {
			if (comparator(current.element)) {
				return current;
			}
			current = current.next;
		}
		return null;
	}
	
}