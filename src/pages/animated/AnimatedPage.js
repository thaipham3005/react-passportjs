import {motion} from 'framer-motion'
import { pageAnimation } from '../../utils/animations'

const AnimatedPage = ({children, props}) => {
    return (
        <motion.div variants={pageAnimation} initial='init'
        animate='start' exit='end' {...props}>
            {children}
        </motion.div>
    )
}

export default AnimatedPage
