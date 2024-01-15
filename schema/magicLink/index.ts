import * as z from "zod";
import errors from "@/consts/errors";

const schema = z.object({
  email: z.string().email({ message: errors.auth.email.default }),
});

export default schema;
