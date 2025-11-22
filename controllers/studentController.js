exports.getStudentInfo = (req, res) => {
  res.json({
    firstname: "Jhon Chester",
    middle_initial: "M.",
    lastname: "Guijoba",
    class_section: "BSIT-BA-4101",
    quote: "Believe you can and you’re halfway there. – Theodore Roosevelt"
  });
};