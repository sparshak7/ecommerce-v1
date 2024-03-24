export const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    }
    catch (error) {
        const message = error.errors[0].message;
        console.log(message);
        const err = {
            message,
            status: 400,
        };
        next(err);
    }
};
