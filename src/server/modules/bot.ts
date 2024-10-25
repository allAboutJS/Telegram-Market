import axios from "axios";

export default class TelegramMarketBot {
	static #telegramBaseUrl = `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}`;

	static async setWebhook(): Promise<void> {
		try {
			await axios.post(
				TelegramMarketBot.#telegramBaseUrl + "/setWebhook",
				{ url: `${process.env.SERVER_DOMAIN}/telegram-webhook` },
			);
		} catch (error) {
			console.log("Webhook URL setup error: ", error);

			// Kill the process if setup fails
			process.exit();
		}
	}

	static async setCommands(): Promise<void> {
		try {
			// TODO: Remove this type
			type Command = {
				command: string;
				description: string;
			};

			const commands: Command[] = [];

			await axios.post(
				TelegramMarketBot.#telegramBaseUrl + "/setMyCommands",
				commands,
			);
		} catch (error) {
			console.log("Commands setup error: ", error);

			// Kill the process if commands setup fails
			process.exit();
		}
	}
}
