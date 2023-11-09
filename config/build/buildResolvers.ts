import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(optons: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [optons.paths.src, "node_modules"],
    alias: {},
    mainFiles: ["index"],
  };
}
