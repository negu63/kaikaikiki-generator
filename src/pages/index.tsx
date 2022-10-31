import Head from "next/head";
import Center from "../component/Center";
import CheckBox from "../component/CheckBox";
import Kaikaikiki from "../component/Kaikaikiki";
import Margin from "../component/Margin";
import TextButton from "../component/TextButton";

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
            <CheckBox label="leaves" />
          </Margin>
          <Margin bottom={1}>
            <TextButton label="Generate" onClick={() => {}} />
          </Margin>
          <TextButton label="Export" onClick={() => {}} />
        </div>
      </Center>
    </>
  );
}
