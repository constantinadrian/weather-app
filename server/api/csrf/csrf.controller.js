const csrfRequest = (req, res, next) => {
    res.json({ csrfToken: req.csrfToken() })
}

module.exports = csrfRequest;
