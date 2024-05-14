export const CallGPT = async () => {
    console.log(">>CallGPT");
    
    // const response = await fetch("https://api.openai.com/v1/chat/completions", { // 이 부분에서 객체를 전달해야 하므로 괄호 추가
    //     method: "POST", // 콤마 추가
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": `Bearer ${import.meta.env.VITE_GPT_API_KEY}`,
    //     },
    //     body: JSON.stringify({
    //         model: "gpt-3.5-turbo",
    //         messages: [{role: "user", content: "Say this is a test!"}],
    //         temperature: 0.7,
    //         max_tokens: 1000, // 밑줄 제거
    //     }), // 콤마 추가
    // }); // 괄호 추가
    // const responseData = await response.json();
    // console.log(">>responseData", responseData);


    return responseData;
};
