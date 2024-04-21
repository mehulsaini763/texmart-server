// to avoid duplicacy and increase productivity
// to make codebase more standerdised

const asyncHandler = (requestHandler) => (req, res, next) => {
  Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
};

// TRY CATCH APPROACH

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

export { asyncHandler };
