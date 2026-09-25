export const codingJourneyData = {
  section: {
    eyebrow: 'GITHUB & LEETCODE',
    title: 'My',
    highlightedTitle: 'Coding Journey',
    description: 'Building projects on GitHub and solving complex algorithmic challenges on LeetCode.',
  },
  github: {
    username: 'Jayhind-Yadav592',
    handle: '@Jayhind-Yadav592',
    name: 'Jayhind Yadav',
    role: 'Full Stack Python Developer',
    profileUrl: 'https://github.com/Jayhind-Yadav592',
    stats: [
      { label: 'Repositories', value: '20+', detail: 'Public projects & tools' },
      { label: 'Contributions', value: '500+', detail: 'Version controlled commits' },
      { label: 'Pull Requests', value: '50+', detail: 'Merged & reviewed' },
      { label: 'Code Quality', value: 'A+', detail: 'Clean architecture' },
    ],
    topRepositories: [
      {
        name: 'FullStack-Python-Backend',
        description: 'Scalable REST API architectures with Django, DRF, PostgreSQL, and Celery asynchronous tasks.',
        language: 'Python',
        techStack: 'Django · DRF · PostgreSQL',
        stars: 12,
        forks: 4,
        url: 'https://github.com/Jayhind-Yadav592',
      },
    ],
  },
  leetcode: {
    username: 'Jayhind592',
    handle: '@Jayhind592',
    name: 'Jayhind Yadav',
    role: 'Problem Solving & DSA',
    profileUrl: 'https://leetcode.com/u/Jayhind592/',
    stats: [
      { label: 'Problems Solved', value: '250+', detail: 'DSA & Algorithms' },
      { label: 'Acceptance Rate', value: '78%+', detail: 'High accuracy' },
      { label: 'Languages', value: 'Python, JS', detail: 'Core implementations' },
      { label: 'Active Streak', value: 'Consistent', detail: 'Daily problem solving' },
    ],
    recentActivity: [
      {
        id: 1,
        title: 'Two Sum',
        difficulty: 'Easy',
        category: 'Array & Hash Table',
        timeAgo: 'Solved',
        url: 'https://leetcode.com/problems/two-sum/',
      },
      {
        id: 2,
        title: 'Maximum Subarray',
        difficulty: 'Medium',
        category: 'Dynamic Programming',
        timeAgo: 'Solved',
        url: 'https://leetcode.com/problems/maximum-subarray/',
      },
    ],
  },
}

// Backward compatibility export if needed
export const githubData = codingJourneyData.github
