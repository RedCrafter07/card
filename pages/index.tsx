import { Icon } from '@iconify/react';
import { motion, TargetAndTransition } from 'framer-motion';

const socials = [
  {
    href: 'https://dc.r07.dev/',
    color: '#5865F2',
    icon: 'fa6-brands:discord',
  },
  {
    href: 'https://yt.r07.dev',
    color: '#ff0000',
    icon: 'fa6-brands:youtube',
  },
  {
    href: 'https://twitch.r07.dev',
    color: '#9146FF',
    icon: 'fa6-brands:twitch',
  },
  {
    href: 'https://gh.r07.dev',
    color: '#9146FF',
    icon: 'fa6-brands:github',
  },
];

const textContainer: Record<string, TargetAndTransition> = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 3.25,
    },
  },
};

const textItem: Record<string, TargetAndTransition> = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.5, 0, 0.5, 1],
    },
  },
};

const textContainerProps = {
  variants: textContainer,
  initial: 'hidden',
  animate: 'show',
};

const textItemProps = {
  variants: textItem,
};

const Site = () => {
  return (
    <div className="max-w-screen h-screen min-h-screen w-screen bg-black">
      <motion.div
        animate={{
          zIndex: [0, 0, 0, -100],
        }}
        transition={{
          duration: 2,
          delay: 2,
        }}
        className="absolute grid h-screen w-screen place-items-center"
      >
        <motion.p
          className="font-redi font-black uppercase text-white"
          animate={{
            opacity: [1, 1, 1, 0],
            fontSize: ['3rem', '3rem', '2rem', '2rem'],
            y: [0, 0, 0, 400],
          }}
          transition={{
            duration: 1.5,
            ease: [0.5, 0, 0.5, 1],
          }}
        >
          RedCrafter07
        </motion.p>
      </motion.div>
      <div className="background max-w-screen grid h-screen max-h-screen w-screen place-items-center bg-neutral-800 px-2 text-white">
        <motion.div
          className="grid grid-cols-12 rounded-lg p-6 shadow-xl"
          animate={{
            backgroundColor: ['#000000', '#404040'],
            width: ['100%', '100%', '100%', '75%'],
            borderRadius: ['0', '0', '0.5rem'],
          }}
          transition={{
            ease: [0.5, 0, 0.5, 1],
            duration: 1,
            delay: 1,
          }}
        >
          <motion.div
            id="sidebar"
            className="lg:grid-span-1 hidden w-16 place-items-center border-r border-white/25 px-2 lg:grid"
            animate={{
              x: [-54, -27, -27, 0],
              height: ['0%', '25%', '100%', '100%'],
            }}
            transition={{
              duration: 1,
              ease: [0.5, 0, 0.5, 1],
              delay: 2,
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 3,
                duration: 0.25,
                ease: [0.5, 0, 0.5, 1],
              }}
            >
              {socials.map((l, i) => {
                return (
                  <motion.a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10"
                    key={`socials ${i}`}
                  >
                    <Icon
                      icon={l.icon}
                      className={`my-6 h-10 w-10 hover:text-[${l.color}] transition-colors duration-200`}
                    />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
          <motion.div
            id="main"
            className="container col-span-12 mx-auto p-2 lg:col-span-10"
            {...textContainerProps}
          >
            <motion.p
              {...textItemProps}
              className="font-redi text-3xl font-black uppercase"
            >
              RedCrafter07
            </motion.p>
            <motion.p {...textItemProps}>
              Hi. I&apos;m RedCrafter07, a developer from Germany.
            </motion.p>
            <motion.p
              {...textItemProps}
              className="font-redi my-6 text-xl font-black uppercase"
            >
              Skills
            </motion.p>
            <motion.div
              className="my-4 h-6 w-full rounded-md bg-neutral-800"
              {...textItemProps}
            >
              <motion.div
                className="h-full w-full rounded-md bg-orange-500 px-2 text-center"
                transition={{
                  duration: 0.5,
                  ease: [0.5, 0, 0.5, 1],
                  delay: 3.6,
                }}
                animate={{
                  width: ['0%', '100%'],
                  padding: ['0 0', '0 0.5rem'],
                }}
              >
                HTML (100%)
              </motion.div>
            </motion.div>
            <motion.div
              className="my-4 h-6 w-full rounded-md bg-neutral-800"
              animate={{ y: [50, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.3,
                ease: [0.5, 0, 0.5, 1],
                delay: 3.45,
              }}
            >
              <motion.div
                className="h-full rounded-md bg-blue-500 px-2 text-center"
                transition={{
                  duration: 0.5,
                  ease: [0.5, 0, 0.5, 1],
                  delay: 3.65,
                }}
                animate={{
                  width: ['0%', '66%'],
                  padding: ['0 0', '0 0.5rem'],
                }}
              >
                CSS (~66%)
              </motion.div>
            </motion.div>
            <motion.div
              className="my-4 h-6 w-full rounded-md bg-neutral-800"
              animate={{ y: [50, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.3,
                ease: [0.5, 0, 0.5, 1],
                delay: 3.5,
              }}
            >
              <motion.div
                className="h-full rounded-md bg-yellow-500 px-2 text-center"
                transition={{
                  duration: 0.5,
                  ease: [0.5, 0, 0.5, 1],
                  delay: 3.7,
                }}
                animate={{
                  width: ['0%', '75%'],
                  padding: ['0 0', '0 0.5rem'],
                }}
              >
                JS/TS (~75%)
              </motion.div>
            </motion.div>
            <motion.div
              className="my-4 h-6 w-full rounded-md bg-neutral-800"
              animate={{ y: [50, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.3,
                ease: [0.5, 0, 0.5, 1],
                delay: 3.55,
              }}
            >
              <motion.div
                className="h-full rounded-md bg-red-500 px-2 text-center"
                transition={{
                  duration: 0.5,
                  ease: [0.5, 0, 0.5, 1],
                  delay: 3.7,
                }}
                animate={{
                  width: ['0%', '5%'],
                  padding: ['0 0', '0 0.5rem'],
                }}
              >
                Java (~5%)
              </motion.div>
            </motion.div>
            <motion.p
              className="font-redi my-6 text-xl font-black uppercase"
              {...textItemProps}
            >
              Coding Gear
            </motion.p>
            <motion.p
              animate={{ y: [50, 0], opacity: [0, 1] }}
              {...textItemProps}
            >
              Coding Program:{' '}
              <a
                href="https://code.visualstudio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visual Studio Code
              </a>
            </motion.p>
            <motion.p {...textItemProps}>
              VS Code Theme:{' '}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=RedCrafter07.red-theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                RedCrafter07 Theme
              </a>
            </motion.p>
            <motion.p {...textItemProps}>
              Favorite Framework:{' '}
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              {' with '}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                NextJS
              </a>
            </motion.p>
            <motion.p {...textItemProps}>
              Favorite Programming Language:{' '}
              <a
                href="https://typescriptlang.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Typescript
              </a>
            </motion.p>

            <motion.p
              className="font-redi my-6 text-xl font-black uppercase"
              {...textItemProps}
            >
              Worth to check out
            </motion.p>

            <p>
              <motion.a
                {...textItemProps}
                href="https://redcrafter07.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                My main website (german)
              </motion.a>
            </p>
            <p>
              <motion.a
                {...textItemProps}
                href="https://github.com/RedCrafter07"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Github
              </motion.a>
            </p>
            <p>
              <motion.a
                {...textItemProps}
                href="https://github.com/RedCrafter07/card"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site source code
              </motion.a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <title>RedCrafter07</title>
      <Site></Site>
    </div>
  );
};

export default Home;
