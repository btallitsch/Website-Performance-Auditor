export async function runAudit(url: string) {
  // Mocked Lighthouse-style data
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        performance: Math.floor(Math.random() * 40) + 60,
        accessibility: [
          'Missing alt attributes on images',
          'Low color contrast detected'
        ],
        seo: [
          'Missing meta description',
          'Page title length is optimal'
        ],
        suggestions: [
          'Enable text compression',
          'Use responsive images',
          'Reduce unused JavaScript'
        ]
      })
    }, 800)
  })
}