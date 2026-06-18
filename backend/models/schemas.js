const experienceSchema = {
  title: { type: String, default: '' },
  company: { type: String, default: '' },
  duration: { type: String, default: '' },
  location: { type: String, default: '' },
}

const educationSchema = {
  school: { type: String, default: '' },
  degree: { type: String, default: '' },
  duration: { type: String, default: '' },
}

export { experienceSchema, educationSchema }
