import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const PC = () => {
  return (
    <div className="max-w-screen hidden h-screen max-h-screen w-screen bg-black lg:block">
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
            fontSize: ['6rem', '6rem', '4rem', '4rem'],
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
          className="grid grid-cols-8 rounded-lg shadow-xl"
          animate={{
            width: ['100%', '100%', '100%', '75%'],
            height: ['100%', '100%', '75%', '75%'],
            backgroundColor: ['#000000', '#000000', '#000000', '#404040'],
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
            className="grid-span-1 grid w-14 place-items-center border-r border-white border-opacity-25 px-2"
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
              {[
                {
                  href: 'https://dc.r07.dev/',
                  color: '#5865F2',
                  icon: 'fa6-brands:discord',
                },
                {
                  href: 'https://r07.dev/l/youtube',
                  color: '#ff0000',
                  icon: 'fa6-brands:youtube',
                },
                {
                  href: 'https://r07.dev/l/twitch',
                  color: '#9146FF',
                  icon: 'fa6-brands:twitch',
                },
              ].map((l, i) => {
                return (
                  <motion.a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10"
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
          <div id="main" className="col-span-7 p-2">
            <motion.p
              animate={{ y: [50, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: [0.5, 0, 0.5, 1],
                delay: 3.25,
              }}
              className="font-redi text-3xl font-black uppercase"
            >
              RedCrafter07
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div>
      <PC></PC>
    </div>
  );
};

export default Home;
