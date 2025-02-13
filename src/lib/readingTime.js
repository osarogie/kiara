function ansiWordBound(c) {
  return ' ' === c || '\n' === c || '\r' === c || '\t' === c
}

export function readingTime(text, options) {
  var words = 0,
    start = 0,
    end = text.length - 1,
    wordBound,
    i

  options = options || {}

  // use default values if necessary
  options.wordsPerMinute = options.wordsPerMinute || 200

  // use provided function if available
  wordBound = options.wordBound || ansiWordBound

  // fetch bounds
  while (wordBound(text[start])) start++
  while (wordBound(text[end])) end--

  // calculate the number of words
  for (i = start; i <= end; ) {
    for (; i <= end && !wordBound(text[i]); i++);
    words++
    for (; i <= end && wordBound(text[i]); i++);
  }

  // reading time stats
  var minutes = words / options.wordsPerMinute
  var time = minutes * 60 * 1000
  var displayed = Math.ceil(minutes.toFixed(2))

  return {
    text: displayed + ' min read',
    minutes: minutes,
    time: time,
    words: words
  }
}
