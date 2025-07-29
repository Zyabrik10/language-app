import axios from "axios";
import asyncWrapper from "./asyncWrapper.utils";
import { vars } from "../globalVariables";

export const translate = asyncWrapper(async function (expression) {
    const res = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${vars.lang}&tl=uk&dt=t&q=${expression}`);
    return res.data[0][0][0];
});