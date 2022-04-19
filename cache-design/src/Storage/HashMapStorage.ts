import NotFoundException from "../exceptions/NotFoundException";
import StorageFullException from "../exceptions/StorageFullException";

interface IHashMapStorage<Key, Value> {
	storage: Map<Key, Value>;
	add(key: Key, value: Value): void;
	get(key: Key): Value;
	remove(key: Key): void;
	isEmpty(): boolean;
}

export class HashMapStorage<Key, Value> implements IHashMapStorage<Key, Value> {
	public storage: Map<Key, Value>;
	private capacity: number;
	constructor(capacity: number) {
		this.storage = new Map<Key, Value>();
		this.capacity = capacity;
	}

	public add(key: Key, value: Value): void {
		if (this.storage.size >= this.capacity) throw new StorageFullException('Storage is full');
		this.storage.set(key, value);
	}

	public get(key: Key): Value {
		if (!this.storage.has(key)) throw new NotFoundException('Key not found');
		return this.storage.get(key)!;
	}

	public remove(key: Key): void {
		if (!this.storage.has(key)) throw new NotFoundException('Key not found');
		this.storage.delete(key);
	}

	public isEmpty(): boolean {
		return this.storage.size >= this.capacity
	}
}