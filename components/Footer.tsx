import { poems } from "@/poems";
import { BookOpenIcon } from "@heroicons/react/24/outline";

function splitIntoFourColumns<T>(array: T[], chunks: number): T[][] {
  if (chunks < 2) return [array];

  let len = array.length,
    out = [],
    i = 0,
    size;

  if (len % chunks === 0) {
    size = Math.floor(len / chunks);
    while (i < len) {
      out.push(array.slice(i, (i += size)));
    }
  } else {
    while (i < len) {
      size = Math.ceil((len - i) / chunks--);
      out.push(array.slice(i, (i += size)));
    }
  }

  return out;
}

const [first, second, third, fourth] = splitIntoFourColumns(poems, 4);

export default function Example() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div>
            <span className="sr-only">Poem Generator</span>
            <BookOpenIcon className="w-6 h-6" />
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <ul role="list" className="space-y-4">
                {first.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <ul role="list" className="space-y-4 mt-4 md:mt-0">
                {second.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <ul role="list" className="space-y-4">
                {third.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <ul role="list" className="space-y-4 mt-4 md:mt-0">
                {fourth.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
