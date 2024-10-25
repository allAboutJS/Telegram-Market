export default class Logger {
	static async log(
		title: string,
		type: "error" | "warning" | "info",
		error: never | unknown,
	): Promise<void> {}
}
