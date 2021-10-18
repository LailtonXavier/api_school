class PhotoController {
  // store pq vamos receber um POST
  async store(req, res) {
    res.json(req.file);
  }
}

export default new PhotoController();
