module.exports = function (app, express) {
    var apiRoutes = express.Router();
    apiRoutes.get('/test', function (req, res) {
        res.json({
            data: 'Hello from /api/v1/test'
        });
    });

    app.use('/api/v1', apiRoutes);
};