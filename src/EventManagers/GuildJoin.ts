import { Guild } from "discord.js";
import Log from "../Utils/BotLogs/Log";

async function OnGuildJoin(g: Guild) {
	Log(`BotKhana joined new server`, __filename);
	g.client.user.setActivity({ name: `${g.client.guilds.cache.size} servers`, type: "WATCHING" });
}

export default OnGuildJoin;
