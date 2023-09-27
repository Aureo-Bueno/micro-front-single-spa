export function emitEvent(name: string, data: CustomEventInit<any>) {
  dispatchEvent(new CustomEvent(name, { detail: data }));
}

export function listenEvent(
  name: string,
  cb: EventListenerOrEventListenerObject
) {
  window.addEventListener(name, cb);
}
