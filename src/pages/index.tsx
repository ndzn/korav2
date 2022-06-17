import dedent from 'dedent';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

export const getServerSideProps = () => {
  const quotes = ["Badass quote", "o.O", ":P", "oWo", "O.O", ":eyes:", "your dreams are no match for my memes", "one step at a time"]
  return {
    props: {
      quote: quotes[Math.floor(Math.random() * quotes.length)],
    },
  };
}

const Home: React.FC<{quote: string}> = ({quote}) => {
  return (
    <div className="container p-2 px-4 flex min-h-screen">
      <main className='font-mono text-xs code text-white whitespace-pre'>
        <h1 className="mb-10">
          {dedent(`​
                 .+%@-
                -@@@.                 @@=   .#@#:
               =@@@*                  @@+  +@%-   .=+*+=:   -=-:++  :=+*+- 
               @@@@#                  @@+=@@=    *@%=:-%@#  #@@#=- #@#-:#@%
              .@@@@@=                 @@@@@%:   -@@:   .@@+ #@%    .-++*%@@
               #@@@@@#:         -*    @@* -@@*  -@@-   :@@= #@#   .@@*:.+@@
               .%@@@@@@%*=---=*@%.    @@+  .#@@- +@@+=+@@*  #@#   :@@*=+%@@
                 +@@@@@@@@@@@@@+      --.    ---.  :===-    :-:    .-==-.--
                   -*%@@@@@%*-`)}
        </h1>
        hi@kora.gg
        <h1>
          "{quote}"
        </h1>
      </main>
    </div>
  )
}

export default Home;