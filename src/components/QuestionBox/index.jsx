import { Box } from "./style";
import Option from "../Option";
import { useEffect } from "react";

export default function QuestionBox({
    title,
    options,
    enunciate,
    answerQuestion,
    answered,
}) {
    function sortFunction(array) {
        array.sort(function () {
            return 0.5 - Math.random();
        });
    }
    console.log(answered, enunciate);
    console.log(answered.find((answer) => answer === enunciate));

    useEffect(() => {
        sortFunction(options);
    }, []);

    return (
        <Box>
            <h1>{title}</h1>
            <p>{enunciate}</p>
            <div>
                {options.map((option) => {
                    return (
                        <Option
                            disabled={answered.find((answer) => {
                                answer === enunciate;
                            })}
                            question={enunciate}
                            value={option.status}
                            text={option.option}
                            answerQuestion={answerQuestion}
                        />
                    );
                })}
            </div>
        </Box>
    );
}
