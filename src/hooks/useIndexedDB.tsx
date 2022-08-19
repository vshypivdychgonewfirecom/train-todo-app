import { useEffect, useState } from 'react';

export interface IUser {
	username: string;
	password: string;
}

const useIndexedDB = (collection: string) => {
	const [db, setDb] = useState<IDBDatabase>();

	const readData = async () => {
		const transaction = db!.transaction([collection], 'readonly');
		const objStore = transaction.objectStore(collection);
		const connection = objStore.openCursor();
		const users: IUser[] = [];
		return new Promise<IUser[]>((resolve) => {
			connection.onsuccess = (e) => {
				const cursor = (e.target as any).result;
				if (!cursor) {
					return resolve(users);
				}
				users.push(cursor.value);
				cursor.continue();
			};
		});
	};

	const getItem = (email: string) => {
		const transaction = db!.transaction([collection], 'readonly');
		const objStore = transaction.objectStore(collection);
		const connection = objStore.get(email);

		return new Promise<IUser>((resolve) => {
			connection.onsuccess = (e) => {
				resolve(connection.result);
			};
		});
	};

	const addData = async (data: IUser) => {
		const transaction = db!.transaction([collection], 'readwrite');
		const usersCollection = transaction.objectStore(collection);
		const connection = usersCollection.add(data);
		connection.onerror = (err) => {
			console.log({ err });
		};
	};

	useEffect(() => {
		const indexedDB = window.indexedDB;
		const request = indexedDB.open('train-todo-db', 1);
		request.onsuccess = () => {
			setDb(request.result);
		};
		request.onupgradeneeded = (e) => {
			setDb((e.target as any).result);
			(e.target as any).result.createObjectStore(collection, {
				keyPath: 'username'
			});
		};
		request.onerror = (err) => {
			console.log('Error', err);
		};
	}, []);

	return { readData, addData, getItem, db };
};

export default useIndexedDB;
