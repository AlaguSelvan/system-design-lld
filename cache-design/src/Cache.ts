import NotFoundException from "./exceptions/NotFoundException";
import StorageFullException from "./exceptions/StorageFullException";
import { LRUEvictionPolicy } from "./policies/LRUEvictionPolicy";
import {HashMapStorage} from "./Storage/HashMapStorage";

export default class Cache<Key, Value> {
	private evictionPolicy: LRUEvictionPolicy<Key>;
	private storage: HashMapStorage<Key, Value>;

	constructor(evictionPolicy: LRUEvictionPolicy<Key>, storage: HashMapStorage<Key, Value>) {
		this.evictionPolicy = evictionPolicy;
		this.storage = storage;
	}

	// @todo: implement exceptions
	public put(key: Key, value: Value): void {
		try {
			this.storage.add(key, value);
			this.evictionPolicy.keyAccessed(key);
		} catch (e: Error) {
			const evictedKey = this.evictionPolicy.evictKey();
			if (evictedKey === null) {
				throw new Error('Storage is full');
			}
			this.storage.remove(evictedKey);
		}
	}

	public get(key: Key): Value | null {
		try {
			const Value = this.storage.get(key);
			this.evictionPolicy.keyAccessed(key);
			return Value;
		} catch(e: NotFoundException) {
			return null;
		}
	}
}