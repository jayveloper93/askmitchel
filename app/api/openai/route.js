import { NextResponse } from "next/server";
import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(request) {
    const {prompt} = await request.json()

    // return NextResponse.json({text: question }, {status: 200})
    // return

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}`,
    });

    return NextResponse.json({text: `${completion.data.choices[0].text}` }, {status: 200})
}