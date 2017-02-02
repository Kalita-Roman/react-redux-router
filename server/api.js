export default function(app) {
  app.get('/a', function(req, res) {
    res.send('todos');
  });
}