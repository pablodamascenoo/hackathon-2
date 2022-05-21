import { Box } from "./style";

export default function QuestionBox({ title, options, enunciate }) {
    console.log(options);

    return (
        <Box>
            <h1>{title}</h1>
            <p>{enunciate}</p>
            <div>
                {options.map((option) => {
                    return <p>{option.option}</p>;
                })}
            </div>
        </Box>
    );
}
