
import { motion } from 'framer-motion'

export const randomInt = (min, max) => {
    let power = Math.round(max / 10)
    let result = Math.round(Math.random() * power * 10)
    if (result < min || result > max) {
        result = randomInt(min, max)
    }
    return result
}

const generateParagraphs = () => randomInt(5, 20)
const generateWords = () => randomInt(20, 100)

const paragraphs = [...Array(3)].map(() => {
    return [...Array(generateParagraphs())].map(generateWords);
});

export const Word = ({ width }) => <div className="word" style={{ width }} />;

const Paragraph = ({ words }) => (
    <div className="paragraph">
        {words.map(width => (
            <Word width={width} />
        ))}
    </div>
);

const SkeletonLoader = () => {
    return (
        <motion.div
            variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
            transition={{ duration: 0.8 }}
            className="content-placeholder"
        >
            {paragraphs.map(words => (
                <Paragraph words={words} />
            ))}
        </motion.div>
    )
}

export default SkeletonLoader