export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  cb: T,
  delay = 3000
) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>): void => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
