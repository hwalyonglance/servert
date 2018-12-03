export interface IDBConfig {
	Env: {
		DEV: { [key: string]: IDBConnection };
		PROD: { [key: string]: IDBConnection };
	}
}

export interface IDBConnection {
	driver: string;
	host: string;
	name: string;
	password: string;
	port: number;
	username: string;
	prefix?: string;
	unixSocket?: string;
	charset?: string;
	collation?: string;
	strict?: boolean;
	engine?: string | null;
}
