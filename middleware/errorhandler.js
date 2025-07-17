const {
    VALIDATION_ERROR,
    UNAUTHORIZED,
    FORBIDDEN,
    NOT_FOUND,
    SERVER_ERROR
} = require("../constant")

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : SERVER_ERROR;

    switch (statusCode) {
        case VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case SERVER_ERROR:
        default:
            res.status(SERVER_ERROR).json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
    }
};

module.exports = errorHandler;
