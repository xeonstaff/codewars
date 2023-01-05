//extracts the domain name from a URL

function domainName(url) {
  const regex = /(?<=www.|\bhttp:\/\/|\bhttps:\/\/)[\w-]+/g;
  const regex2 = /\b[\w-]+(?=\.)/
  const match = url.match(regex) ? url.match(regex).join(""): url.match(regex2).join("")
  return match.slice(0, 3) == "www" ? match.slice(3) : match;
}
