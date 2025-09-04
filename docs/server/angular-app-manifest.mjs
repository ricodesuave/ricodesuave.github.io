
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ricodesuave.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ricodesuave.github.io"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 456, hash: 'e670ed3f480fed02029fd9b29186221bce55cf9c56d475432a9f3fc466e52570', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 969, hash: 'd091e0d6322a7c17e614653e965dd4dc1eccf545ffcd210e2c4d2c84c9c4989b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 615, hash: '0aa2dc7f79f4d30bd723528ad2f5d277056fff3f7a85a3c48711ea666359daf0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
