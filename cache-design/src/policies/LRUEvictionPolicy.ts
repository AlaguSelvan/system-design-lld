import {DoublyLinkedListNode, DoublyLinkedList} from "../algorithms/DoublyLinkedList";

export interface EvictionPolicy<Key> {
    keyAccessed(key: Key): void;
    /**
     * Evict key from eviction policy and return it.
     */
    evictKey(): void;
}

export class LRUEvictionPolicy<Key> implements EvictionPolicy<Key> {
	
	public dll: DoublyLinkedList<Key>;
	public mapper: Map<Key, DoublyLinkedListNode<Key>>;

	constructor() {
		this.dll = new DoublyLinkedList();
		this.mapper = new Map<Key, DoublyLinkedListNode<Key>>();
	}

	public keyAccessed(key: Key): void {
		if (this.mapper.has(key)) {
			const node = this.mapper.get(key);
			this.dll.deleteNode(node!.element);
			this.dll.insertAtEnd(node!.element);
		} else {
			const node = this.dll.insertAtEnd(key);
			this.mapper.set(key, node);
		}
	}

	public evictKey(): Key | null {
		const first = this.dll.getFirstNode();
		if (first === null) {
			return null;
		}
		this.dll.deleteNode(first.element);
		return first.element
	}
}
