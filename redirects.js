module.exports = (current) => ({
  redirects: [
    { from: "/docs", to: `/docs/${current}/` },
    { from: "/docs/help", to: `/docs/${current}/help/` },
    { from: "/docs/installation", to: `/docs/${current}/getting-started/installation/` },

    { from: "/docs/6.x/new-game", to: "/docs/v6/getting-started/new-game/" },
    { from: "/docs/6.x/existing-game", to: "/docs/v6/getting-started/existing-game/" },

    { from: "/docs/0.5.x/guide/new-game", to: "/docs/v0.5/getting-started/new-game/" },
    { from: "/docs/0.5.x/guide/existing-game", to: "/docs/v0.5/getting-started/existing-game/" },
  ],
  createRedirects: (existing) => {
    if (existing.startsWith("/docs/v6/")) {
      return existing.replace("/docs/v6/", "/docs/6.x/")
    }

    if (existing.startsWith("/docs/v0.5/")) {
      return existing.replace("/docs/v0.5/", "/docs/0.5.x/")
    }
  }
});