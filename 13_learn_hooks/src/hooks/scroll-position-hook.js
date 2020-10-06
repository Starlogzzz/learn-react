import {useEffect,useState} from "react"

function useScrollPosition() {
  const [scroll, setScroll] = useState(0);
  
  useEffect(()=>{
    function ScrollChange() {
      setScroll(window.scrollY)
    }
    document.addEventListener("scroll", ScrollChange)
    return ()=> {
      document.removeEventListener("scroll", ScrollChange)
    }
  }, [])

  return scroll
}

export default useScrollPosition;