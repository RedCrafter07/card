import { Icon } from '@iconify/react';

const socials = [
  { href: 'https://dc.r07.dev/', color: '#5865F2', icon: 'fa6-brands:discord' },
  { href: 'https://yt.r07.dev', color: '#ff0000', icon: 'fa6-brands:youtube' },
  {
    href: 'https://twitch.r07.dev',
    color: '#9146FF',
    icon: 'fa6-brands:twitch',
  },
  { href: 'https://gh.r07.dev', color: '#9146FF', icon: 'fa6-brands:github' },
];

const skills = [
  { label: 'HTML (100%)', value: '100%', color: 'bg-orange-500' },
  { label: 'CSS (~66%)', value: '66%', color: 'bg-blue-500' },
  { label: 'JS/TS (~75%)', value: '75%', color: 'bg-yellow-500' },
  { label: 'Rust (~15%)', value: '15%', color: 'bg-red-500' },
];

const Site = () => {
  return (
    <div className="max-w-screen min-h-screen w-screen bg-black">
      <div className="background max-w-screen grid min-h-screen w-screen place-items-center bg-neutral-800 px-2 text-white">
        <div className="flex w-full h-max max-w-5xl rounded-lg bg-neutral-900 p-6 shadow-xl">
          <div
            id="sidebar"
            className="lg:grid-span-1 hidden w-16 place-items-center px-2 lg:grid"
          >
            <div>
              {socials.map((l, i) => (
                <a
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
                </a>
              ))}
            </div>
          </div>

          <div id="main" className="container mx-auto p-2 flex-1">
            <p className="font-redi text-3xl font-black uppercase">
              RedCrafter07
            </p>
            <p>
              Hi. I&apos;m RedCrafter07, a developer from Poland based in
              Germany.
            </p>

            <p className="font-redi my-6 text-xl font-black uppercase">
              Skills
            </p>
            <div className="mt-2 space-y-3">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="h-6 w-full rounded-md bg-neutral-800"
                >
                  <div
                    className={`h-full rounded-md px-2 text-center ${skill.color}`}
                    style={{ width: skill.value }}
                  >
                    {skill.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="font-redi my-6 text-xl font-black uppercase">
              Coding Gear
            </p>
            <p>
              Coding Program:{' '}
              <a
                href="https://code.visualstudio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visual Studio Code
              </a>
            </p>
            <p>
              VS Code Theme:{' '}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=RedCrafter07.red-theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                RedCrafter07 Theme
              </a>
            </p>
            <p>
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
            </p>
            <p>
              Favorite Programming Language:{' '}
              <a
                href="https://typescriptlang.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Typescript
              </a>
            </p>

            <p className="font-redi my-6 text-xl font-black uppercase">
              Worth to check out
            </p>
            <p>
              <a
                href="https://redcrafter07.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                My main website (german)
              </a>
            </p>
            <p>
              <a
                href="https://github.com/RedCrafter07"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Github
              </a>
            </p>
            <p>
              <a
                href="https://github.com/RedCrafter07/card"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site source code
              </a>
            </p>
          </div>
        </div>
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
