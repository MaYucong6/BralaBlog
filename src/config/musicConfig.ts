import type { MusicPlayerConfig } from "../types/musicConfig";

export const musicPlayerConfig: MusicPlayerConfig = {
	showInNavbar: true,
	showInSidebar: true,
	mode: "local",
	autoPlay: true,
	volume: 0.35,
	playMode: "one",
	showLyrics: false,
	meting: {
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		server: "netease",
		type: "playlist",
		id: "3778678",
		auth: "",
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},
	local: {
		playlist: [
			{
				name: "使一颗心免于哀伤（哼唱）",
				artist: "纯音乐",
				url: "/assets/music/使一颗心免于哀伤-哼唱.mp3",
				cover: "/assets/images/custom/cover-sea.jpg",
			},
		],
	},
};
