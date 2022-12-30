function alphanumeric(string) {
  regexp = /^[a-zA-Z0-9]+$/;
  return string.match(regexp) ? true : false;
}
