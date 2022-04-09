module.exports = {
  pattern: '^(main|develop)$|^(bump|feat|config|style|doc|fix|rel(?:ease)?)/.+$',
  errorMsg:
    '🤨 La branche que tu essaies de pusher ne respecte pas nos conventions, tu peux la renommer avec `git branch -m <nom-actuel> <nouveau-nom>`',
  exemple: 'feat/feat-name'
}