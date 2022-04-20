/**
 * ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
 * │                                              href                                              │
 * ├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
 * │ protocol │  │        auth         │          host          │           path            │ hash  │
 * │          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
 * │          │  │                     │    hostname     │ port │ pathname │     search     │       │
 * │          │  │                     │                 │      │          ├─┬──────────────┤       │
 * │          │  │                     │                 │      │          │ │    query     │       │
 * "  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
 * │          │  │          │          │    hostname     │ port │          │                │       │
 * │          │  │          │          ├─────────────────┴──────┤          │                │       │
 * │ protocol │  │ username │ password │          host          │          │                │       │
 * ├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
 * │   origin    │                     │         origin         │ pathname │     search     │ hash  │
 * ├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
 * │                                              href                                              │
 * └────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

/**
 * URL {
 *   href: 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash',
 *   origin: 'https://sub.example.com:8080',
 *   protocol: 'https:',
 *   username: 'user',
 *   password: 'pass',
 *   host: 'sub.example.com:8080',
 *   hostname: 'sub.example.com',
 *   port: '8080',
 *   pathname: '/p/a/t/h',
 *   search: '?query=string',
 *   searchParams: URLSearchParams { 'query' => 'string' },
 *   hash: '#hash'
 * }
 */
const myURL = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash')

console.log(myURL)
