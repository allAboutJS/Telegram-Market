import type { Request, Response } from "express";
import User from "../models/user.js";
import type { RegistrationDetails } from "../../../types.js";
import Logger from "../modules/logger.js";

export class UserApiController {
	/**
	 * @description HTTP handler for users registration
	 */
	static async handleRegistration(
		req: Request,
		res: Response,
	): Promise<void> {
		if (!req.body)
			return void res.status(400).send("No body found in request");

		const { name, phoneNumber, role, telegramId, theme, username } =
			req.body as RegistrationDetails;

		if (
			!name ||
			!phoneNumber ||
			!role ||
			!telegramId ||
			!theme ||
			!username
		)
			return void res
				.status(400)
				.send("Missing property in request body");

		try {
			if (await User.exists({ telegramId }))
				return void res.sendStatus(409);

			await User.create(req.body);
			res.sendStatus(201);
		} catch (error) {
			process.env.NODE_ENV === "production"
				? Logger.log("User creation error", "error", error)
				: console.log("User creation error:", error);
		}
	}
}
