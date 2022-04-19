class StorageFullException extends Error {
	constructor(message: string) {
		super(message);
	}
}

export default StorageFullException;