export type RegistrationDetails = {
	telegramId: string;
	name: string;
	username: string;
	phoneNumber: string;
	role: "buyer" | "seller";
	theme: "light" | "dark";
};
