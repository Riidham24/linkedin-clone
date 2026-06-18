import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { experienceSchema, educationSchema } from './schemas.js'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false,
    },
    headline: {
      type: String,
      default: '',
      maxlength: [220, 'Headline cannot exceed 220 characters'],
    },
    location: {
      type: String,
      default: '',
      maxlength: [100, 'Location cannot exceed 100 characters'],
    },
    avatar: {
      type: String,
      default: '',
    },
    banner: {
      type: String,
      default: '',
    },
    about: {
      type: String,
      default: '',
      maxlength: [2600, 'About cannot exceed 2600 characters'],
    },
    experience: [experienceSchema],
    education: [educationSchema],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform(_doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
        delete ret.password
        return ret
      },
    },
  }
)

userSchema.pre('save', async function hashPassword() {
  if (!this.isModified('password')) return

  this.password = await bcrypt.hash(this.password, 12)
})

userSchema.methods.comparePassword = async function comparePassword(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password)
}

userSchema.methods.toPublicProfile = function toPublicProfile() {
  return {
    id: this._id,
    name: this.name,
    email: this.email,
    headline: this.headline,
    location: this.location,
    avatar: this.avatar,
    banner: this.banner,
    about: this.about,
    experience: this.experience,
    education: this.education,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  }
}

const User = mongoose.model('User', userSchema)

export default User
