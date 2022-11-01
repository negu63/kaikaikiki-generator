import Head from "next/head";
import Center from "../component/Center";
import Kaikaikiki from "../component/Kaikaikiki";
import Margin from "../component/Margin";
import TextButton from "../component/TextButton";
import CheckBoxWrapper from "../component/CheckBoxWrapper";
import GenerateButton from "../component/GenerateButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaikai Kiki Generator</title>
        <meta name="description" content="Kaikai kiki Generator" />
        <link rel="icon" href="/kaikaikiki-basic.svg" />
      </Head>

      <Center>
        <div>
          <Margin bottom={4}>
            <Kaikaikiki />
          </Margin>
          <Margin bottom={1}>
            <CheckBoxWrapper />
          </Margin>
          <Margin bottom={1}>
            <GenerateButton />
          </Margin>
          <TextButton label="Export" onClick={() => {}} />
        </div>
      </Center>
    </>
  );
}
