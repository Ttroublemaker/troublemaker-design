import { RefObject, useEffect } from "react";

function useClickOutside(ref: RefObject<HTMLElement>, handler: Function) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      // 类型“EventTarget | null”的参数不能赋给类型“Node | null”的参数。
      // Type 'EventTarget' is missing the following properties from type 'Node': baseURI, childNodes, firstChild, isConnected, and 44 more.
      // if (!ref.current || ref.current.contains(event.target)) {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return
      }
      handler()
    }
    document.addEventListener('click', listener)
    return () => {
      document.removeEventListener('click', listener)
    }
  }, [ref, handler])
}

export default useClickOutside