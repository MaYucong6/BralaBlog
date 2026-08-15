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
				name: "正义之道",
				artist: "黄渤",
				url: "/assets/music/正义之道.mp3",
				cover: "/assets/images/custom/cover-heart.jpg",
			},
		],
	},
};
