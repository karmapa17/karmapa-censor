export default function censor(str) {
  return (str || '').replace(/./g, '*');
}
