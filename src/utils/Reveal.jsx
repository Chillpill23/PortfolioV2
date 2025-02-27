import {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from 'framer-motion'

export const Reveal = ({children, width="fit-content", padding, height, gridColumn, gridRow}) => {

  const ref = useRef(null);
  const isInview = useInView(ref, { once: true })

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if(isInview){
      mainControls.start("visible")
      slideControls.start("visible")
    }
  },[isInview])

  return (
    <div ref={ref}  style={{ position: "relative", width, overflow:"hidden", height, gridColumn, gridRow}}>
      <motion.div
        variants={{
          hidden: {opacity: 0, y:75},
          visible: {opacity: 1, y:0, padding: padding},
        }}
        initial='hidden'
        animate={mainControls}
        transition={{
          duration: 0.5, 
          delay: 0.25,
          ease: "easeInOut", 
        }}
      >{children}
      </motion.div>
      <motion.div
        variants={{
          hidden: {left:0},
          visible: {left:"100%"}
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top:4,
          bottom:4,
          left:0,
          right:0,
          background: "var(--clr-primarydark)",
          zIndex: 20,
        }}
      />
    </div>
  )
}