module.exports = {
  list: [
    "test",
    "feat",
    "fix",
    "chore",
    "docs",
    "refactor",
    "npm",
    "ci",
    "perf",
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    "type",
    "scope",
    "subject",
  ],
  scopes: [],
  types: {
    chore: {
      description: "修改核心",
      emoji: "🤖",
      value: "chore",
    },
    ci: {
      description: "修改CI",
      emoji: "🎡",
      value: "ci",
    },
    docs: {
      description: "修改了文档",
      emoji: "✏️",
      value: "docs",
    },
    feat: {
      description: "添加了新功能",
      emoji: "🎸",
      value: "feat",
    },
    fix: {
      description: "修复BUG",
      emoji: "🐛",
      value: "fix",
    },
    perf: {
      description: "提高体验",
      emoji: "⚡️",
      value: "perf",
    },
    refactor: {
      description: "重构代码",
      emoji: "💡",
      value: "refactor",
    },
    release: {
      description: "更新版本",
      emoji: "🏹",
      value: "release",
    },
    npm: {
      description: "发布了新的NPM版本",
      emoji: "🎯",
      value: "npm",
    },
    test: {
      description: "添加测试",
      emoji: "💍",
      value: "test",
    },
  },
};
