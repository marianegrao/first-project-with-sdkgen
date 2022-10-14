import { SdkgenHttpServer } from "@sdkgen/node-runtime";
import { api } from "./api";

api.fn.getPost = async (ctx, { id }) => {
	return {
		id,
		title: "Primeira postagem",
		author: {
			name: "John Doe",
		},
		body: "Lorem ipsum",
		createdAt: new Date(),
	};
};

const server = new SdkgenHttpServer(api, {});
server.listen(8000);
