export const currentUser = {
  id: '1',
  name: 'Alex Johnson',
  headline: 'Senior Software Engineer at TechCorp',
  location: 'San Francisco, CA',
  avatar: 'https://i.pravatar.cc/150?u=alex',
  banner: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=200&fit=crop',
  connections: 847,
  about:
    'Passionate full-stack developer with 8+ years of experience building scalable web applications. I love mentoring junior developers and contributing to open source.',
  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'TechCorp',
      duration: '2021 - Present',
      location: 'San Francisco, CA',
    },
    {
      title: 'Software Engineer',
      company: 'StartupXYZ',
      duration: '2018 - 2021',
      location: 'Austin, TX',
    },
  ],
  education: [
    {
      school: 'Stanford University',
      degree: 'B.S. Computer Science',
      duration: '2014 - 2018',
    },
  ],
}

export const posts = [
  {
    id: '1',
    author: {
      name: 'Sarah Chen',
      headline: 'Product Manager at Google',
      avatar: 'https://i.pravatar.cc/150?u=sarah',
    },
    content:
      'Excited to share that our team just launched a new feature that improves user engagement by 40%! 🚀 Big shoutout to the engineering team for making this happen in record time.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop',
    likes: 234,
    comments: 45,
    reposts: 12,
    timestamp: '2h',
  },
  {
    id: '2',
    author: {
      name: 'Michael Rodriguez',
      headline: 'UX Designer | Design Systems Advocate',
      avatar: 'https://i.pravatar.cc/150?u=michael',
    },
    content:
      'Design is not just what it looks like and feels like. Design is how it works. Here are 5 principles I follow when building design systems at scale.',
    likes: 189,
    comments: 32,
    reposts: 8,
    timestamp: '4h',
  },
  {
    id: '3',
    author: {
      name: 'Emily Watson',
      headline: 'Data Scientist | ML Engineer',
      avatar: 'https://i.pravatar.cc/150?u=emily',
    },
    content:
      'Just published my latest article on building production-ready ML pipelines. Link in comments! Would love to hear your thoughts on MLOps best practices.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    likes: 412,
    comments: 67,
    reposts: 34,
    timestamp: '6h',
  },
  {
    id: '4',
    author: {
      name: 'David Kim',
      headline: 'Engineering Manager at Meta',
      avatar: 'https://i.pravatar.cc/150?u=david',
    },
    content:
      'Hiring alert! 🎯 We are looking for talented frontend engineers to join our team. Remote-friendly, competitive compensation, and amazing growth opportunities. DM me if interested!',
    likes: 156,
    comments: 28,
    reposts: 45,
    timestamp: '8h',
  },
  {
    id: '5',
    author: {
      name: 'Lisa Thompson',
      headline: 'CEO & Founder at InnovateLab',
      avatar: 'https://i.pravatar.cc/150?u=lisa',
    },
    content:
      'Reflecting on 5 years of building InnovateLab from scratch. The journey has been incredible — grateful for every team member, investor, and customer who believed in our vision.',
    likes: 523,
    comments: 89,
    reposts: 56,
    timestamp: '1d',
  },
]

export const networkConnections = [
  {
    id: '2',
    name: 'Sarah Chen',
    headline: 'Product Manager at Google',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    mutualConnections: 12,
  },
  {
    id: '3',
    name: 'Michael Rodriguez',
    headline: 'UX Designer | Design Systems Advocate',
    avatar: 'https://i.pravatar.cc/150?u=michael',
    mutualConnections: 8,
  },
  {
    id: '4',
    name: 'Emily Watson',
    headline: 'Data Scientist | ML Engineer',
    avatar: 'https://i.pravatar.cc/150?u=emily',
    mutualConnections: 15,
  },
  {
    id: '5',
    name: 'David Kim',
    headline: 'Engineering Manager at Meta',
    avatar: 'https://i.pravatar.cc/150?u=david',
    mutualConnections: 23,
  },
  {
    id: '6',
    name: 'Lisa Thompson',
    headline: 'CEO & Founder at InnovateLab',
    avatar: 'https://i.pravatar.cc/150?u=lisa',
    mutualConnections: 5,
  },
  {
    id: '7',
    name: 'James Wilson',
    headline: 'DevOps Engineer at AWS',
    avatar: 'https://i.pravatar.cc/150?u=james',
    mutualConnections: 19,
  },
  {
    id: '8',
    name: 'Anna Martinez',
    headline: 'Marketing Director at HubSpot',
    avatar: 'https://i.pravatar.cc/150?u=anna',
    mutualConnections: 7,
  },
  {
    id: '9',
    name: 'Robert Lee',
    headline: 'Full Stack Developer at Stripe',
    avatar: 'https://i.pravatar.cc/150?u=robert',
    mutualConnections: 31,
  },
]

export const suggestedConnections = [
  {
    id: '10',
    name: 'Jennifer Park',
    headline: 'Frontend Developer at Netflix',
    avatar: 'https://i.pravatar.cc/150?u=jennifer',
    mutualConnections: 4,
  },
  {
    id: '11',
    name: 'Chris Brown',
    headline: 'Cloud Architect at Microsoft',
    avatar: 'https://i.pravatar.cc/150?u=chris',
    mutualConnections: 9,
  },
  {
    id: '12',
    name: 'Maria Garcia',
    headline: 'HR Business Partner at Salesforce',
    avatar: 'https://i.pravatar.cc/150?u=maria',
    mutualConnections: 2,
  },
]

export const jobs = [
  {
    id: '1',
    title: 'Senior Frontend Engineer',
    company: 'Google',
    location: 'Mountain View, CA',
    type: 'Full-time',
    posted: '2 days ago',
    logo: 'https://logo.clearbit.com/google.com',
    applicants: 142,
  },
  {
    id: '2',
    title: 'React Developer',
    company: 'Meta',
    location: 'Remote',
    type: 'Full-time',
    posted: '1 day ago',
    logo: 'https://logo.clearbit.com/meta.com',
    applicants: 89,
  },
  {
    id: '3',
    title: 'Full Stack Engineer',
    company: 'Stripe',
    location: 'San Francisco, CA',
    type: 'Full-time',
    posted: '3 days ago',
    logo: 'https://logo.clearbit.com/stripe.com',
    applicants: 203,
  },
  {
    id: '4',
    title: 'UI/UX Engineer',
    company: 'Apple',
    location: 'Cupertino, CA',
    type: 'Full-time',
    posted: '5 days ago',
    logo: 'https://logo.clearbit.com/apple.com',
    applicants: 167,
  },
  {
    id: '5',
    title: 'Software Engineer Intern',
    company: 'Amazon',
    location: 'Seattle, WA',
    type: 'Internship',
    posted: '1 week ago',
    logo: 'https://logo.clearbit.com/amazon.com',
    applicants: 456,
  },
  {
    id: '6',
    title: 'Lead Frontend Developer',
    company: 'Netflix',
    location: 'Los Gatos, CA',
    type: 'Full-time',
    posted: '4 days ago',
    logo: 'https://logo.clearbit.com/netflix.com',
    applicants: 78,
  },
]

export const trendingTopics = [
  { id: '1', topic: '#ReactJS', posts: '12,453 posts' },
  { id: '2', topic: '#RemoteWork', posts: '8,921 posts' },
  { id: '3', topic: '#AI', posts: '24,567 posts' },
  { id: '4', topic: '#TechJobs', posts: '5,432 posts' },
  { id: '5', topic: '#StartupLife', posts: '3,876 posts' },
]
