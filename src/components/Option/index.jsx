export default function Option({ value, text, answerQuestion, question }) {
    return (
        <p
            onClick={() => {
                answerQuestion(value, question);
            }}
        >
            {text}
        </p>
    );
}
