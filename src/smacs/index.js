import makeDb from "../db";
import makeSmacList from "./smac-list";
import makeSmacsEndpointHandler from "./smacs-endpoint";

const database = makeDb();
const smacList = makeSmacList({ database });
const smacsEndpointHandler = makeSmacsEndpointHandler({ smacList });

export default smacsEndpointHandler;
